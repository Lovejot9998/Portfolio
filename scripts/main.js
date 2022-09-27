//Scrollama 
const scroller1 = scrollama();
const scroller2 = scrollama();

			scroller1.setup({
				step: '.section-heading', 
				//debug: true, 
				offset: 1,
				progress: true,
				order: true,
				once:true,
				//threshold: 4,


			}).onStepEnter((response)=>{

				response.element.classList.add('slideIn');

			
			})//.onStepExit((response)=>{
				//if(response.direction === 'up'){
				//	response.element.classList.remove('slideIn');
				//}
				
			//});

			scroller2.setup({
				step: '.step', 
				//debug: true, 
				offset: 1,
				progress: true,
				order: true,
				once:true,
				//threshold: 4,


			}).onStepEnter((response)=>{				
				response.element.classList.add('slideUp');
			})
			//.onStepExit((response)=>{
				//if(response.direction === 'up'){
				//	response.element.classList.remove('slideUp');
				//}
				
			//});

			window.addEventListener('resize' , scroller.resize);



