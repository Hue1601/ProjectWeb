<template>
  <div class="container">
    <comp-header />
    <div class="messaging">
      <div class="inbox">
        <div class="inbox_list">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            <div class="srch_bar">
              <div class="stylish-input-group">
                <input type="text" class="search-bar" placeholder="Search" v-model="searchQuery" />
                <span class="input-group-addon">
                  <button type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                </span>
              </div>
            </div>
          </div>
          <div class="inbox_chat">
            <div
              class="chat_people"
              v-for="peerUser in filteredPeerUsers"
              :key="peerUser.username"
              @click="selectPeerUser(peerUser.username)"
              :class="{ active_chat: peerUser.username === UsernameChat }"
            >
              <div class="chat_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="User" />
              </div>
              <div class="chat_ib">
                <h5>{{ peerUser.username }} <span class="chat_date"></span></h5>
                <p>{{ peerUser.lastMessage }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- chatbox -->
        <div v-if="UsernameChat === null">
          <p>Welcome</p>
        </div>
        <div class="mesgs" v-else>
          <div class="nameuser">
            <h5>Chat with: {{ UsernameChat }}</h5>
          </div>
          <div class="history">
            <div
              v-for="message in filteredMessages"
              :key="message.id"
              :class="message.iduser.username === loginUsername ? 'MessageFrom' : 'MessageTo'"
            >
              <div v-if="message.iduser.username !== loginUsername" class="MessageTo">
                <div class="MessageTo_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="User" />
                </div>
                <div class="received">
                  <div class="received_withd">
                    <p>{{ message.messagetext }}</p>
                    <span class="time_date">
                      {{ message.iduser.username }} | {{ formatDate(message.timestamp) }}
                    </span>
                  </div>
                </div>
              </div>
              <div v-else class="MessageFrom">
                <div class="sent">
                  <p>{{ message.messagetext }}</p>
                  <span class="time_date">{{ formatDate(message.timestamp) }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="type">
            <div class="input_write">
              <input v-model="newMessage" type="text" class="write" placeholder="Type a message" />
              <button class="send_btn" type="button" @click="sendMessage">
                <i class="bi bi-send-fill"></i>
              </button>
            </div>
            <a><i class="bi bi-file-earmark-arrow-up"></i></a>
            <a><i class="bi bi-image"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompHeader from "../../components/CompHeader.vue";
import axios from "axios";
const baseUrl = "http://localhost:8080/api";

export default {
  name: "web-chat",
  data() {
    return {
      loginUsername: this.$store.state.user.username,
      UsernameChat: null,
      newMessage: "",
      messages: [],
      peerUsers: [],
      searchQuery: "",
    };
  },
  async created() {
    try {
      const response = await axios.get(`${baseUrl}/messages`);
      this.messages = response.data;
      this.letsChat();
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  },
  methods: {
    letsChat() {
      const uniqueUsers = new Set();
      this.messages.forEach((message) => {
        if (message.iduser.username !== this.loginUsername) {
          uniqueUsers.add(message.iduser.username);
        }
      });

      this.peerUsers = Array.from(uniqueUsers).map((username) => {
        return {
          username,
          lastMessage: this.getLastMessage(username),
        };
      });
    },
    getLastMessage(username) {
      const userMessages = this.messages.filter(
        (message) => message.iduser.username === username
      );
      return userMessages.length
        ? userMessages[userMessages.length - 1].messagetext
        : "No messages";
    },
    selectPeerUser(username) {
      this.UsernameChat = username;
    },
    async sendMessage() {
      if (!this.newMessage.trim()) return;

      try {
        const newMessageData = {
          messagetext: this.newMessage,
          iduser: { id: this.$store.state.user.id, username: this.loginUsername },
          timestamp: new Date().toISOString(),
        };
        const response = await axios.post(`${baseUrl}/messages`, newMessageData);
        this.messages.push(response.data);
        this.newMessage = "";
        this.letsChat();
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`;
    },
  },
  computed: {
    filteredMessages() {
      return this.messages.filter(
        (message) =>
          message.iduser.username === this.UsernameChat ||
          (message.iduser.username === this.loginUsername && this.UsernameChat !== null)
      );
    },
    filteredPeerUsers() {
      return this.peerUsers.filter((user) =>
        user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  components: {
    CompHeader,
  },
};
</script>



<style>
.container{max-width:1170px; margin:auto;}
img{ max-width:100%;}
.nameuser{
  border-bottom: 1px solid  #c4c4c4;
    padding: 0 15px;

}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 50%;
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}
.inbox_list {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 30%; border-right:1px solid #c4c4c4;
}
.inbox {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
  height: 90vh;
}
.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ 
  overflow:hidden; clear:both;
      margin-left: 10px;
    margin-top: 10px}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { 
  /* height: 550px; */
   height: 90vh;
   overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.MessageTo_img {
  display: inline-block;
  width: 6%;
}
.received{
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd { width: 57%;}
.mesgs {
  float: left;
  padding: 15px 15px 0 25px;
  width: 70%;
}

 .sent p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.MessageFrom{ overflow:hidden; }
.sent {
  float: right;
  width: 46%;
}
.input_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type {border-top: 1px solid #c4c4c4;position: relative;}
.send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.history {
  height: 520px;
  overflow-y: auto;
  margin-top: 10px
}
</style>
