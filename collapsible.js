    new Collapsible({
    node: document.querySelectorAll('.block'),
    eventNode: '.block__title'
});
        
    new Collapsible({
    node: document.querySelectorAll('.block'),
    eventNode: '.block__title',
    isCollapsed: false
});
        
    new Collapsible({
    node: document.querySelectorAll('.block'),
    eventNode: '.block__title',
    observe: true
});
        
//    new Collapsible({
//    node: document.querySelectorAll('.block'),
//    eventNode: '.block__title',
//    expandCallback: function(){},
//    collapseCallback function(){},
//    observeCallback function(){}
//});