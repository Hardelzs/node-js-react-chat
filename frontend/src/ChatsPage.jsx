import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '1edc3e75-f921-4544-8dc6-e33c7db8669a',
    props.user.username,
     props.user.secret
     );
  return (
    <div style = {{ height: '100vh'}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps}  style={{ height: '100%'}} />
  </div>
  )
}

export default ChatsPage