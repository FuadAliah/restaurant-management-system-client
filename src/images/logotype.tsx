import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={140} height={35} fill="none" {...props} >
		<path fill="#fff" d="M64.59 3.293a.493.493 0 0 0-.476-.476h-2.78a.494.494 0 0 0-.478.476l.224 1.319v13.957l-.224 1.326c0 .25.226.477.477.477h2.781a.493.493 0 0 0 .477-.477l-.225-1.326V4.612l.225-1.319ZM80.574 5.825l1.338.225a.475.475 0 0 0 .476-.478l-.224-2.279a.475.475 0 0 0-.475-.476H71.256a.475.475 0 0 0-.476.476l.224 1.319v13.963l-.224 1.32c0 .25.199.476.476.476H81.69a.475.475 0 0 0 .475-.476l.224-2.282a.475.475 0 0 0-.476-.476l-1.326.224h-6.323v-4.387h4.885l1.311.223c.25 0 .475-.2.475-.475V10.19a.492.492 0 0 0-.475-.475l-1.311.226h-4.885V5.825h6.31ZM50.555 9.989c-2.032-.826-2.962-1.632-2.962-2.81 0-.803.78-1.754 2.208-1.754 2.158 0 3.302 1.533 3.39 1.589.303.2.678 0 .88-.3L55.12 5.07c.175-.249.1-.674-.151-.826-.5-.377-2.457-1.68-5.015-1.68-3.988 0-5.643 2.583-5.643 4.816 0 2.96 2.356 4.463 4.716 5.417 2.106.854 3.184 1.73 3.184 3.009 0 1.079-.979 1.932-2.282 1.932-2.544 0-3.553-1.742-3.612-1.779a.579.579 0 0 0-.85.178l-1.08 1.776c-.226.4-.101.526.126.752.5.476 2.356 1.955 5.515 1.955 3.538 0 5.768-2.383 5.768-4.963 0-3.238-2.808-4.692-5.24-5.67ZM95.2 10.817h-4.089V5.825h4.09c1.326 0 2.48 1.103 2.48 2.433 0 1.405-1.154 2.56-2.48 2.56Zm4.89 7.758-2.86-5.301c2.183-.879 3.712-2.757 3.712-5.064 0-2.986-2.459-5.393-5.467-5.393h-7.398a.476.476 0 0 0-.476.476l.225 1.335v13.944l-.225 1.323c0 .25.2.476.476.476h2.757c.25 0 .476-.226.476-.476l-.223-1.323V13.5h2.784l2.541 5.067.57 1.578c.05.101.175.226.4.226h3.083c.427 0 .602-.4.427-.726l-.802-1.07ZM128.89 14.379l2.459-5.518h.075l2.508 5.518h-5.042Zm11.059 5.338-.752-1.151-7.196-15.725c-.075-.15-.178-.276-.429-.276h-.251c-.224 0-.349.125-.425.276l-7.27 15.737-.754 1.14c-.151.325.05.654.426.654h2.857c.399 0 .627-.254.726-.502l.136-1.295.646-1.414h7.499l.634 1.408.145 1.3c.175.353.35.503.725.503h2.858c.375 0 .577-.329.425-.655ZM113.949 10.817h-4.088V5.825h4.088c1.326 0 2.483 1.103 2.483 2.433 0 1.405-1.157 2.56-2.483 2.56Zm4.889 7.758-2.856-5.301c2.179-.879 3.708-2.757 3.708-5.064 0-2.986-2.459-5.393-5.467-5.393h-7.398a.475.475 0 0 0-.474.476l.224 1.335v13.944l-.224 1.323c0 .25.2.476.474.476h2.759c.25 0 .479-.226.479-.476l-.229-1.323V13.5h2.785l2.541 5.067.57 1.578c.05.101.175.226.399.226h3.084c.427 0 .602-.4.427-.726l-.802-1.07ZM91.658 26.32h-1.222a.192.192 0 0 0-.196.194v3.614h-.01l-4.063-3.91h-.254c-.104 0-.196.08-.196.183l.01 6.856c0 .102.09.193.196.193h1.21c.112 0 .195-.09.195-.193v-3.801h.008L91.36 33.5a.292.292 0 0 0 .132.05h.165c.101 0 .192-.079.192-.181v-6.855a.197.197 0 0 0-.192-.195ZM73.28 31.942h-.977v-4.125h.978c1.15 0 1.986.905 1.986 2.057 0 1.162-.836 2.068-1.986 2.068Zm.103-5.622h-2.486c-.102 0-.183.089-.183.193v6.743c0 .103.082.194.183.194h2.486c1.964 0 3.577-1.6 3.577-3.576 0-1.955-1.613-3.554-3.577-3.554ZM81.7 26.32h-1.223a.199.199 0 0 0-.193.194v6.743a.2.2 0 0 0 .193.193H81.7a.2.2 0 0 0 .193-.193v-6.743a.199.199 0 0 0-.193-.195ZM63.608 31.006l.765-1.681h.01l.773 1.68h-1.548Zm1.001-4.677a.214.214 0 0 0-.176-.11h-.1a.21.21 0 0 0-.174.11l-3.19 6.856c-.06.134.021.265.175.265h1.12a.381.381 0 0 0 .368-.245l.364-.814h2.774l.366.803c.09.196.172.256.356.256h1.13c.152 0 .235-.13.173-.265l-3.186-6.856ZM56.085 29.364h-1.507v-1.588h1.507c.418 0 .775.346.775.773 0 .43-.357.815-.775.815Zm2.355-.844c0-1.213-1-2.2-2.222-2.2h-3.045a.192.192 0 0 0-.194.192v6.744c0 .102.081.194.194.194h1.21a.201.201 0 0 0 .195-.194V30.66h.702l1.355 2.698c.021.041.082.092.163.092h1.357c.173 0 .244-.163.173-.297l-1.397-2.585c.886-.357 1.509-1.112 1.509-2.048ZM49.683 26.32H45.16a.192.192 0 0 0-.194.194v1.11c0 .102.081.192.194.192h1.458v5.441c0 .102.089.193.191.193h1.224c.102 0 .193-.09.193-.193v-5.441h1.456c.114 0 .194-.09.194-.191v-1.111a.191.191 0 0 0-.194-.195ZM111.81 29.374h-.965v-1.559h.965c.44 0 .805.327.805.755a.798.798 0 0 1-.805.804Zm.095-3.055h-2.459c-.11 0-.193.09-.193.194v6.743c0 .103.083.195.193.195h1.205a.203.203 0 0 0 .194-.195v-2.393h1.067c1.242 0 2.272-1.028 2.272-2.293 0-1.233-1.03-2.251-2.279-2.251ZM101.248 29.782H99.2a.192.192 0 0 0-.197.195v1.005c0 .105.087.187.197.187h.642v.59c-.303.12-.61.162-.907.162a2.03 2.03 0 0 1-2.018-2.024c0-1.123.896-2.06 2.01-2.06.498 0 .947.13 1.334.488a.21.21 0 0 0 .273-.008l.805-.856c.084-.081.072-.205-.018-.276-.695-.601-1.634-.958-2.489-.958a3.65 3.65 0 0 0-3.655 3.67 3.63 3.63 0 0 0 3.655 3.644c1.477 0 2.526-.66 2.526-.66a.248.248 0 0 0 .083-.164l-.01-2.74c0-.103-.08-.195-.183-.195ZM120.475 31.921a2.038 2.038 0 0 1-2.029-2.026c0-1.121.917-2.048 2.029-2.048a2.05 2.05 0 0 1 2.036 2.048c0 1.111-.914 2.026-2.036 2.026Zm0-5.702a3.65 3.65 0 0 0-3.658 3.676 3.631 3.631 0 0 0 3.658 3.655 3.641 3.641 0 0 0 3.666-3.655 3.659 3.659 0 0 0-3.666-3.676ZM139.106 26.32h-4.525a.193.193 0 0 0-.193.194v1.11c0 .102.083.192.193.192h1.459v5.441a.2.2 0 0 0 .195.193h1.218c.107 0 .194-.09.194-.193v-5.441h1.459c.11 0 .193-.09.193-.191v-1.111a.193.193 0 0 0-.193-.195ZM129.737 29.12c-.801-.323-1.109-.611-1.109-.99 0-.272.277-.518.642-.518.62 0 1.367.56 1.459.61.091.073.273-.019.345-.13l.517-.786c.043-.07.065-.253-.06-.325-.304-.225-1.117-.763-2.178-.763-1.572 0-2.354 1.017-2.354 2.026 0 1.222 1.102 1.905 1.979 2.252.69.274 1.047.6 1.047 1.03 0 .353-.295.61-.702.61-.672 0-1.405-.54-1.447-.561-.072-.049-.267-.073-.347.061l-.477.845c-.085.144-.053.185.049.287.235.234.968.783 2.291.783 1.497 0 2.404-1.058 2.404-2.108 0-1.386-1.264-2.007-2.059-2.322Z" />
		<path fill="#FFF500" d="M33.303 8.889H2.42A17.756 17.756 0 0 0 0 17.86c0 6.109 3.07 11.497 7.746 14.717 3.912-.68 9.482-2.332 9.482-6.243 0-4.556-8.91-6.117-8.383-10.76.49-4.347 7.99-5.045 7.99-5.045s-3.929 1.131-3.669 3.438c.392 3.482 13.86 4.868 14.605 12.904.381 4.118-2.17 6.608-3.966 7.832 6.94-2.451 11.915-9.064 11.915-16.843 0-3.271-.88-6.335-2.417-8.971ZM7.805 7.583l7.302-5.143 7.303 5.143h1.788l-3.794-2.671 1.632-1.153 5.43 3.824h4.999a18.033 18.033 0 0 0-2.796-3.12 18.22 18.22 0 0 0-3.453-2.392A17.786 17.786 0 0 0 22.234.539 17.882 17.882 0 0 0 17.86 0a17.718 17.718 0 0 0-8.353 2.07 17.982 17.982 0 0 0-6.25 5.513h4.548Z" />
	</svg>
)
const Memo = memo(SvgComponent)
export default Memo
