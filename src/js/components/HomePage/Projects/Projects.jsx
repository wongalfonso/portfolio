
// export default class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalIsOpen: false,
//       selected: '',
//       hover: '',
//     }
    // this.openModal = this.openModal.bind(this);
    // this.afterOpen = this.afterOpen.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    // this.modalTemplate = this.modalTemplate.bind(this);
  // }  

  // openModal(project) {
  //   this.setState({ modalIsOpen: true, selected: project })
  // }
  // closeModal() {
  //   this.setState({ modalIsOpen: false })
  // }

  // modalTemplate() {
  //   ReactGA.event({
  //     category: 'Opened Modal',
  //     action: `Opened ${this.state.selected}`
  //   })
  //   return (
  //     <Modal
  //       isOpen={this.state.modalIsOpen}
  //       onAfterOpen={this.afterOpen}
  //       onRequestClose={this.closeModal}
  //       ariaHideApp={false}
  //       className={'ReactModal_Content ReactModal_Content--after-open'}
  //       style={modalStyle}
  //     >
  //       {(this.state.selected === 'Change') && <ChangeCalc close={this.closeModal} />}
  //       {(this.state.selected == 'VSTDA') && <VSTDA close={this.closeModal} />}
  //       {(this.state.selected == 'Astro') && <AstroWeight close={this.closeModal} />}
  //       {(this.state.selected == 'Weather') && <Weather close={this.closeModal} />}

  //     </Modal>
  //   )
  // }
  

//   render() {
//     const { title } = this.props;
//     return (
//       <div  className='projects-page' 
//             id='projectPage' 
//             ref={(project) => this._project = project} >        
//           {/* {this.modalTemplate()} */}          
//           <FormProjects
//             gitHub = {this.gitHub}
//             title = {title}
//           />       
//           <ApiProjects  
//             gitHub = {this.gitHub}
//             title = {title}
//           />         
//       </div>
//     )
//   }
// };
