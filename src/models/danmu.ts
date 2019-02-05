// import * as net from 'net'

interface DouyuDanmuProps {
    roomId: string
    url: string
    port: number
}

export class DouyuDanmu {
    constructor(props: DouyuDanmuProps) {

        // const client = new net.Socket()
        // client.connect(props.port, props.url, function() {
        //     console.log('connected.....')
        //     //向端口写入数据到达服务端

        //     client.write(`type@=loginreq/roomid@=${props.roomId}/`);
        // });

        // client.on('data', function(data) {
        //     console.log('receive data:', data)
        // })

        // client.on('error', function(error) {
        //     //错误出现之后关闭连接
        //     console.log('error:' + error)
        //     client.destroy()
        // })

        // client.on('close', function() {
        // //正常关闭连接
        //     console.log('Connection closed');
        // })
    }
}