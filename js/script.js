$(document).ready(()=>{

	setAccordionTrigger();
	
})


let setAccordionTrigger = ()=> {
	$('.accordion-trigger').on('click',(event)=>{
		$($(event.target).attr('target')).slideToggle(500);
	});
}
