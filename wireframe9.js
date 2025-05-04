
export default async function render(
    parentNode,
    startX,
    startY
  ) {
  
    // FRAME
    const node_0 = figma.createFrame();
    
    // append
    parentNode.appendChild(node_0);
    
    // layout
    node_0.resize(1440, 4081);
    
    node_0.x = startX;
    node_0.y = startY;
    node_0.constrainProportions = false;
    node_0.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_0.layoutAlign = 'INHERIT';
    node_0.layoutGrow = 0;
    node_0.layoutPositioning = 'AUTO';
    node_0.rotation = 0;// before frame
    
    // frame
    node_0.layoutMode = 'NONE';
    node_0.primaryAxisSizingMode = 'AUTO';
    node_0.primaryAxisAlignItems = 'MIN';
    node_0.counterAxisAlignItems = 'MIN';
    node_0.counterAxisSizingMode = 'FIXED';
    node_0.paddingLeft = 0;
    node_0.paddingRight = 0;
    node_0.paddingTop = 0;
    node_0.paddingBottom = 0;
    node_0.itemSpacing = 0;
    
    node_0.clipsContent = true;
    
    
    // base
    node_0.name = 'Wireframe - 9';
    // scene
    
    // blend
    node_0.blendMode = 'PASS_THROUGH';
    node_0.effects = [];
    node_0.isMask = false;
    // geometry
  node_0.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_0.strokeWeight = 0;
    
    // GROUP
    const node_1 = figma.createFrame();
    
    // append
    node_0.appendChild(node_1);
    
    // layout
    node_1.resize(2496, 1664);
    
    node_1.x = -614;
    node_1.y = -640;
    node_1.constrainProportions = false;
    
    node_1.layoutAlign = 'INHERIT';
    node_1.layoutGrow = 0;
    node_1.layoutPositioning = 'AUTO';
    node_1.rotation = 0;
    
    // base
    node_1.name = 'Group 1000001981';
    
    // blend
    node_1.blendMode = 'PASS_THROUGH';
    node_1.effects = [];
    node_1.isMask = false;
    // scene
    
    // RECTANGLE
    const node_2 = figma.createRectangle();
    
    // append
    node_1.appendChild(node_2);
    
    // base
    node_2.name = 'DSCF6764 1';
    // scene
    
    // layout
    node_2.resize(2496, 1664);
    
    node_2.x = -614;
    node_2.y = -640;
    node_2.constrainProportions = true;
    node_2.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_2.layoutAlign = 'INHERIT';
    node_2.layoutGrow = 0;
    node_2.layoutPositioning = 'AUTO';
    node_2.rotation = 0;
    
    // blend
    node_2.blendMode = 'PASS_THROUGH';
    node_2.effects = [];
    node_2.isMask = false;
    // geometry
  node_2.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"214a1a7f0c2acd52ed03c90bfd44b7e5c5d42170"}]
  node_2.strokeWeight = 0;
  
    // RECTANGLE
    const node_3 = figma.createRectangle();
    
    // append
    node_1.appendChild(node_3);
    
    // base
    node_3.name = 'Rectangle 4546';
    // scene
    
    // layout
    node_3.resize(1440, 1024);
    
    node_3.x = 0;
    node_3.y = 0;
    node_3.constrainProportions = false;
    node_3.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_3.layoutAlign = 'INHERIT';
    node_3.layoutGrow = 0;
    node_3.layoutPositioning = 'AUTO';
    node_3.rotation = 0;
    
    // blend
    node_3.blendMode = 'PASS_THROUGH';
    node_3.effects = [];
    node_3.isMask = false;
    // geometry
  node_3.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_3.strokeWeight = 0;
  
    // TEXT 
    const node_4 = figma.createText();
    
    // append
    node_0.appendChild(node_4);
    await figma.loadFontAsync(undefined);
    node_4.autoRename = true;
    node_4.fontName = undefined;
    node_4.fontSize = 64;
    node_4.characters = 'Your Trusted Freshwater Aquarium Shop in Dramaga, Bogor';
    node_4.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_4.textCase = 'ORIGINAL';
    node_4.textDecoration = 'NONE';
    node_4.letterSpacing = {"unit":"PERCENT","value":0};
    node_4.lineHeight = {"unit":"PERCENT","value":94.9999988079071};
    node_4.hyperlink = null;
    node_4.textAlignHorizontal = 'LEFT';
    node_4.textAlignVertical = 'CENTER';
    node_4.textAutoResize = 'NONE';
    node_4.paragraphIndent = 0;
    node_4.paragraphSpacing = 0;
    
    // base
    node_4.name = 'Your Trusted Freshwater Aquarium Shop in Dramaga, Bogor';
    // scene
    
    // layout
    node_4.resize(917, 261);
    
    node_4.x = 72;
    node_4.y = 432;
    node_4.constrainProportions = false;
    node_4.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_4.layoutAlign = 'INHERIT';
    node_4.layoutGrow = 0;
    node_4.layoutPositioning = 'AUTO';
    node_4.rotation = 0;
    
    // blend
    node_4.blendMode = 'PASS_THROUGH';
    node_4.effects = [];
    node_4.isMask = false;
    // geometry
  node_4.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_4.strokeWeight = 0;
  
    // RECTANGLE
    const node_5 = figma.createRectangle();
    
    // append
    node_0.appendChild(node_5);
    
    // base
    node_5.name = 'About Us';
    // scene
    
    // layout
    node_5.resize(279, 81);
    
    node_5.x = 72;
    node_5.y = 676;
    node_5.constrainProportions = false;
    node_5.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_5.layoutAlign = 'INHERIT';
    node_5.layoutGrow = 0;
    node_5.layoutPositioning = 'AUTO';
    node_5.rotation = 0;
    
    // blend
    node_5.blendMode = 'PASS_THROUGH';
    node_5.effects = [{"type":"DROP_SHADOW","visible":true,"radius":17,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":8},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":31,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":31},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":41,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":69},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":49,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":123},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":54,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":192},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_5.isMask = false;
    // geometry
  node_5.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9759615659713745,"g":0.9803686141967773,"b":1},"boundVariables":{}}]
  node_5.strokeWeight = 0;
  
    // TEXT 
    const node_6 = figma.createText();
    
    // append
    node_0.appendChild(node_6);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_6.autoRename = true;
    node_6.fontName = {"family":"Poppins","style":"Bold"};
    node_6.fontSize = 48;
    node_6.characters = 'Produk Kami';
    node_6.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}];
    node_6.textCase = 'ORIGINAL';
    node_6.textDecoration = 'NONE';
    node_6.letterSpacing = {"unit":"PERCENT","value":0};
    node_6.lineHeight = {"unit":"AUTO"};
    node_6.hyperlink = null;
    node_6.textAlignHorizontal = 'LEFT';
    node_6.textAlignVertical = 'CENTER';
    node_6.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_6.paragraphIndent = 0;
    node_6.paragraphSpacing = 0;
    
    // base
    node_6.name = 'Produk Kami';
    // scene
    
    // layout
    node_6.resize(317, 72);
    
    node_6.x = 562;
    node_6.y = 2265;
    node_6.constrainProportions = false;
    node_6.constraints = {"horizontal":"CENTER","vertical":"MIN"};
    node_6.layoutAlign = 'INHERIT';
    node_6.layoutGrow = 0;
    node_6.layoutPositioning = 'AUTO';
    node_6.rotation = 0;
    
    // blend
    node_6.blendMode = 'PASS_THROUGH';
    node_6.effects = [];
    node_6.isMask = false;
    // geometry
  node_6.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_6.strokeWeight = 0;
  
    // TEXT 
    const node_7 = figma.createText();
    
    // append
    node_0.appendChild(node_7);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_7.autoRename = true;
    node_7.fontName = {"family":"Poppins","style":"Bold"};
    node_7.fontSize = 32;
    node_7.characters = 'About us';
    node_7.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13503143191337585,"g":0.33317533135414124,"b":0.6105769276618958},"boundVariables":{}}];
    node_7.textCase = 'ORIGINAL';
    node_7.textDecoration = 'NONE';
    node_7.letterSpacing = {"unit":"PERCENT","value":0};
    node_7.lineHeight = {"unit":"AUTO"};
    node_7.hyperlink = null;
    node_7.textAlignHorizontal = 'LEFT';
    node_7.textAlignVertical = 'CENTER';
    node_7.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_7.paragraphIndent = 0;
    node_7.paragraphSpacing = 0;
    
    // base
    node_7.name = 'About us';
    // scene
    
    // layout
    node_7.resize(147, 48);
    
    node_7.x = 138;
    node_7.y = 693;
    node_7.constrainProportions = false;
    node_7.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_7.layoutAlign = 'INHERIT';
    node_7.layoutGrow = 0;
    node_7.layoutPositioning = 'AUTO';
    node_7.rotation = 0;
    
    // blend
    node_7.blendMode = 'PASS_THROUGH';
    node_7.effects = [];
    node_7.isMask = false;
    // geometry
  node_7.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13503143191337585,"g":0.33317533135414124,"b":0.6105769276618958},"boundVariables":{}}]
  node_7.strokeWeight = 0;
  
    // RECTANGLE
    const node_8 = figma.createRectangle();
    
    // append
    node_0.appendChild(node_8);
    
    // base
    node_8.name = 'GTA San Andreas map 1';
    // scene
    
    // layout
    node_8.resize(738.4370727539062, 317.8367919921875);
    
    node_8.x = 47.42323303222656;
    node_8.y = 3004.163330078125;
    node_8.constrainProportions = true;
    node_8.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_8.layoutAlign = 'INHERIT';
    node_8.layoutGrow = 0;
    node_8.layoutPositioning = 'AUTO';
    node_8.rotation = 0;
    
    // blend
    node_8.blendMode = 'PASS_THROUGH';
    node_8.effects = [];
    node_8.isMask = false;
    // geometry
  node_8.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"CROP","imageTransform":[[1,0,0],[0,0.4353730082511902,0.18860980868339539]],"scalingFactor":0.5,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":-0.17000000178813934,"tint":0,"highlights":0,"shadows":0},"imageHash":"47b42a6e320a5bba001d712b56e381d09f292315"}]
  node_8.strokeWeight = 0;
  
    figma.notify("don't know this type: BOOLEAN_OPERATION");
    
  
    // TEXT 
    const node_9 = figma.createText();
    
    // append
    node_0.appendChild(node_9);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_9.autoRename = true;
    node_9.fontName = {"family":"Poppins","style":"Bold"};
    node_9.fontSize = 35.939144134521484;
    node_9.characters = 'Our location';
    node_9.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}];
    node_9.textCase = 'ORIGINAL';
    node_9.textDecoration = 'NONE';
    node_9.letterSpacing = {"unit":"PERCENT","value":0};
    node_9.lineHeight = {"unit":"AUTO"};
    node_9.hyperlink = null;
    node_9.textAlignHorizontal = 'LEFT';
    node_9.textAlignVertical = 'CENTER';
    node_9.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_9.paragraphIndent = 0;
    node_9.paragraphSpacing = 0;
    
    // base
    node_9.name = 'Our location';
    // scene
    
    // layout
    node_9.resize(228, 54);
    
    node_9.x = 47;
    node_9.y = 2947;
    node_9.constrainProportions = false;
    node_9.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_9.layoutAlign = 'INHERIT';
    node_9.layoutGrow = 0;
    node_9.layoutPositioning = 'AUTO';
    node_9.rotation = 0;
    
    // blend
    node_9.blendMode = 'PASS_THROUGH';
    node_9.effects = [{"type":"DROP_SHADOW","visible":true,"radius":2.2461965084075928,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.25},"offset":{"x":0,"y":2.2461965084075928},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":false}];
    node_9.isMask = false;
    // geometry
  node_9.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_9.strokeWeight = 0;
  
    // TEXT 
    const node_10 = figma.createText();
    
    // append
    node_0.appendChild(node_10);
    await figma.loadFontAsync({"family":"Poppins","style":"Regular"});
    node_10.autoRename = true;
    node_10.fontName = {"family":"Poppins","style":"Regular"};
    node_10.fontSize = 25.36880874633789;
    node_10.characters = 'Jalan Perwira....';
    node_10.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}];
    node_10.textCase = 'ORIGINAL';
    node_10.textDecoration = 'NONE';
    node_10.letterSpacing = {"unit":"PERCENT","value":0};
    node_10.lineHeight = {"unit":"AUTO"};
    node_10.hyperlink = null;
    node_10.textAlignHorizontal = 'LEFT';
    node_10.textAlignVertical = 'CENTER';
    node_10.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_10.paragraphIndent = 0;
    node_10.paragraphSpacing = 0;
    
    // base
    node_10.name = 'Jalan Perwira....';
    // scene
    
    // layout
    node_10.resize(192, 38);
    
    node_10.x = 47;
    node_10.y = 3339;
    node_10.constrainProportions = false;
    node_10.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_10.layoutAlign = 'INHERIT';
    node_10.layoutGrow = 0;
    node_10.layoutPositioning = 'AUTO';
    node_10.rotation = 0;
    
    // blend
    node_10.blendMode = 'PASS_THROUGH';
    node_10.effects = [{"type":"DROP_SHADOW","visible":true,"radius":1.5855505466461182,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.25},"offset":{"x":0,"y":1.5855505466461182},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":false}];
    node_10.isMask = false;
    // geometry
  node_10.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_10.strokeWeight = 0;
  
    // TEXT 
    const node_11 = figma.createText();
    
    // append
    node_0.appendChild(node_11);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_11.autoRename = true;
    node_11.fontName = {"family":"Poppins","style":"Bold"};
    node_11.fontSize = 24;
    node_11.characters = 'Ikan';
    node_11.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3291666805744171,"g":0.3291666805744171,"b":0.3291666805744171},"boundVariables":{}}];
    node_11.textCase = 'ORIGINAL';
    node_11.textDecoration = 'NONE';
    node_11.letterSpacing = {"unit":"PERCENT","value":0};
    node_11.lineHeight = {"unit":"AUTO"};
    node_11.hyperlink = null;
    node_11.textAlignHorizontal = 'LEFT';
    node_11.textAlignVertical = 'CENTER';
    node_11.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_11.paragraphIndent = 0;
    node_11.paragraphSpacing = 0;
    
    // base
    node_11.name = 'Ikan';
    // scene
    
    // layout
    node_11.resize(55, 36);
    
    node_11.x = 166;
    node_11.y = 2470;
    node_11.constrainProportions = false;
    node_11.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_11.layoutAlign = 'INHERIT';
    node_11.layoutGrow = 0;
    node_11.layoutPositioning = 'AUTO';
    node_11.rotation = 0;
    
    // blend
    node_11.blendMode = 'PASS_THROUGH';
    node_11.effects = [];
    node_11.isMask = false;
    // geometry
  node_11.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3291666805744171,"g":0.3291666805744171,"b":0.3291666805744171},"boundVariables":{}}]
  node_11.strokeWeight = 0;
  
    // FRAME
    const node_12 = figma.createFrame();
    
    // append
    node_0.appendChild(node_12);
    
    // layout
    node_12.resize(1440, 1123);
    
    node_12.x = -1.8189894035458565e-12;
    node_12.y = 977.5;
    node_12.constrainProportions = false;
    node_12.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_12.layoutAlign = 'INHERIT';
    node_12.layoutGrow = 0;
    node_12.layoutPositioning = 'AUTO';
    node_12.rotation = 0;// before frame
    
    // frame
    node_12.layoutMode = 'NONE';
    node_12.primaryAxisSizingMode = 'AUTO';
    node_12.primaryAxisAlignItems = 'MIN';
    node_12.counterAxisAlignItems = 'MIN';
    node_12.counterAxisSizingMode = 'FIXED';
    node_12.paddingLeft = 0;
    node_12.paddingRight = 0;
    node_12.paddingTop = 0;
    node_12.paddingBottom = 0;
    node_12.itemSpacing = 0;
    
    node_12.clipsContent = true;
    
    
    // base
    node_12.name = 'About us';
    // scene
    
    // blend
    node_12.blendMode = 'PASS_THROUGH';
    node_12.effects = [];
    node_12.isMask = false;
    // geometry
  node_12.fills = []
  node_12.strokeWeight = 0;
    
    // RECTANGLE
    const node_13 = figma.createRectangle();
    
    // append
    node_12.appendChild(node_13);
    
    // base
    node_13.name = 'Rectangle 4558';
    // scene
    
    // layout
    node_13.resize(1437, 236.00001525878906);
    
    node_13.x = 3.000603675842285;
    node_13.y = 985.9999389648438;
    node_13.constrainProportions = false;
    node_13.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_13.layoutAlign = 'INHERIT';
    node_13.layoutGrow = 0;
    node_13.layoutPositioning = 'AUTO';
    node_13.rotation = 0;
    
    // blend
    node_13.blendMode = 'PASS_THROUGH';
    node_13.effects = [];
    node_13.isMask = false;
    // geometry
  node_13.fills = [{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":1,"g":1,"b":1,"a":1},"position":0,"boundVariables":{}},{"color":{"r":1,"g":1,"b":1,"a":0.7300000190734863},"position":0.16226015985012054,"boundVariables":{}},{"color":{"r":0.6000000238418579,"g":0.6000000238418579,"b":0.6000000238418579,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[-3.209448209418042e-7,-1.461300253868103,0.8482973575592041],[54.17874526977539,-3.09504315509912e-7,-26.608224868774414]]}]
  node_13.strokeWeight = 0;
  
    // GROUP
    const node_14 = figma.createFrame();
    
    // append
    node_12.appendChild(node_14);
    
    // layout
    node_14.resize(3579.999267578125, 782.533447265625);
    
    node_14.x = 136;
    node_14.y = 170.5;
    node_14.constrainProportions = false;
    
    node_14.layoutAlign = 'INHERIT';
    node_14.layoutGrow = 0;
    node_14.layoutPositioning = 'AUTO';
    node_14.rotation = 0;
    
    // base
    node_14.name = 'Group 1000001994';
    
    // blend
    node_14.blendMode = 'PASS_THROUGH';
    node_14.effects = [{"type":"DROP_SHADOW","visible":true,"radius":216.36866760253906,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":98.26744079589844},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":225.384033203125,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":392.168212890625},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":225.384033203125,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":883.5054321289062},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":225.384033203125,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":1570.4759521484375},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":225.384033203125,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":2453.981201171875},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_14.isMask = false;
    // scene
    
    // GROUP
    const node_15 = figma.createFrame();
    
    // append
    node_14.appendChild(node_15);
    
    // layout
    node_15.resize(1172.8326416015625, 731.7338256835938);
    
    node_15.x = 2543.165771484375;
    node_15.y = 195.7430763244629;
    node_15.constrainProportions = false;
    
    node_15.layoutAlign = 'INHERIT';
    node_15.layoutGrow = 0;
    node_15.layoutPositioning = 'AUTO';
    node_15.rotation = 0;
    
    // base
    node_15.name = 'Group 1000001989';
    
    // blend
    node_15.blendMode = 'PASS_THROUGH';
    node_15.effects = [];
    node_15.isMask = false;
    // scene
    
    // RECTANGLE
    const node_16 = figma.createRectangle();
    
    // append
    node_15.appendChild(node_16);
    
    // base
    node_16.name = 'Rectangle 4550';
    // scene
    
    // layout
    node_16.resize(1162.1490478515625, 731.7338256835938);
    
    node_16.x = 2543.165771484375;
    node_16.y = 195.7430763244629;
    node_16.constrainProportions = false;
    node_16.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_16.layoutAlign = 'INHERIT';
    node_16.layoutGrow = 0;
    node_16.layoutPositioning = 'AUTO';
    node_16.rotation = 0;
    
    // blend
    node_16.blendMode = 'PASS_THROUGH';
    node_16.effects = [];
    node_16.isMask = false;
    // geometry
  node_16.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.5833333134651184,"g":0.5833333134651184,"b":0.5833333134651184},"boundVariables":{}}]
  node_16.strokeWeight = 0;
  
    figma.notify("don't know this type: LINE");
    
  
    figma.notify("don't know this type: LINE");
    
  
    // TEXT 
    const node_17 = figma.createText();
    
    // append
    node_15.appendChild(node_17);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_17.autoRename = true;
    node_17.fontName = {"family":"Poppins","style":"Bold"};
    node_17.fontSize = 50.68285369873047;
    node_17.characters = 'Our Vision and Mission BLA BLA BLA BLA BLA ';
    node_17.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_17.textCase = 'ORIGINAL';
    node_17.textDecoration = 'NONE';
    node_17.letterSpacing = {"unit":"PERCENT","value":0};
    node_17.lineHeight = {"unit":"AUTO"};
    node_17.hyperlink = null;
    node_17.textAlignHorizontal = 'LEFT';
    node_17.textAlignVertical = 'CENTER';
    node_17.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_17.paragraphIndent = 0;
    node_17.paragraphSpacing = 0;
    
    // base
    node_17.name = 'Our Vision and Mission BLA BLA BLA BLA BLA';
    // scene
    
    // layout
    node_17.resize(592, 152);
    
    node_17.x = 2596.223575592041;
    node_17.y = 739.7919654846191;
    node_17.constrainProportions = false;
    node_17.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_17.layoutAlign = 'INHERIT';
    node_17.layoutGrow = 0;
    node_17.layoutPositioning = 'AUTO';
    node_17.rotation = 0;
    
    // blend
    node_17.blendMode = 'PASS_THROUGH';
    node_17.effects = [];
    node_17.isMask = false;
    // geometry
  node_17.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_17.strokeWeight = 0;
  
    // GROUP
    const node_18 = figma.createFrame();
    
    // append
    node_14.appendChild(node_18);
    
    // layout
    node_18.resize(1172.8331298828125, 731.73388671875);
    
    node_18.x = 1344.9930419921875;
    node_18.y = 195.7431354522705;
    node_18.constrainProportions = false;
    
    node_18.layoutAlign = 'INHERIT';
    node_18.layoutGrow = 0;
    node_18.layoutPositioning = 'AUTO';
    node_18.rotation = 0;
    
    // base
    node_18.name = 'Group 1000001990';
    
    // blend
    node_18.blendMode = 'PASS_THROUGH';
    node_18.effects = [];
    node_18.isMask = false;
    // scene
    
    // RECTANGLE
    const node_19 = figma.createRectangle();
    
    // append
    node_18.appendChild(node_19);
    
    // base
    node_19.name = 'Rectangle 4550';
    // scene
    
    // layout
    node_19.resize(1162.1490478515625, 731.7338256835938);
    
    node_19.x = 1344.9930419921875;
    node_19.y = 195.74315013678097;
    node_19.constrainProportions = false;
    node_19.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_19.layoutAlign = 'INHERIT';
    node_19.layoutGrow = 0;
    node_19.layoutPositioning = 'AUTO';
    node_19.rotation = 0;
    
    // blend
    node_19.blendMode = 'PASS_THROUGH';
    node_19.effects = [];
    node_19.isMask = false;
    // geometry
  node_19.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.16470588743686676,"g":0.16470588743686676,"b":0.16470588743686676},"boundVariables":{}}]
  node_19.strokeWeight = 0;
  
    figma.notify("don't know this type: LINE");
    
  
    figma.notify("don't know this type: LINE");
    
  
    // TEXT 
    const node_20 = figma.createText();
    
    // append
    node_18.appendChild(node_20);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_20.autoRename = true;
    node_20.fontName = {"family":"Poppins","style":"Bold"};
    node_20.fontSize = 50.68285369873047;
    node_20.characters = 'Our History BLA BLA BLA BLA BLA ';
    node_20.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_20.textCase = 'ORIGINAL';
    node_20.textDecoration = 'NONE';
    node_20.letterSpacing = {"unit":"PERCENT","value":0};
    node_20.lineHeight = {"unit":"AUTO"};
    node_20.hyperlink = null;
    node_20.textAlignHorizontal = 'LEFT';
    node_20.textAlignVertical = 'CENTER';
    node_20.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_20.paragraphIndent = 0;
    node_20.paragraphSpacing = 0;
    
    // base
    node_20.name = 'Our History BLA BLA BLA BLA BLA';
    // scene
    
    // layout
    node_20.resize(518, 152);
    
    node_20.x = 1398.0516319274902;
    node_20.y = 719.2019367218018;
    node_20.constrainProportions = false;
    node_20.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_20.layoutAlign = 'INHERIT';
    node_20.layoutGrow = 0;
    node_20.layoutPositioning = 'AUTO';
    node_20.rotation = 0;
    
    // blend
    node_20.blendMode = 'PASS_THROUGH';
    node_20.effects = [];
    node_20.isMask = false;
    // geometry
  node_20.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_20.strokeWeight = 0;
  
    // GROUP
    const node_21 = figma.createFrame();
    
    // append
    node_14.appendChild(node_21);
    
    // layout
    node_21.resize(1183.6512451171875, 782.533447265625);
    
    node_21.x = 136;
    node_21.y = 170.5;
    node_21.constrainProportions = false;
    
    node_21.layoutAlign = 'INHERIT';
    node_21.layoutGrow = 0;
    node_21.layoutPositioning = 'AUTO';
    node_21.rotation = 0;
    
    // base
    node_21.name = 'Group 1000001991';
    
    // blend
    node_21.blendMode = 'PASS_THROUGH';
    node_21.effects = [{"type":"DROP_SHADOW","visible":true,"radius":71.22135162353516,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":32.45530319213867},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":128.91966247558594,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":128.91966247558594},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":173.9964599609375,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":290.2946472167969},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":206.4517822265625,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":515.6786499023438},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":225.384033203125,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":805.9733276367188},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_21.isMask = false;
    // scene
    
    // RECTANGLE
    const node_22 = figma.createRectangle();
    
    // append
    node_21.appendChild(node_22);
    
    // base
    node_22.name = 'Rectangle 4550';
    // scene
    
    // layout
    node_22.resize(1162.1490478515625, 731.7338256835938);
    
    node_22.x = 146.81842613220215;
    node_22.y = 195.7430763244629;
    node_22.constrainProportions = false;
    node_22.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_22.layoutAlign = 'INHERIT';
    node_22.layoutGrow = 0;
    node_22.layoutPositioning = 'AUTO';
    node_22.rotation = 0;
    
    // blend
    node_22.blendMode = 'PASS_THROUGH';
    node_22.effects = [];
    node_22.isMask = false;
    // geometry
  node_22.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.16470588743686676,"g":0.16470588743686676,"b":0.16470588743686676},"boundVariables":{}}]
  node_22.strokeWeight = 0;
  
    // RECTANGLE
    const node_23 = figma.createRectangle();
    
    // append
    node_21.appendChild(node_23);
    
    // base
    node_23.name = 'DSCF6761 1';
    // scene
    
    // layout
    node_23.resize(1173.7996826171875, 782.5333862304688);
    
    node_23.x = 136;
    node_23.y = 170.5;
    node_23.constrainProportions = true;
    node_23.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_23.layoutAlign = 'INHERIT';
    node_23.layoutGrow = 0;
    node_23.layoutPositioning = 'AUTO';
    node_23.rotation = 0;
    
    // blend
    node_23.blendMode = 'PASS_THROUGH';
    node_23.effects = [];
    node_23.isMask = false;
    // geometry
  node_23.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":-0.46000000834465027,"contrast":0.30000001192092896,"saturation":1,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"1eb414ba4156be8b264038454ef3c89ed52de30f"}]
  node_23.strokeWeight = 0;
  
    figma.notify("don't know this type: LINE");
    
  
    figma.notify("don't know this type: LINE");
    
  
    // TEXT 
    const node_24 = figma.createText();
    
    // append
    node_21.appendChild(node_24);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_24.autoRename = true;
    node_24.fontName = {"family":"Poppins","style":"Bold"};
    node_24.fontSize = 50.68285369873047;
    node_24.characters = 'Who are we ?';
    node_24.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_24.textCase = 'ORIGINAL';
    node_24.textDecoration = 'NONE';
    node_24.letterSpacing = {"unit":"PERCENT","value":0};
    node_24.lineHeight = {"unit":"AUTO"};
    node_24.hyperlink = null;
    node_24.textAlignHorizontal = 'LEFT';
    node_24.textAlignVertical = 'CENTER';
    node_24.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_24.paragraphIndent = 0;
    node_24.paragraphSpacing = 0;
    
    // base
    node_24.name = 'Who are we ?';
    // scene
    
    // layout
    node_24.resize(342, 76);
    
    node_24.x = 181.97878646850586;
    node_24.y = 561.7667541503906;
    node_24.constrainProportions = false;
    node_24.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_24.layoutAlign = 'INHERIT';
    node_24.layoutGrow = 0;
    node_24.layoutPositioning = 'AUTO';
    node_24.rotation = 0;
    
    // blend
    node_24.blendMode = 'PASS_THROUGH';
    node_24.effects = [];
    node_24.isMask = false;
    // geometry
  node_24.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_24.strokeWeight = 0;
  
    // TEXT 
    const node_25 = figma.createText();
    
    // append
    node_21.appendChild(node_25);
    await figma.loadFontAsync(undefined);
    node_25.autoRename = true;
    node_25.fontName = undefined;
    node_25.fontSize = 21.636869430541992;
    node_25.characters = 'Waluya Aquarium is a specialized freshwater aquarium shop located in Dramaga, Bogor. It offers a wide selection of freshwater fish, aquatic plants, and high-quality aquarium supplies. Whether youre looking for ornamental fish, aquascaping materials, or expert advice, Waluya Aquarium provides everything you need to create and maintain a beautiful freshwater aquarium. With a focus on quality and customer satisfaction, it’s the go-to destination for freshwater aquarists in the area.';
    node_25.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_25.textCase = 'ORIGINAL';
    node_25.textDecoration = 'NONE';
    node_25.letterSpacing = {"unit":"PERCENT","value":0};
    node_25.lineHeight = {"unit":"AUTO"};
    node_25.hyperlink = null;
    node_25.textAlignHorizontal = 'JUSTIFIED';
    node_25.textAlignVertical = 'CENTER';
    node_25.textAutoResize = 'NONE';
    node_25.paragraphIndent = 0;
    node_25.paragraphSpacing = 0;
    
    // base
    node_25.name = 'Waluya Aquarium is a specialized freshwater aquarium shop located in Dramaga, Bogor. It offers a wide selection of freshwater fish, aquatic plants, and high-quality aquarium supplies. Whether youre looking for ornamental fish, aquascaping materials, or expert advice, Waluya Aquarium provides everything you need to create and maintain a beautiful freshwater aquarium. With a focus on quality and customer satisfaction, it’s the go-to destination for freshwater aquarists in the area.';
    // scene
    
    // layout
    node_25.resize(877.1945190429688, 227.18711853027344);
    
    node_25.x = 181.97878646850586;
    node_25.y = 661.8373718261719;
    node_25.constrainProportions = false;
    node_25.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_25.layoutAlign = 'INHERIT';
    node_25.layoutGrow = 0;
    node_25.layoutPositioning = 'AUTO';
    node_25.rotation = 0;
    
    // blend
    node_25.blendMode = 'PASS_THROUGH';
    node_25.effects = [];
    node_25.isMask = false;
    // geometry
  node_25.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_25.strokeWeight = 0;
  
    // RECTANGLE
    const node_26 = figma.createRectangle();
    
    // append
    node_0.appendChild(node_26);
    
    // base
    node_26.name = 'Rectangle 4558';
    // scene
    
    // layout
    node_26.resize(1443, 287);
    
    node_26.x = -3;
    node_26.y = 783;
    node_26.constrainProportions = false;
    node_26.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_26.layoutAlign = 'INHERIT';
    node_26.layoutGrow = 0;
    node_26.layoutPositioning = 'AUTO';
    node_26.rotation = 0;
    
    // blend
    node_26.blendMode = 'PASS_THROUGH';
    node_26.effects = [];
    node_26.isMask = false;
    // geometry
  node_26.fills = [{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":1,"g":1,"b":1,"a":1},"position":0,"boundVariables":{}},{"color":{"r":1,"g":1,"b":1,"a":0.5099999904632568},"position":0.5096153616905212,"boundVariables":{}},{"color":{"r":0.6000000238418579,"g":0.6000000238418579,"b":0.6000000238418579,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[-0.00015207174874376506,-1.7226276397705078,1.0000760555267334],[63.86764144897461,-0.00016542071534786373,-31.455949783325195]]}]
  node_26.strokeWeight = 0;
  
    // TEXT 
    const node_27 = figma.createText();
    
    // append
    node_0.appendChild(node_27);
    await figma.loadFontAsync({"family":"Rubik Glitch Pop","style":"Regular"});
    node_27.autoRename = true;
    node_27.fontName = {"family":"Rubik Glitch Pop","style":"Regular"};
    node_27.fontSize = 457.30908203125;
    node_27.characters = 'W';
    node_27.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_27.textCase = 'ORIGINAL';
    node_27.textDecoration = 'NONE';
    node_27.letterSpacing = {"unit":"PERCENT","value":0};
    node_27.lineHeight = {"unit":"AUTO"};
    node_27.hyperlink = null;
    node_27.textAlignHorizontal = 'LEFT';
    node_27.textAlignVertical = 'CENTER';
    node_27.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_27.paragraphIndent = 0;
    node_27.paragraphSpacing = 0;
    
    // base
    node_27.name = 'W';
    // scene
    
    // layout
    node_27.resize(392, 542);
    
    node_27.x = 949;
    node_27.y = 241;
    node_27.constrainProportions = false;
    node_27.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_27.layoutAlign = 'INHERIT';
    node_27.layoutGrow = 0;
    node_27.layoutPositioning = 'AUTO';
    node_27.rotation = 0;
    
    // blend
    node_27.blendMode = 'PASS_THROUGH';
    node_27.effects = [{"type":"DROP_SHADOW","visible":true,"radius":143.1999969482422,"boundVariables":{},"color":{"r":0.9759615659713745,"g":0.9803686141967773,"b":1,"a":1},"offset":{"x":0,"y":4},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":false}];
    node_27.isMask = false;
    // geometry
  node_27.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_27.strokeWeight = 0;
  
    // RECTANGLE
    const node_28 = figma.createRectangle();
    
    // append
    node_0.appendChild(node_28);
    
    // base
    node_28.name = 'Rectangle 4554';
    // scene
    
    // layout
    node_28.resize(1440, 562);
    
    node_28.x = 0;
    node_28.y = 3519;
    node_28.constrainProportions = false;
    node_28.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_28.layoutAlign = 'INHERIT';
    node_28.layoutGrow = 0;
    node_28.layoutPositioning = 'AUTO';
    node_28.rotation = 0;
    
    // blend
    node_28.blendMode = 'PASS_THROUGH';
    node_28.effects = [];
    node_28.isMask = false;
    // geometry
  node_28.fills = [{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1,"a":0},"position":0.048076923936605453,"boundVariables":{}},{"color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1,"a":1},"position":0.7067307829856873,"boundVariables":{}},{"color":{"r":0.20769231021404266,"g":0.371153861284256,"b":0.6000000238418579,"a":1},"position":1,"boundVariables":{}}],"gradientTransform":[[-0.05704747512936592,0.9998217225074768,0.026087336242198944],[-18.2552490234375,-0.05704757571220398,8.847972869873047]]}]
  node_28.strokeWeight = 0;
  
    // FRAME
    const node_29 = figma.createFrame();
    
    // append
    node_0.appendChild(node_29);
    
    // layout
    node_29.resize(51, 51);
    
    node_29.x = 46;
    node_29.y = 3601;
    node_29.constrainProportions = false;
    node_29.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_29.layoutAlign = 'INHERIT';
    node_29.layoutGrow = 0;
    node_29.layoutPositioning = 'AUTO';
    node_29.rotation = 0;// before frame
    
    // frame
    node_29.layoutMode = 'NONE';
    node_29.primaryAxisSizingMode = 'AUTO';
    node_29.primaryAxisAlignItems = 'MIN';
    node_29.counterAxisAlignItems = 'MIN';
    node_29.counterAxisSizingMode = 'FIXED';
    node_29.paddingLeft = 0;
    node_29.paddingRight = 0;
    node_29.paddingTop = 0;
    node_29.paddingBottom = 0;
    node_29.itemSpacing = 0;
    
    node_29.clipsContent = true;
    
    
    // base
    node_29.name = 'Frame';
    // scene
    
    // blend
    node_29.blendMode = 'PASS_THROUGH';
    node_29.effects = [];
    node_29.isMask = false;
    // geometry
  node_29.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_29.strokeWeight = 0;
    
    // VECTOR
    const node_30 = figma.createVector();
    
    // append
    node_29.appendChild(node_30);
    node_30.vectorNetwork = {"vertices":[{"x":40.375,"y":0,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":8.5,"y":0,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":5.494795978069305,"y":1.2447959780693054,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.25,"y":4.25,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.25,"y":10.625,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":10.625,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":14.875,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.25,"y":14.875,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.25,"y":19.125,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":19.125,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":23.375,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.25,"y":23.375,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.25,"y":27.625,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":27.625,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":31.875,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.25,"y":31.875,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.25,"y":38.25,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":5.494795978069305,"y":41.25520300865173,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":8.5,"y":42.5,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":40.375,"y":42.5,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":41.87760353088379,"y":41.87760353088379,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":42.5,"y":40.375,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":42.5,"y":2.125,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":41.87760353088379,"y":0.6223979890346527,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":23.375,"y":6.372875154018402,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":29.75,"y":12.747875154018402,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":27.87613308429718,"y":17.24963343143463,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":23.375,"y":19.125,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":17,"y":12.747875154018402,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":36.125,"y":34,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":10.625,"y":34,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":10.625,"y":32.40625,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":23.375,"y":22.84375,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":36.125,"y":32.40625,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"}],"segments":[{"start":0,"end":1,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":1,"end":2,"tangentStart":{"x":-1.1271701231598854,"y":9.43689570931383e-16},"tangentEnd":{"x":0.7970295883715153,"y":-0.7970295883715153}},{"start":2,"end":3,"tangentStart":{"x":-0.7970295883715153,"y":0.7970295883715153},"tangentEnd":{"x":3.774758283725532e-15,"y":-1.1271701231598854}},{"start":3,"end":4,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":4,"end":5,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":5,"end":6,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":6,"end":7,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":7,"end":8,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":8,"end":9,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":9,"end":10,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":10,"end":11,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":11,"end":12,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":12,"end":13,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":13,"end":14,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":14,"end":15,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":15,"end":16,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":16,"end":17,"tangentStart":{"x":1.887379141862766e-15,"y":1.1271701231598854},"tangentEnd":{"x":-0.7970295883715153,"y":-0.7970295883715153}},{"start":17,"end":18,"tangentStart":{"x":0.7970295883715153,"y":0.7970295883715153},"tangentEnd":{"x":-1.1271701231598854,"y":0}},{"start":18,"end":19,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":19,"end":20,"tangentStart":{"x":0.5635850615799427,"y":0},"tangentEnd":{"x":-0.39851479418575764,"y":0.39851479418575764}},{"start":20,"end":21,"tangentStart":{"x":0.39851479418575764,"y":-0.39851479418575764},"tangentEnd":{"x":0,"y":0.5635850615799427}},{"start":21,"end":22,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":22,"end":23,"tangentStart":{"x":0,"y":-0.5635850615799427},"tangentEnd":{"x":0.39851479418575764,"y":0.39851479418575764}},{"start":23,"end":0,"tangentStart":{"x":-0.39851479418575764,"y":-0.39851479418575764},"tangentEnd":{"x":0.5635850615799427,"y":1.4155343563970746e-15}},{"start":24,"end":25,"tangentStart":{"x":3.502000004053116,"y":0},"tangentEnd":{"x":0,"y":-3.504125103354454}},{"start":25,"end":26,"tangentStart":{"x":-0.006155213515739888,"y":1.6890564858913422},"tangentEnd":{"x":1.1941521689295769,"y":-1.194550260901451}},{"start":26,"end":27,"tangentStart":{"x":-1.1941521689295769,"y":1.194550260901451},"tangentEnd":{"x":1.6890543326735497,"y":-0.0067181379708927125}},{"start":27,"end":28,"tangentStart":{"x":-3.4998749047517776,"y":-3.774758283725532e-15},"tangentEnd":{"x":0,"y":3.502000004053116}},{"start":28,"end":24,"tangentStart":{"x":0,"y":-3.504125103354454},"tangentEnd":{"x":-3.4998749047517776,"y":0}},{"start":29,"end":30,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":30,"end":31,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":31,"end":32,"tangentStart":{"x":0,"y":-4.71537521481514},"tangentEnd":{"x":-7.001875162124634,"y":0}},{"start":32,"end":33,"tangentStart":{"x":7.001875162124634,"y":0},"tangentEnd":{"x":0,"y":-4.71537521481514}},{"start":33,"end":29,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}}],"regions":[{"windingRule":"NONZERO","loops":[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],[24,25,26,27,28],[29,30,31,32,33]],"fillStyleId":"","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]}]};
    
    // base
    node_30.name = 'Vector';
    
    // corner 
    node_30.cornerRadius = 0;
    // scene
    
    // layout
    node_30.resize(42.5, 42.5);
    
    node_30.x = 4.25;
    node_30.y = 4.25;
    node_30.constrainProportions = false;
    node_30.constraints = {"horizontal":"SCALE","vertical":"SCALE"};
    node_30.layoutAlign = 'INHERIT';
    node_30.layoutGrow = 0;
    node_30.layoutPositioning = 'AUTO';
    node_30.rotation = 0;
    
    // blend
    node_30.blendMode = 'PASS_THROUGH';
    node_30.effects = [];
    node_30.isMask = false;
    // geometry
  node_30.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
  node_30.strokeWeight = 0;
  
    // TEXT 
    const node_31 = figma.createText();
    
    // append
    node_0.appendChild(node_31);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_31.autoRename = true;
    node_31.fontName = {"family":"Poppins","style":"Bold"};
    node_31.fontSize = 32;
    node_31.characters = '@waluya_aquarium';
    node_31.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
    node_31.textCase = 'ORIGINAL';
    node_31.textDecoration = 'NONE';
    node_31.letterSpacing = {"unit":"PERCENT","value":0};
    node_31.lineHeight = {"unit":"AUTO"};
    node_31.hyperlink = null;
    node_31.textAlignHorizontal = 'LEFT';
    node_31.textAlignVertical = 'CENTER';
    node_31.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_31.paragraphIndent = 0;
    node_31.paragraphSpacing = 0;
    
    // base
    node_31.name = '@waluya_aquarium';
    // scene
    
    // layout
    node_31.resize(348, 48);
    
    node_31.x = 115;
    node_31.y = 3537;
    node_31.constrainProportions = false;
    node_31.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_31.layoutAlign = 'INHERIT';
    node_31.layoutGrow = 0;
    node_31.layoutPositioning = 'AUTO';
    node_31.rotation = 0;
    
    // blend
    node_31.blendMode = 'PASS_THROUGH';
    node_31.effects = [];
    node_31.isMask = false;
    // geometry
  node_31.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
  node_31.strokeWeight = 0;
  
    // GROUP
    const node_32 = figma.createFrame();
    
    // append
    node_0.appendChild(node_32);
    
    // layout
    node_32.resize(517, 447);
    
    node_32.x = 879;
    node_32.y = 2961;
    node_32.constrainProportions = false;
    
    node_32.layoutAlign = 'INHERIT';
    node_32.layoutGrow = 0;
    node_32.layoutPositioning = 'AUTO';
    node_32.rotation = 0;
    
    // base
    node_32.name = 'Group 1000002044';
    
    // blend
    node_32.blendMode = 'PASS_THROUGH';
    node_32.effects = [];
    node_32.isMask = false;
    // scene
    
    // RECTANGLE
    const node_33 = figma.createRectangle();
    
    // append
    node_32.appendChild(node_33);
    
    // base
    node_33.name = 'Rectangle 4551';
    // scene
    
    // layout
    node_33.resize(517, 447);
    
    node_33.x = 879;
    node_33.y = 2961;
    node_33.constrainProportions = false;
    node_33.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_33.layoutAlign = 'INHERIT';
    node_33.layoutGrow = 0;
    node_33.layoutPositioning = 'AUTO';
    node_33.rotation = 0;
    
    // blend
    node_33.blendMode = 'PASS_THROUGH';
    node_33.effects = [{"type":"DROP_SHADOW","visible":true,"radius":31,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":14},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":57,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":57},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":77,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":128},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":91,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":227},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":100,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":355},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_33.isMask = false;
    // geometry
  node_33.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_33.strokeWeight = 0;
  
    // TEXT 
    const node_34 = figma.createText();
    
    // append
    node_32.appendChild(node_34);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_34.autoRename = true;
    node_34.fontName = {"family":"Poppins","style":"Bold"};
    node_34.fontSize = 20;
    node_34.characters = 'Send Us A Massage';
    node_34.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_34.textCase = 'ORIGINAL';
    node_34.textDecoration = 'NONE';
    node_34.letterSpacing = {"unit":"PERCENT","value":0};
    node_34.lineHeight = {"unit":"AUTO"};
    node_34.hyperlink = null;
    node_34.textAlignHorizontal = 'LEFT';
    node_34.textAlignVertical = 'CENTER';
    node_34.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_34.paragraphIndent = 0;
    node_34.paragraphSpacing = 0;
    
    // base
    node_34.name = 'Send Us A Massage';
    // scene
    
    // layout
    node_34.resize(199, 30);
    
    node_34.x = 1038;
    node_34.y = 2972;
    node_34.constrainProportions = false;
    node_34.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_34.layoutAlign = 'INHERIT';
    node_34.layoutGrow = 0;
    node_34.layoutPositioning = 'AUTO';
    node_34.rotation = 0;
    
    // blend
    node_34.blendMode = 'PASS_THROUGH';
    node_34.effects = [];
    node_34.isMask = false;
    // geometry
  node_34.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_34.strokeWeight = 0;
  
    // RECTANGLE
    const node_35 = figma.createRectangle();
    
    // append
    node_32.appendChild(node_35);
    
    // base
    node_35.name = 'Rectangle 4552';
    // scene
    
    // layout
    node_35.resize(472, 212);
    
    node_35.x = 902;
    node_35.y = 3094;
    node_35.constrainProportions = false;
    node_35.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_35.layoutAlign = 'INHERIT';
    node_35.layoutGrow = 0;
    node_35.layoutPositioning = 'AUTO';
    node_35.rotation = 0;
    
    // blend
    node_35.blendMode = 'PASS_THROUGH';
    node_35.effects = [];
    node_35.isMask = false;
    // geometry
  node_35.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7229166626930237,"g":0.7229166626930237,"b":0.7229166626930237},"boundVariables":{}}]
  node_35.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1},"boundVariables":{}}];
  node_35.strokeWeight = 4;
  node_35.strokeJoin = "MITER";
  node_35.strokeAlign = 'INSIDE';
  node_35.dashPattern = [];
  node_35.strokeCap = "NONE";
  node_35.strokeMiterLimit = 4;
  
    // RECTANGLE
    const node_36 = figma.createRectangle();
    
    // append
    node_32.appendChild(node_36);
    
    // base
    node_36.name = 'Rectangle 4553';
    // scene
    
    // layout
    node_36.resize(472, 70);
    
    node_36.x = 902;
    node_36.y = 3010;
    node_36.constrainProportions = false;
    node_36.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_36.layoutAlign = 'INHERIT';
    node_36.layoutGrow = 0;
    node_36.layoutPositioning = 'AUTO';
    node_36.rotation = 0;
    
    // blend
    node_36.blendMode = 'PASS_THROUGH';
    node_36.effects = [];
    node_36.isMask = false;
    // geometry
  node_36.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7229166626930237,"g":0.7229166626930237,"b":0.7229166626930237},"boundVariables":{}}]
  node_36.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1},"boundVariables":{}}];
  node_36.strokeWeight = 4;
  node_36.strokeJoin = "MITER";
  node_36.strokeAlign = 'INSIDE';
  node_36.dashPattern = [];
  node_36.strokeCap = "NONE";
  node_36.strokeMiterLimit = 4;
  
    // RECTANGLE
    const node_37 = figma.createRectangle();
    
    // append
    node_32.appendChild(node_37);
    
    // base
    node_37.name = 'Rectangle 4559';
    // scene
    
    // layout
    node_37.resize(472, 70);
    
    node_37.x = 902;
    node_37.y = 3320;
    node_37.constrainProportions = false;
    node_37.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_37.layoutAlign = 'INHERIT';
    node_37.layoutGrow = 0;
    node_37.layoutPositioning = 'AUTO';
    node_37.rotation = 0;
    
    // blend
    node_37.blendMode = 'PASS_THROUGH';
    node_37.effects = [];
    node_37.isMask = false;
    // geometry
  node_37.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1},"boundVariables":{}}]
  node_37.strokes = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
  node_37.strokeWeight = 4;
  node_37.strokeJoin = "MITER";
  node_37.strokeAlign = 'INSIDE';
  node_37.dashPattern = [];
  node_37.strokeCap = "NONE";
  node_37.strokeMiterLimit = 4;
  
    // TEXT 
    const node_38 = figma.createText();
    
    // append
    node_32.appendChild(node_38);
    await figma.loadFontAsync({"family":"Poppins","style":"Regular"});
    node_38.autoRename = true;
    node_38.fontName = {"family":"Poppins","style":"Regular"};
    node_38.fontSize = 15;
    node_38.characters = 'Type your message';
    node_38.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1},"boundVariables":{}}];
    node_38.textCase = 'ORIGINAL';
    node_38.textDecoration = 'NONE';
    node_38.letterSpacing = {"unit":"PERCENT","value":0};
    node_38.lineHeight = {"unit":"AUTO"};
    node_38.hyperlink = null;
    node_38.textAlignHorizontal = 'LEFT';
    node_38.textAlignVertical = 'CENTER';
    node_38.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_38.paragraphIndent = 0;
    node_38.paragraphSpacing = 0;
    
    // base
    node_38.name = 'Type your message';
    // scene
    
    // layout
    node_38.resize(148, 23);
    
    node_38.x = 932;
    node_38.y = 3115;
    node_38.constrainProportions = false;
    node_38.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_38.layoutAlign = 'INHERIT';
    node_38.layoutGrow = 0;
    node_38.layoutPositioning = 'AUTO';
    node_38.rotation = 0;
    
    // blend
    node_38.blendMode = 'PASS_THROUGH';
    node_38.effects = [];
    node_38.isMask = false;
    // geometry
  node_38.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1},"boundVariables":{}}]
  node_38.strokeWeight = 0;
  
    // TEXT 
    const node_39 = figma.createText();
    
    // append
    node_32.appendChild(node_39);
    await figma.loadFontAsync({"family":"Poppins","style":"Regular"});
    node_39.autoRename = true;
    node_39.fontName = {"family":"Poppins","style":"Regular"};
    node_39.fontSize = 15;
    node_39.characters = 'Your E-mail';
    node_39.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1},"boundVariables":{}}];
    node_39.textCase = 'ORIGINAL';
    node_39.textDecoration = 'NONE';
    node_39.letterSpacing = {"unit":"PERCENT","value":0};
    node_39.lineHeight = {"unit":"AUTO"};
    node_39.hyperlink = null;
    node_39.textAlignHorizontal = 'LEFT';
    node_39.textAlignVertical = 'CENTER';
    node_39.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_39.paragraphIndent = 0;
    node_39.paragraphSpacing = 0;
    
    // base
    node_39.name = 'Your E-mail';
    // scene
    
    // layout
    node_39.resize(87, 23);
    
    node_39.x = 932;
    node_39.y = 3033;
    node_39.constrainProportions = false;
    node_39.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_39.layoutAlign = 'INHERIT';
    node_39.layoutGrow = 0;
    node_39.layoutPositioning = 'AUTO';
    node_39.rotation = 0;
    
    // blend
    node_39.blendMode = 'PASS_THROUGH';
    node_39.effects = [];
    node_39.isMask = false;
    // geometry
  node_39.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3461538553237915,"g":0.6185897588729858,"b":1},"boundVariables":{}}]
  node_39.strokeWeight = 0;
  
    // TEXT 
    const node_40 = figma.createText();
    
    // append
    node_32.appendChild(node_40);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_40.autoRename = true;
    node_40.fontName = {"family":"Poppins","style":"Bold"};
    node_40.fontSize = 20;
    node_40.characters = 'Send ';
    node_40.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_40.textCase = 'ORIGINAL';
    node_40.textDecoration = 'NONE';
    node_40.letterSpacing = {"unit":"PERCENT","value":0};
    node_40.lineHeight = {"unit":"AUTO"};
    node_40.hyperlink = null;
    node_40.textAlignHorizontal = 'LEFT';
    node_40.textAlignVertical = 'CENTER';
    node_40.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_40.paragraphIndent = 0;
    node_40.paragraphSpacing = 0;
    
    // base
    node_40.name = 'Send';
    // scene
    
    // layout
    node_40.resize(52, 30);
    
    node_40.x = 1112;
    node_40.y = 3340;
    node_40.constrainProportions = false;
    node_40.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_40.layoutAlign = 'INHERIT';
    node_40.layoutGrow = 0;
    node_40.layoutPositioning = 'AUTO';
    node_40.rotation = 0;
    
    // blend
    node_40.blendMode = 'PASS_THROUGH';
    node_40.effects = [];
    node_40.isMask = false;
    // geometry
  node_40.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_40.strokeWeight = 0;
  
    // GROUP
    const node_41 = figma.createFrame();
    
    // append
    node_0.appendChild(node_41);
    
    // layout
    node_41.resize(322, 397);
    
    node_41.x = 32;
    node_41.y = 2385;
    node_41.constrainProportions = false;
    
    node_41.layoutAlign = 'INHERIT';
    node_41.layoutGrow = 0;
    node_41.layoutPositioning = 'AUTO';
    node_41.rotation = 0;
    
    // base
    node_41.name = 'Mask group';
    
    // blend
    node_41.blendMode = 'PASS_THROUGH';
    node_41.effects = [];
    node_41.isMask = false;
    // scene
    
    // RECTANGLE
    const node_42 = figma.createRectangle();
    
    // append
    node_41.appendChild(node_42);
    
    // base
    node_42.name = 'About Us';
    // scene
    
    // layout
    node_42.resize(322, 397);
    
    node_42.x = 32;
    node_42.y = 2385;
    node_42.constrainProportions = false;
    node_42.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_42.layoutAlign = 'INHERIT';
    node_42.layoutGrow = 0;
    node_42.layoutPositioning = 'AUTO';
    node_42.rotation = 0;
    
    // blend
    node_42.blendMode = 'PASS_THROUGH';
    node_42.effects = [{"type":"DROP_SHADOW","visible":true,"radius":24,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":11},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":44,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":44},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":59,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":98},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":70,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":175},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":76,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":273},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_42.isMask = true;
    // geometry
  node_42.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3291666805744171,"g":0.3291666805744171,"b":0.3291666805744171},"boundVariables":{}}]
  node_42.strokeWeight = 0;
  
    // RECTANGLE
    const node_43 = figma.createRectangle();
    
    // append
    node_41.appendChild(node_43);
    
    // base
    node_43.name = 'DSCF6742 1';
    // scene
    
    // layout
    node_43.resize(618, 412);
    
    node_43.x = -88;
    node_43.y = 2370;
    node_43.constrainProportions = true;
    node_43.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_43.layoutAlign = 'INHERIT';
    node_43.layoutGrow = 0;
    node_43.layoutPositioning = 'AUTO';
    node_43.rotation = 0;
    
    // blend
    node_43.blendMode = 'PASS_THROUGH';
    node_43.effects = [];
    node_43.isMask = false;
    // geometry
  node_43.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":-0.3400000035762787,"contrast":0,"saturation":0,"temperature":-0.4399999976158142,"tint":0,"highlights":0,"shadows":0},"imageHash":"6593658311d1f18efe1b3971d219630b93cf91a3"}]
  node_43.strokeWeight = 0;
  
    // TEXT 
    const node_44 = figma.createText();
    
    // append
    node_0.appendChild(node_44);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_44.autoRename = true;
    node_44.fontName = {"family":"Poppins","style":"Bold"};
    node_44.fontSize = 24;
    node_44.characters = 'Peralatan Aquarium';
    node_44.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8509804010391235,"g":0.8509804010391235,"b":0.8509804010391235},"boundVariables":{}}];
    node_44.textCase = 'ORIGINAL';
    node_44.textDecoration = 'NONE';
    node_44.letterSpacing = {"unit":"PERCENT","value":0};
    node_44.lineHeight = {"unit":"AUTO"};
    node_44.hyperlink = null;
    node_44.textAlignHorizontal = 'LEFT';
    node_44.textAlignVertical = 'CENTER';
    node_44.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_44.paragraphIndent = 0;
    node_44.paragraphSpacing = 0;
    
    // base
    node_44.name = 'Peralatan Aquarium';
    // scene
    
    // layout
    node_44.resize(253, 36);
    
    node_44.x = 66;
    node_44.y = 2724;
    node_44.constrainProportions = false;
    node_44.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_44.layoutAlign = 'INHERIT';
    node_44.layoutGrow = 0;
    node_44.layoutPositioning = 'AUTO';
    node_44.rotation = 0;
    
    // blend
    node_44.blendMode = 'PASS_THROUGH';
    node_44.effects = [];
    node_44.isMask = false;
    // geometry
  node_44.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8509804010391235,"g":0.8509804010391235,"b":0.8509804010391235},"boundVariables":{}}]
  node_44.strokeWeight = 0;
  
    // GROUP
    const node_45 = figma.createFrame();
    
    // append
    node_0.appendChild(node_45);
    
    // layout
    node_45.resize(322, 397);
    
    node_45.x = 1085;
    node_45.y = 2385;
    node_45.constrainProportions = false;
    
    node_45.layoutAlign = 'INHERIT';
    node_45.layoutGrow = 0;
    node_45.layoutPositioning = 'AUTO';
    node_45.rotation = 0;
    
    // base
    node_45.name = 'Mask group';
    
    // blend
    node_45.blendMode = 'PASS_THROUGH';
    node_45.effects = [{"type":"DROP_SHADOW","visible":true,"radius":24,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":11},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":44,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":44},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":59,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":98},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":70,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":175},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":76,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":273},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_45.isMask = false;
    // scene
    
    // RECTANGLE
    const node_46 = figma.createRectangle();
    
    // append
    node_45.appendChild(node_46);
    
    // base
    node_46.name = 'About Us';
    // scene
    
    // layout
    node_46.resize(322, 397);
    
    node_46.x = 1085;
    node_46.y = 2385;
    node_46.constrainProportions = false;
    node_46.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_46.layoutAlign = 'INHERIT';
    node_46.layoutGrow = 0;
    node_46.layoutPositioning = 'AUTO';
    node_46.rotation = 0;
    
    // blend
    node_46.blendMode = 'PASS_THROUGH';
    node_46.effects = [{"type":"DROP_SHADOW","visible":true,"radius":24,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":11},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":44,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":44},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":59,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":98},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":70,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":175},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":76,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":273},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_46.isMask = true;
    // geometry
  node_46.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3291666805744171,"g":0.3291666805744171,"b":0.3291666805744171},"boundVariables":{}}]
  node_46.strokeWeight = 0;
  
    // RECTANGLE
    const node_47 = figma.createRectangle();
    
    // append
    node_45.appendChild(node_47);
    
    // base
    node_47.name = 'DSCF6718 1';
    // scene
    
    // layout
    node_47.resize(594, 396);
    
    node_47.x = 956;
    node_47.y = 2385;
    node_47.constrainProportions = true;
    node_47.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_47.layoutAlign = 'INHERIT';
    node_47.layoutGrow = 0;
    node_47.layoutPositioning = 'AUTO';
    node_47.rotation = 0;
    
    // blend
    node_47.blendMode = 'PASS_THROUGH';
    node_47.effects = [];
    node_47.isMask = false;
    // geometry
  node_47.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":-0.4000000059604645,"contrast":0.6999999781449636,"saturation":0,"temperature":-0.46000000834465027,"tint":0,"highlights":0,"shadows":0},"imageHash":"89b967e8ca11c786b57fa20d0aebec57f0bd54af"}]
  node_47.strokeWeight = 0;
  
    // TEXT 
    const node_48 = figma.createText();
    
    // append
    node_0.appendChild(node_48);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_48.autoRename = true;
    node_48.fontName = {"family":"Poppins","style":"Bold"};
    node_48.fontSize = 24;
    node_48.characters = 'ikan';
    node_48.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8509804010391235,"g":0.8509804010391235,"b":0.8509804010391235},"boundVariables":{}}];
    node_48.textCase = 'ORIGINAL';
    node_48.textDecoration = 'NONE';
    node_48.letterSpacing = {"unit":"PERCENT","value":0};
    node_48.lineHeight = {"unit":"AUTO"};
    node_48.hyperlink = null;
    node_48.textAlignHorizontal = 'LEFT';
    node_48.textAlignVertical = 'CENTER';
    node_48.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_48.paragraphIndent = 0;
    node_48.paragraphSpacing = 0;
    
    // base
    node_48.name = 'ikan';
    // scene
    
    // layout
    node_48.resize(55, 36);
    
    node_48.x = 1218;
    node_48.y = 2724;
    node_48.constrainProportions = false;
    node_48.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_48.layoutAlign = 'INHERIT';
    node_48.layoutGrow = 0;
    node_48.layoutPositioning = 'AUTO';
    node_48.rotation = 0;
    
    // blend
    node_48.blendMode = 'PASS_THROUGH';
    node_48.effects = [];
    node_48.isMask = false;
    // geometry
  node_48.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8509804010391235,"g":0.8509804010391235,"b":0.8509804010391235},"boundVariables":{}}]
  node_48.strokeWeight = 0;
  
    // GROUP
    const node_49 = figma.createFrame();
    
    // append
    node_0.appendChild(node_49);
    
    // layout
    node_49.resize(322, 397);
    
    node_49.x = 734;
    node_49.y = 2385;
    node_49.constrainProportions = false;
    
    node_49.layoutAlign = 'INHERIT';
    node_49.layoutGrow = 0;
    node_49.layoutPositioning = 'AUTO';
    node_49.rotation = 0;
    
    // base
    node_49.name = 'Mask group';
    
    // blend
    node_49.blendMode = 'PASS_THROUGH';
    node_49.effects = [];
    node_49.isMask = false;
    // scene
    
    // RECTANGLE
    const node_50 = figma.createRectangle();
    
    // append
    node_49.appendChild(node_50);
    
    // base
    node_50.name = 'About Us';
    // scene
    
    // layout
    node_50.resize(322, 397);
    
    node_50.x = 734;
    node_50.y = 2385;
    node_50.constrainProportions = false;
    node_50.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_50.layoutAlign = 'INHERIT';
    node_50.layoutGrow = 0;
    node_50.layoutPositioning = 'AUTO';
    node_50.rotation = 0;
    
    // blend
    node_50.blendMode = 'PASS_THROUGH';
    node_50.effects = [{"type":"DROP_SHADOW","visible":true,"radius":24,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":11},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":44,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":44},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":59,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":98},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":70,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":175},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":76,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":273},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_50.isMask = true;
    // geometry
  node_50.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3291666805744171,"g":0.3291666805744171,"b":0.3291666805744171},"boundVariables":{}}]
  node_50.strokeWeight = 0;
  
    // RECTANGLE
    const node_51 = figma.createRectangle();
    
    // append
    node_49.appendChild(node_51);
    
    // base
    node_51.name = 'DSCF6731 1';
    // scene
    
    // layout
    node_51.resize(652.5, 435);
    
    node_51.x = 551;
    node_51.y = 2374;
    node_51.constrainProportions = true;
    node_51.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_51.layoutAlign = 'INHERIT';
    node_51.layoutGrow = 0;
    node_51.layoutPositioning = 'AUTO';
    node_51.rotation = 0;
    
    // blend
    node_51.blendMode = 'PASS_THROUGH';
    node_51.effects = [];
    node_51.isMask = false;
    // geometry
  node_51.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":-0.3100000023841858,"contrast":0.033333332588275276,"saturation":0,"temperature":-0.5600000023841858,"tint":0,"highlights":0,"shadows":0},"imageHash":"85991771115f7f4dd7dbb39ed696ca524d6ad4c4"}]
  node_51.strokeWeight = 0;
  
    // TEXT 
    const node_52 = figma.createText();
    
    // append
    node_0.appendChild(node_52);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_52.autoRename = true;
    node_52.fontName = {"family":"Poppins","style":"Bold"};
    node_52.fontSize = 24;
    node_52.characters = 'Obat Ikan';
    node_52.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8509804010391235,"g":0.8509804010391235,"b":0.8509804010391235},"boundVariables":{}}];
    node_52.textCase = 'ORIGINAL';
    node_52.textDecoration = 'NONE';
    node_52.letterSpacing = {"unit":"PERCENT","value":0};
    node_52.lineHeight = {"unit":"AUTO"};
    node_52.hyperlink = null;
    node_52.textAlignHorizontal = 'LEFT';
    node_52.textAlignVertical = 'CENTER';
    node_52.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_52.paragraphIndent = 0;
    node_52.paragraphSpacing = 0;
    
    // base
    node_52.name = 'Obat Ikan';
    // scene
    
    // layout
    node_52.resize(121, 36);
    
    node_52.x = 835;
    node_52.y = 2724;
    node_52.constrainProportions = false;
    node_52.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_52.layoutAlign = 'INHERIT';
    node_52.layoutGrow = 0;
    node_52.layoutPositioning = 'AUTO';
    node_52.rotation = 0;
    
    // blend
    node_52.blendMode = 'PASS_THROUGH';
    node_52.effects = [];
    node_52.isMask = false;
    // geometry
  node_52.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8509804010391235,"g":0.8509804010391235,"b":0.8509804010391235},"boundVariables":{}}]
  node_52.strokeWeight = 0;
  
    // GROUP
    const node_53 = figma.createFrame();
    
    // append
    node_0.appendChild(node_53);
    
    // layout
    node_53.resize(322, 397);
    
    node_53.x = 383;
    node_53.y = 2385;
    node_53.constrainProportions = false;
    
    node_53.layoutAlign = 'INHERIT';
    node_53.layoutGrow = 0;
    node_53.layoutPositioning = 'AUTO';
    node_53.rotation = 0;
    
    // base
    node_53.name = 'Mask group';
    
    // blend
    node_53.blendMode = 'PASS_THROUGH';
    node_53.effects = [];
    node_53.isMask = false;
    // scene
    
    // RECTANGLE
    const node_54 = figma.createRectangle();
    
    // append
    node_53.appendChild(node_54);
    
    // base
    node_54.name = 'About Us';
    // scene
    
    // layout
    node_54.resize(322, 397);
    
    node_54.x = 383;
    node_54.y = 2385;
    node_54.constrainProportions = false;
    node_54.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_54.layoutAlign = 'INHERIT';
    node_54.layoutGrow = 0;
    node_54.layoutPositioning = 'AUTO';
    node_54.rotation = 0;
    
    // blend
    node_54.blendMode = 'PASS_THROUGH';
    node_54.effects = [{"type":"DROP_SHADOW","visible":true,"radius":24,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":11},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":44,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.09000000357627869},"offset":{"x":0,"y":44},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":59,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.05000000074505806},"offset":{"x":0,"y":98},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":70,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.009999999776482582},"offset":{"x":0,"y":175},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true},{"type":"DROP_SHADOW","visible":true,"radius":76,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0},"offset":{"x":0,"y":273},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
    node_54.isMask = true;
    // geometry
  node_54.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3291666805744171,"g":0.3291666805744171,"b":0.3291666805744171},"boundVariables":{}}]
  node_54.strokeWeight = 0;
  
    // RECTANGLE
    const node_55 = figma.createRectangle();
    
    // append
    node_53.appendChild(node_55);
    
    // base
    node_55.name = '20250208_092728 1';
    // scene
    
    // layout
    node_55.resize(1016, 762);
    
    node_55.x = -24;
    node_55.y = 2170;
    node_55.constrainProportions = true;
    node_55.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_55.layoutAlign = 'INHERIT';
    node_55.layoutGrow = 0;
    node_55.layoutPositioning = 'AUTO';
    node_55.rotation = 0;
    
    // blend
    node_55.blendMode = 'PASS_THROUGH';
    node_55.effects = [];
    node_55.isMask = false;
    // geometry
  node_55.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":-0.23999999463558197,"contrast":0,"saturation":0,"temperature":-0.5600000023841858,"tint":0,"highlights":0,"shadows":0},"imageHash":"3a49a695e0165a3a7bccce1e3ef034d55410df79"}]
  node_55.strokeWeight = 0;
  
    // TEXT 
    const node_56 = figma.createText();
    
    // append
    node_0.appendChild(node_56);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_56.autoRename = true;
    node_56.fontName = {"family":"Poppins","style":"Bold"};
    node_56.fontSize = 24;
    node_56.characters = 'Makanan ikan';
    node_56.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8509804010391235,"g":0.8509804010391235,"b":0.8509804010391235},"boundVariables":{}}];
    node_56.textCase = 'ORIGINAL';
    node_56.textDecoration = 'NONE';
    node_56.letterSpacing = {"unit":"PERCENT","value":0};
    node_56.lineHeight = {"unit":"AUTO"};
    node_56.hyperlink = null;
    node_56.textAlignHorizontal = 'LEFT';
    node_56.textAlignVertical = 'CENTER';
    node_56.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_56.paragraphIndent = 0;
    node_56.paragraphSpacing = 0;
    
    // base
    node_56.name = 'Makanan ikan';
    // scene
    
    // layout
    node_56.resize(178, 36);
    
    node_56.x = 455;
    node_56.y = 2724;
    node_56.constrainProportions = false;
    node_56.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_56.layoutAlign = 'INHERIT';
    node_56.layoutGrow = 0;
    node_56.layoutPositioning = 'AUTO';
    node_56.rotation = 0;
    
    // blend
    node_56.blendMode = 'PASS_THROUGH';
    node_56.effects = [];
    node_56.isMask = false;
    // geometry
  node_56.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8509804010391235,"g":0.8509804010391235,"b":0.8509804010391235},"boundVariables":{}}]
  node_56.strokeWeight = 0;
  
    // FRAME
    const node_57 = figma.createFrame();
    
    // append
    node_0.appendChild(node_57);
    
    // layout
    node_57.resize(51, 51);
    
    node_57.x = 47;
    node_57.y = 3537;
    node_57.constrainProportions = false;
    node_57.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_57.layoutAlign = 'INHERIT';
    node_57.layoutGrow = 0;
    node_57.layoutPositioning = 'AUTO';
    node_57.rotation = 0;// before frame
    
    // frame
    node_57.layoutMode = 'NONE';
    node_57.primaryAxisSizingMode = 'AUTO';
    node_57.primaryAxisAlignItems = 'MIN';
    node_57.counterAxisAlignItems = 'MIN';
    node_57.counterAxisSizingMode = 'FIXED';
    node_57.paddingLeft = 0;
    node_57.paddingRight = 0;
    node_57.paddingTop = 0;
    node_57.paddingBottom = 0;
    node_57.itemSpacing = 0;
    
    node_57.clipsContent = true;
    
    
    // base
    node_57.name = 'Frame';
    // scene
    
    // blend
    node_57.blendMode = 'PASS_THROUGH';
    node_57.effects = [];
    node_57.isMask = false;
    // geometry
  node_57.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_57.strokeWeight = 0;
    
    // VECTOR
    const node_58 = figma.createVector();
    
    // append
    node_57.appendChild(node_58);
    node_58.vectorNetwork = {"vertices":[{"x":9.825998306274414,"y":0,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":2.8779693782027578,"y":2.877969640069801,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":9.826001226902015,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":2.8779693782027578,"y":16.774030787176294,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":9.825998306274414,"y":19.652000427246094,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":16.77402926090382,"y":16.774030787176294,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":19.651996612548828,"y":9.826001226902015,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":16.77402926090382,"y":2.877969640069801,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":9.825998306274414,"y":16.207374790277342,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":5.312183405831195,"y":14.337690678784751,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":3.4424994644615428,"y":9.82387536762856,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":5.312183405831195,"y":5.310060056472368,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":9.825998306274414,"y":3.440375944979778,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":14.339815233275383,"y":5.310060056472368,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":16.209499174645035,"y":9.82387536762856,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":14.339815233275383,"y":14.337690678784751,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"}],"segments":[{"start":0,"end":1,"tangentStart":{"x":-2.6060169808249984,"y":0},"tangentEnd":{"x":1.8427322432095141,"y":-1.8427324108801109}},{"start":1,"end":2,"tangentStart":{"x":-1.8427322432095141,"y":1.8427324108801109},"tangentEnd":{"x":3.774757963157239e-15,"y":-2.606017217947035}},{"start":2,"end":3,"tangentStart":{"x":3.774757963157239e-15,"y":2.606017217947035},"tangentEnd":{"x":-1.8427322432095141,"y":-1.8427324108801109}},{"start":3,"end":4,"tangentStart":{"x":1.8427322432095141,"y":1.8427324108801109},"tangentEnd":{"x":-2.6060169808249984,"y":0}},{"start":4,"end":5,"tangentStart":{"x":2.6060169808249984,"y":7.54951661324653e-15},"tangentEnd":{"x":-1.8427322432095141,"y":1.8427324108801109}},{"start":5,"end":6,"tangentStart":{"x":1.8427322432095141,"y":-1.8427324108801109},"tangentEnd":{"x":0,"y":2.606017217947035}},{"start":6,"end":7,"tangentStart":{"x":0,"y":-2.606017217947035},"tangentEnd":{"x":1.8427322432095141,"y":1.8427324108801109}},{"start":7,"end":0,"tangentStart":{"x":-1.8427322432095141,"y":-1.8427324108801109},"tangentEnd":{"x":2.6060169808249984,"y":3.774758306623265e-15}},{"start":8,"end":9,"tangentStart":{"x":-1.6930092700013273,"y":3.774758306623265e-15},"tangentEnd":{"x":1.1971383270220368,"y":1.1971384359499067}},{"start":9,"end":10,"tangentStart":{"x":-1.1971383270220368,"y":-1.1971384359499067},"tangentEnd":{"x":0,"y":1.693009424048599}},{"start":10,"end":11,"tangentStart":{"x":0,"y":-1.693009424048599},"tangentEnd":{"x":-1.1971383270220368,"y":1.1971384359499067}},{"start":11,"end":12,"tangentStart":{"x":1.1971383270220368,"y":-1.1971384359499067},"tangentEnd":{"x":-1.6930092700013273,"y":0}},{"start":12,"end":13,"tangentStart":{"x":1.6930092700013273,"y":0},"tangentEnd":{"x":-1.1971383270220368,"y":-1.1971384359499067}},{"start":13,"end":14,"tangentStart":{"x":1.1971383270220368,"y":1.1971384359499067},"tangentEnd":{"x":0,"y":-1.693009424048599}},{"start":14,"end":15,"tangentStart":{"x":0,"y":1.693009424048599},"tangentEnd":{"x":1.1971383270220368,"y":-1.1971384359499067}},{"start":15,"end":8,"tangentStart":{"x":-1.1971383270220368,"y":1.1971384359499067},"tangentEnd":{"x":1.6930092700013273,"y":0}}],"regions":[{"windingRule":"NONZERO","loops":[[0,1,2,3,4,5,6,7],[8,9,10,11,12,13,14,15]],"fillStyleId":"","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]}]};
    
    // base
    node_58.name = 'Vector';
    
    // corner 
    node_58.cornerRadius = 0;
    // scene
    
    // layout
    node_58.resize(19.651996612548828, 19.652000427246094);
    
    node_58.x = 15.671875;
    node_58.y = 15.676124572753906;
    node_58.constrainProportions = false;
    node_58.constraints = {"horizontal":"SCALE","vertical":"SCALE"};
    node_58.layoutAlign = 'INHERIT';
    node_58.layoutGrow = 0;
    node_58.layoutPositioning = 'AUTO';
    node_58.rotation = 0;
    
    // blend
    node_58.blendMode = 'PASS_THROUGH';
    node_58.effects = [];
    node_58.isMask = false;
    // geometry
  node_58.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
  node_58.strokeWeight = 0;
  
    // VECTOR
    const node_59 = figma.createVector();
    
    // append
    node_57.appendChild(node_59);
    node_59.vectorNetwork = {"vertices":[{"x":4.581502437591553,"y":2.290749043226262,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":2.2907502055167885,"y":4.581499099731445,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":2.290749043226262,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":2.2907502055167885,"y":0,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"}],"segments":[{"start":0,"end":1,"tangentStart":{"x":0,"y":1.2651462433679548},"tangentEnd":{"x":1.2651463256647868,"y":0}},{"start":1,"end":2,"tangentStart":{"x":-1.2651463256647868,"y":0},"tangentEnd":{"x":0,"y":1.2651462433679548}},{"start":2,"end":3,"tangentStart":{"x":0,"y":-1.2651462433679548},"tangentEnd":{"x":-1.2651463256647868,"y":0}},{"start":3,"end":0,"tangentStart":{"x":1.2651463256647868,"y":0},"tangentEnd":{"x":0,"y":-1.2651462433679548}}],"regions":[]};
    
    // base
    node_59.name = 'Vector';
    
    // corner 
    node_59.cornerRadius = 0;
    // scene
    
    // layout
    node_59.resize(4.581502437591553, 4.581499099731445);
    
    node_59.x = 33.4219970703125;
    node_59.y = 13.024126052856445;
    node_59.constrainProportions = false;
    node_59.constraints = {"horizontal":"SCALE","vertical":"SCALE"};
    node_59.layoutAlign = 'INHERIT';
    node_59.layoutGrow = 0;
    node_59.layoutPositioning = 'AUTO';
    node_59.rotation = 0;
    
    // blend
    node_59.blendMode = 'PASS_THROUGH';
    node_59.effects = [];
    node_59.isMask = false;
    // geometry
  node_59.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
  node_59.strokeWeight = 0;
  
    // VECTOR
    const node_60 = figma.createVector();
    
    // append
    node_57.appendChild(node_60);
    node_60.vectorNetwork = {"vertices":[{"x":37.25337482761773,"y":6.600250132862763,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":35.046210090716464,"y":3.213124931577103,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":31.658249102926735,"y":1.007249988957555,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":27.01299943642211,"y":0.11474979352093687,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":19.12924945359757,"y":0,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":11.245499470773034,"y":0.11474979352093687,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":6.604500002818123,"y":1.007249988957555,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":3.2158347861591503,"y":3.212422729230795,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":1.0093747847665973,"y":6.600250132862763,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0.11899998635781824,"y":11.245500030631792,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":19.12925040594992,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0.11899998635781824,"y":27.01300078126805,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":1.0093747847665973,"y":31.660374511818986,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":3.2181764738092618,"y":35.047148105291996,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":6.606624848773244,"y":37.25337262916619,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":11.249749162683276,"y":38.209624286104,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":19.133499145507812,"y":38.326499938964844,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":27.01724912833235,"y":38.209624286104,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":31.662500821394875,"y":37.31925197656528,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":35.0496876640679,"y":35.11131703774077,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":37.25762249297008,"y":31.724125973320174,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":38.147998811297285,"y":27.078876075551143,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":38.266998291015625,"y":19.195125700233014,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":38.147998811297285,"y":11.311375324914886,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":34.665123984396374,"y":26.85575001341299,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":34.00424724168538,"y":30.442749563646714,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":32.57002587264743,"y":32.64569106356415,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":30.366249540550122,"y":34.07862361311828,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":26.81749942264573,"y":34.739500388731116,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":19.052750946097433,"y":34.856376041591965,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":11.285874583757172,"y":34.739500388731116,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":7.739249818447375,"y":34.07862361311828,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":5.526891013655806,"y":32.64841475751347,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.0863751557894314,"y":30.442749563646714,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":3.425499426357384,"y":26.89612512840721,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":3.312874484504402,"y":19.131376265289827,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":3.425499426357384,"y":11.364499516274542,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":4.0863751557894314,"y":7.779624812101725,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":7.739249818447375,"y":4.141624903290251,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":11.285874583757172,"y":3.4807501542354116,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":19.052750946097433,"y":3.3638745013745694,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":26.81749942264573,"y":3.4807501542354116,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":30.366249540550122,"y":4.141624903290251,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":32.569811057510336,"y":5.576064198715896,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":34.00424724168538,"y":7.779624812101725,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":34.665123984396374,"y":11.32625026062023,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":34.77987174564658,"y":19.093124983077516,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":34.688498303181646,"y":26.857875872752896,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":34.665123984396374,"y":26.857875872752896,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"}],"segments":[{"start":0,"end":1,"tangentStart":{"x":-0.4919337568973063,"y":-1.2703667533696807},"tangentEnd":{"x":0.9634664087641357,"y":0.9631005363519306}},{"start":1,"end":2,"tangentStart":{"x":-0.9634664087641357,"y":-0.9631005363519306},"tangentEnd":{"x":1.2705533867705694,"y":0.4914511756000537}},{"start":2,"end":3,"tangentStart":{"x":-1.4867853411541276,"y":-0.558116479187712},"tangentEnd":{"x":1.5877536486427972,"y":0.032600094616882985}},{"start":3,"end":4,"tangentStart":{"x":-2.0463749734872656,"y":-0.08925000212792902},"tangentEnd":{"x":5.189249748894502,"y":0}},{"start":4,"end":5,"tangentStart":{"x":-5.189249748894502,"y":0},"tangentEnd":{"x":2.0293749392476146,"y":-0.1147500072594757}},{"start":5,"end":6,"tangentStart":{"x":-1.5865482266736222,"y":0.03093328430755459},"tangentEnd":{"x":1.484858211253844,"y":-0.5597218297718177}},{"start":6,"end":7,"tangentStart":{"x":-1.2708857422656956,"y":0.4908779446713372},"tangentEnd":{"x":0.9635394915083002,"y":-0.9631736190997336}},{"start":7,"end":8,"tangentStart":{"x":-0.9635394915083002,"y":0.9631736190997336},"tangentEnd":{"x":0.4913606526569968,"y":-1.270699235541228}},{"start":8,"end":9,"tangentStart":{"x":-0.558227278786805,"y":1.4866766143414254},"tangentEnd":{"x":0.031055859834405303,"y":-1.5877218094008654}},{"start":9,"end":10,"tangentStart":{"x":-0.0913750019645618,"y":2.0442501026455475},"tangentEnd":{"x":0,"y":-5.19137535994243}},{"start":10,"end":11,"tangentStart":{"x":0,"y":5.189250007242024},"tangentEnd":{"x":-0.1190000021903018,"y":-2.0336251123817664}},{"start":11,"end":12,"tangentStart":{"x":0.031874998890350455,"y":1.5895001140441132},"tangentEnd":{"x":-0.5588750173546689,"y":-1.4896250029087703}},{"start":12,"end":13,"tangentStart":{"x":0.4927400736206192,"y":1.2702406001343052},"tangentEnd":{"x":-0.9637722923467308,"y":-0.9630404995712398}},{"start":13,"end":14,"tangentStart":{"x":0.9637722923467308,"y":0.9630404995712398},"tangentEnd":{"x":-1.2706144368272199,"y":-0.4917750765650783}},{"start":14,"end":15,"tangentStart":{"x":1.4820464888314713,"y":0.5805434466025522},"tangentEnd":{"x":-1.5908349032654856,"y":-0.052315424519246506}},{"start":15,"end":16,"tangentStart":{"x":2.0463749734872656,"y":0.08925000212792902},"tangentEnd":{"x":-5.189249748894502,"y":0}},{"start":16,"end":17,"tangentStart":{"x":5.189249748894502,"y":0},"tangentEnd":{"x":-2.0293749392476146,"y":0.11687500372898352}},{"start":17,"end":18,"tangentStart":{"x":1.5875922839702399,"y":-0.03228832727205931},"tangentEnd":{"x":-1.4870119356589984,"y":0.5570342972167783}},{"start":18,"end":19,"tangentStart":{"x":1.2702286308675574,"y":-0.4926000439951092},"tangentEnd":{"x":-0.9633628009916458,"y":0.9633628489527971}},{"start":19,"end":20,"tangentStart":{"x":0.9633628009916458,"y":-0.9633628489527971},"tangentEnd":{"x":-0.4926000194709486,"y":1.2702286941060668}},{"start":20,"end":21,"tangentStart":{"x":0.5588750173546689,"y":-1.487500030187989},"tangentEnd":{"x":-0.031874998890350455,"y":1.5895001140441132}},{"start":21,"end":22,"tangentStart":{"x":0.0913750019645618,"y":-2.0442501026455475},"tangentEnd":{"x":0,"y":5.19137535994243}},{"start":22,"end":23,"tangentStart":{"x":0,"y":-5.19137535994243},"tangentEnd":{"x":0.1190000021903018,"y":2.0336251123817664}},{"start":23,"end":0,"tangentStart":{"x":-0.024735756026621557,"y":-1.6101710056237462},"tangentEnd":{"x":0.5672323521325509,"y":1.50715295635325}},{"start":24,"end":25,"tangentStart":{"x":-0.01370271074507589,"y":1.224646464995854},"tangentEnd":{"x":0.4236436954995478,"y":-1.1491181683287721}},{"start":25,"end":26,"tangentStart":{"x":-0.3191187155715146,"y":0.826346566078487},"tangentEnd":{"x":0.6265555914648714,"y":-0.6261896389495769}},{"start":26,"end":27,"tangentStart":{"x":-0.6265555914648714,"y":0.6261896389495769},"tangentEnd":{"x":0.8265328416053758,"y":-0.31863584068592266}},{"start":27,"end":28,"tangentStart":{"x":-1.1363944940226256,"y":0.42170170405918417},"tangentEnd":{"x":1.2120148686539707,"y":-0.015636823549095943}},{"start":28,"end":29,"tangentStart":{"x":-2.0187499495128,"y":0.09350000298318681},"tangentEnd":{"x":5.1765001665243044,"y":0}},{"start":29,"end":30,"tangentStart":{"x":-5.180749858434545,"y":0},"tangentEnd":{"x":2.05699996322208,"y":0.11687500372898352}},{"start":30,"end":31,"tangentStart":{"x":-1.2114038614479918,"y":-0.014825451275478399},"tangentEnd":{"x":1.135441251851772,"y":0.42248363879672624}},{"start":31,"end":32,"tangentStart":{"x":-0.8294155568840815,"y":-0.3166590600187454},"tangentEnd":{"x":0.6292375508518946,"y":0.6263092058714591}},{"start":32,"end":33,"tangentStart":{"x":-0.6292375508518946,"y":-0.6263092058714591},"tangentEnd":{"x":0.3205245767827009,"y":0.8279294345348024}},{"start":33,"end":34,"tangentStart":{"x":-0.41767678075620945,"y":-1.1367674372698164},"tangentEnd":{"x":0.019787348909537962,"y":1.2109098215860137}},{"start":34,"end":35,"tangentStart":{"x":-0.0913750019645618,"y":-2.0187500500165476},"tangentEnd":{"x":0,"y":5.176500424237086}},{"start":35,"end":36,"tangentStart":{"x":0,"y":-5.178625270297993},"tangentEnd":{"x":-0.11262499726667455,"y":2.0591250383508912}},{"start":36,"end":37,"tangentStart":{"x":0.013735674965401304,"y":-1.2239518622420384},"tangentEnd":{"x":-0.4236079774166112,"y":1.148391520626613}},{"start":37,"end":38,"tangentStart":{"x":0.6481250071230327,"y":-1.676625008875144},"tangentEnd":{"x":-1.6766249254041383,"y":0.6417499945678078}},{"start":38,"end":39,"tangentStart":{"x":1.1360029883688774,"y":-0.42045242604832134},"tangentEnd":{"x":-1.2111962659234066,"y":0.016922663713995995}},{"start":39,"end":40,"tangentStart":{"x":2.0208749221277893,"y":-0.09137500651367901},"tangentEnd":{"x":-5.178625012479425,"y":0}},{"start":40,"end":41,"tangentStart":{"x":5.178625012479425,"y":0},"tangentEnd":{"x":-2.054874990607091,"y":-0.11687500372898352}},{"start":41,"end":42,"tangentStart":{"x":1.212118983065935,"y":0.014581530084255844},"tangentEnd":{"x":-1.13611166253611,"y":-0.4227237225895522}},{"start":42,"end":43,"tangentStart":{"x":0.8264726781678052,"y":0.3193300634601136},"tangentEnd":{"x":-0.6265096772625149,"y":-0.6265097084533866}},{"start":43,"end":44,"tangentStart":{"x":0.6265096772625149,"y":0.6265097084533866},"tangentEnd":{"x":-0.3193300475622227,"y":-0.8264727193138627}},{"start":44,"end":45,"tangentStart":{"x":0.41767678075620945,"y":1.1367674372698164},"tangentEnd":{"x":-0.019787348909537962,"y":-1.2109098215860137}},{"start":45,"end":46,"tangentStart":{"x":0.0913750019645618,"y":2.0208750227373287},"tangentEnd":{"x":0,"y":-5.178625270297993}},{"start":46,"end":47,"tangentStart":{"x":0,"y":5.176500424237086},"tangentEnd":{"x":0.0913750019645618,"y":-2.03150001300111}},{"start":47,"end":48,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":48,"end":24,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}}],"regions":[{"windingRule":"NONZERO","loops":[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]],"fillStyleId":"","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]}]};
    
    // base
    node_60.name = 'Vector';
    
    // corner 
    node_60.cornerRadius = 0;
    // scene
    
    // layout
    node_60.resize(38.266998291015625, 38.326499938964844);
    
    node_60.x = 6.3792500495910645;
    node_60.y = 6.38562536239624;
    node_60.constrainProportions = false;
    node_60.constraints = {"horizontal":"SCALE","vertical":"SCALE"};
    node_60.layoutAlign = 'INHERIT';
    node_60.layoutGrow = 0;
    node_60.layoutPositioning = 'AUTO';
    node_60.rotation = 0;
    
    // blend
    node_60.blendMode = 'PASS_THROUGH';
    node_60.effects = [];
    node_60.isMask = false;
    // geometry
  node_60.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
  node_60.strokeWeight = 0;
  
    // TEXT 
    const node_61 = figma.createText();
    
    // append
    node_0.appendChild(node_61);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_61.autoRename = true;
    node_61.fontName = {"family":"Poppins","style":"Bold"};
    node_61.fontSize = 32;
    node_61.characters = '081808880816 (Tria) ';
    node_61.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
    node_61.textCase = 'ORIGINAL';
    node_61.textDecoration = 'NONE';
    node_61.letterSpacing = {"unit":"PERCENT","value":0};
    node_61.lineHeight = {"unit":"AUTO"};
    node_61.hyperlink = null;
    node_61.textAlignHorizontal = 'LEFT';
    node_61.textAlignVertical = 'CENTER';
    node_61.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_61.paragraphIndent = 0;
    node_61.paragraphSpacing = 0;
    
    // base
    node_61.name = '081808880816 (Tria)';
    // scene
    
    // layout
    node_61.resize(333, 48);
    
    node_61.x = 115;
    node_61.y = 3604;
    node_61.constrainProportions = false;
    node_61.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_61.layoutAlign = 'INHERIT';
    node_61.layoutGrow = 0;
    node_61.layoutPositioning = 'AUTO';
    node_61.rotation = 0;
    
    // blend
    node_61.blendMode = 'PASS_THROUGH';
    node_61.effects = [];
    node_61.isMask = false;
    // geometry
  node_61.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
  node_61.strokeWeight = 0;
  
    // GROUP
    const node_62 = figma.createFrame();
    
    // append
    node_0.appendChild(node_62);
    
    // layout
    node_62.resize(622, 36);
    
    node_62.x = 403;
    node_62.y = 4032;
    node_62.constrainProportions = false;
    
    node_62.layoutAlign = 'INHERIT';
    node_62.layoutGrow = 0;
    node_62.layoutPositioning = 'AUTO';
    node_62.rotation = 0;
    
    // base
    node_62.name = 'Group 1000002062';
    
    // blend
    node_62.blendMode = 'PASS_THROUGH';
    node_62.effects = [];
    node_62.isMask = false;
    // scene
    
    // FRAME
    const node_63 = figma.createFrame();
    
    // append
    node_62.appendChild(node_63);
    
    // layout
    node_63.resize(32, 32);
    
    node_63.x = 403;
    node_63.y = 4034;
    node_63.constrainProportions = false;
    node_63.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_63.layoutAlign = 'INHERIT';
    node_63.layoutGrow = 0;
    node_63.layoutPositioning = 'AUTO';
    node_63.rotation = 0;// before frame
    
    // frame
    node_63.layoutMode = 'NONE';
    node_63.primaryAxisSizingMode = 'AUTO';
    node_63.primaryAxisAlignItems = 'MIN';
    node_63.counterAxisAlignItems = 'MIN';
    node_63.counterAxisSizingMode = 'FIXED';
    node_63.paddingLeft = 0;
    node_63.paddingRight = 0;
    node_63.paddingTop = 0;
    node_63.paddingBottom = 0;
    node_63.itemSpacing = 0;
    
    node_63.clipsContent = true;
    
    
    // base
    node_63.name = 'Frame';
    // scene
    
    // blend
    node_63.blendMode = 'PASS_THROUGH';
    node_63.effects = [];
    node_63.isMask = false;
    // geometry
  node_63.fills = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_63.strokeWeight = 0;
    
    // VECTOR
    const node_64 = figma.createVector();
    
    // append
    node_63.appendChild(node_64);
    node_64.vectorNetwork = {"vertices":[{"x":13.333333015441895,"y":26.66666603088379,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":26.66666603088379,"y":13.333333015441895,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":13.333333015441895,"y":0,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":13.333333015441895,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":13.333333015441895,"y":2.666666603088379,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":23.999999427795412,"y":13.333333015441895,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":13.333333015441895,"y":23.999999427795412,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":2.666666603088379,"y":13.333333015441895,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"}],"segments":[{"start":0,"end":1,"tangentStart":{"x":7.227999832757314,"y":0},"tangentEnd":{"x":0,"y":7.227999832757314}},{"start":1,"end":2,"tangentStart":{"x":0,"y":-7.227999832757314},"tangentEnd":{"x":7.227999832757314,"y":0}},{"start":2,"end":3,"tangentStart":{"x":-7.227999832757314,"y":0},"tangentEnd":{"x":0,"y":-7.227999832757314}},{"start":3,"end":0,"tangentStart":{"x":0,"y":7.227999832757314},"tangentEnd":{"x":-7.227999832757314,"y":0}},{"start":4,"end":5,"tangentStart":{"x":5.782666386381789,"y":0},"tangentEnd":{"x":0,"y":-5.782666386381789}},{"start":5,"end":6,"tangentStart":{"x":0,"y":5.782666386381789},"tangentEnd":{"x":5.782666386381789,"y":0}},{"start":6,"end":7,"tangentStart":{"x":-5.782666386381789,"y":0},"tangentEnd":{"x":0,"y":5.782666386381789}},{"start":7,"end":4,"tangentStart":{"x":0,"y":-5.782666386381789},"tangentEnd":{"x":-5.782666386381789,"y":0}}],"regions":[{"windingRule":"NONZERO","loops":[[0,1,2,3],[4,5,6,7]],"fillStyleId":"","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.11764705926179886,"g":0.11764705926179886,"b":0.11764705926179886},"boundVariables":{}}]}]};
    
    // base
    node_64.name = 'Vector';
    
    // corner 
    node_64.cornerRadius = 0;
    // scene
    
    // layout
    node_64.resize(26.66666603088379, 26.66666603088379);
    
    node_64.x = 2.6666665077209473;
    node_64.y = 2.6666665077209473;
    node_64.constrainProportions = false;
    node_64.constraints = {"horizontal":"SCALE","vertical":"SCALE"};
    node_64.layoutAlign = 'INHERIT';
    node_64.layoutGrow = 0;
    node_64.layoutPositioning = 'AUTO';
    node_64.rotation = 0;
    
    // blend
    node_64.blendMode = 'PASS_THROUGH';
    node_64.effects = [];
    node_64.isMask = false;
    // geometry
  node_64.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.11764705926179886,"g":0.11764705926179886,"b":0.11764705926179886},"boundVariables":{}}]
  node_64.strokeWeight = 0;
  
    // VECTOR
    const node_65 = figma.createVector();
    
    // append
    node_63.appendChild(node_65);
    node_65.vectorNetwork = {"vertices":[{"x":6.666666666666666,"y":13.333333015441895,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":11.609333038330078,"y":11.610666633987421,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":9.724000295003254,"y":9.722666190719611,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":6.666666666666666,"y":10.666666412353516,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":2.6666666666666665,"y":6.666666507720947,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":6.666666666666666,"y":2.666666603088379,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":9.724000295003254,"y":3.6093329522768727,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":11.609333038330078,"y":1.724000253899885,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":6.666666666666666,"y":0,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"},{"x":0,"y":6.666666507720947,"strokeCap":"NONE","strokeJoin":"MITER","cornerRadius":0,"handleMirroring":"NONE"}],"segments":[{"start":0,"end":1,"tangentStart":{"x":1.2013333638509114,"y":0},"tangentEnd":{"x":-1.5013333956400552,"y":1.4986665686289484}},{"start":1,"end":2,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":2,"end":3,"tangentStart":{"x":-0.590666651725769,"y":0.5906666376431787},"tangentEnd":{"x":1.3226666450500488,"y":0}},{"start":3,"end":4,"tangentStart":{"x":-2.1680000623067217,"y":0},"tangentEnd":{"x":0,"y":2.1680000106175727}},{"start":4,"end":5,"tangentStart":{"x":0,"y":-2.1680000106175727},"tangentEnd":{"x":-2.1680000623067217,"y":0}},{"start":5,"end":6,"tangentStart":{"x":1.3239999612172444,"y":0},"tangentEnd":{"x":-0.5893333355585734,"y":-0.5893333215077717}},{"start":6,"end":7,"tangentStart":{"x":0,"y":0},"tangentEnd":{"x":0,"y":0}},{"start":7,"end":8,"tangentStart":{"x":-1.5,"y":-1.4999999642372133},"tangentEnd":{"x":1.2013333638509114,"y":0}},{"start":8,"end":9,"tangentStart":{"x":-3.6759999593098955,"y":0},"tangentEnd":{"x":0,"y":-3.6759998716672273}},{"start":9,"end":0,"tangentStart":{"x":0,"y":3.6759998716672273},"tangentEnd":{"x":-3.6759999593098955,"y":0}}],"regions":[{"windingRule":"NONZERO","loops":[[0,1,2,3,4,5,6,7,8,9]],"fillStyleId":"","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.11764705926179886,"g":0.11764705926179886,"b":0.11764705926179886},"boundVariables":{}}]}]};
    
    // base
    node_65.name = 'Vector';
    
    // corner 
    node_65.cornerRadius = 0;
    // scene
    
    // layout
    node_65.resize(11.609333038330078, 13.333333015441895);
    
    node_65.x = 9.333333969116211;
    node_65.y = 9.333333969116211;
    node_65.constrainProportions = false;
    node_65.constraints = {"horizontal":"SCALE","vertical":"SCALE"};
    node_65.layoutAlign = 'INHERIT';
    node_65.layoutGrow = 0;
    node_65.layoutPositioning = 'AUTO';
    node_65.rotation = 0;
    
    // blend
    node_65.blendMode = 'PASS_THROUGH';
    node_65.effects = [];
    node_65.isMask = false;
    // geometry
  node_65.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.11764705926179886,"g":0.11764705926179886,"b":0.11764705926179886},"boundVariables":{}}]
  node_65.strokeWeight = 0;
  
    // TEXT 
    const node_66 = figma.createText();
    
    // append
    node_62.appendChild(node_66);
    await figma.loadFontAsync({"family":"Poppins","style":"Regular"});
    node_66.autoRename = true;
    node_66.fontName = {"family":"Poppins","style":"Regular"};
    node_66.fontSize = 24;
    node_66.characters = '2025 - 2029 Waluya Aquarium All Right Reserved';
    node_66.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.11764705926179886,"g":0.11764705926179886,"b":0.11764705926179886},"boundVariables":{}}];
    node_66.textCase = 'ORIGINAL';
    node_66.textDecoration = 'NONE';
    node_66.letterSpacing = {"unit":"PERCENT","value":0};
    node_66.lineHeight = {"unit":"AUTO"};
    node_66.hyperlink = null;
    node_66.textAlignHorizontal = 'LEFT';
    node_66.textAlignVertical = 'CENTER';
    node_66.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_66.paragraphIndent = 0;
    node_66.paragraphSpacing = 0;
    
    // base
    node_66.name = '2025 - 2029 Waluya Aquarium All Right Reserved';
    // scene
    
    // layout
    node_66.resize(583, 36);
    
    node_66.x = 442;
    node_66.y = 4032;
    node_66.constrainProportions = false;
    node_66.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_66.layoutAlign = 'INHERIT';
    node_66.layoutGrow = 0;
    node_66.layoutPositioning = 'AUTO';
    node_66.rotation = 0;
    
    // blend
    node_66.blendMode = 'PASS_THROUGH';
    node_66.effects = [];
    node_66.isMask = false;
    // geometry
  node_66.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.11764705926179886,"g":0.11764705926179886,"b":0.11764705926179886},"boundVariables":{}}]
  node_66.strokeWeight = 0;
  
    // GROUP
    const node_67 = figma.createFrame();
    
    // append
    node_0.appendChild(node_67);
    
    // layout
    node_67.resize(1440, 100);
    
    node_67.x = 0;
    node_67.y = 0;
    node_67.constrainProportions = false;
    
    node_67.layoutAlign = 'INHERIT';
    node_67.layoutGrow = 0;
    node_67.layoutPositioning = 'AUTO';
    node_67.rotation = 0;
    
    // base
    node_67.name = 'Group 1000001982';
    
    // blend
    node_67.blendMode = 'PASS_THROUGH';
    node_67.effects = [{"type":"DROP_SHADOW","visible":true,"radius":4,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.25},"offset":{"x":0,"y":4},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":false}];
    node_67.isMask = false;
    // scene
    
    // RECTANGLE
    const node_68 = figma.createRectangle();
    
    // append
    node_67.appendChild(node_68);
    
    // base
    node_68.name = 'Rectangle 4549';
    // scene
    
    // layout
    node_68.resize(1440, 100);
    
    node_68.x = 0;
    node_68.y = 0;
    node_68.constrainProportions = false;
    node_68.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_68.layoutAlign = 'INHERIT';
    node_68.layoutGrow = 0;
    node_68.layoutPositioning = 'AUTO';
    node_68.rotation = 0;
    
    // blend
    node_68.blendMode = 'PASS_THROUGH';
    node_68.effects = [];
    node_68.isMask = false;
    // geometry
  node_68.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_68.strokeWeight = 0;
  
    // TEXT 
    const node_69 = figma.createText();
    
    // append
    node_67.appendChild(node_69);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_69.autoRename = true;
    node_69.fontName = {"family":"Poppins","style":"Bold"};
    node_69.fontSize = 24;
    node_69.characters = 'Waluya Aquarium';
    node_69.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13503143191337585,"g":0.33317533135414124,"b":0.6105769276618958},"boundVariables":{}}];
    node_69.textCase = 'ORIGINAL';
    node_69.textDecoration = 'NONE';
    node_69.letterSpacing = {"unit":"PERCENT","value":0};
    node_69.lineHeight = {"unit":"AUTO"};
    node_69.hyperlink = null;
    node_69.textAlignHorizontal = 'LEFT';
    node_69.textAlignVertical = 'CENTER';
    node_69.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_69.paragraphIndent = 0;
    node_69.paragraphSpacing = 0;
    
    // base
    node_69.name = 'Waluya Aquarium';
    // scene
    
    // layout
    node_69.resize(227, 36);
    
    node_69.x = 96;
    node_69.y = 36;
    node_69.constrainProportions = false;
    node_69.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_69.layoutAlign = 'INHERIT';
    node_69.layoutGrow = 0;
    node_69.layoutPositioning = 'AUTO';
    node_69.rotation = 0;
    
    // blend
    node_69.blendMode = 'PASS_THROUGH';
    node_69.effects = [];
    node_69.isMask = false;
    // geometry
  node_69.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13503143191337585,"g":0.33317533135414124,"b":0.6105769276618958},"boundVariables":{}}]
  node_69.strokeWeight = 0;
  
    // TEXT 
    const node_70 = figma.createText();
    
    // append
    node_67.appendChild(node_70);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_70.autoRename = true;
    node_70.fontName = {"family":"Poppins","style":"Bold"};
    node_70.fontSize = 24;
    node_70.characters = 'Tentang kami';
    node_70.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}];
    node_70.textCase = 'ORIGINAL';
    node_70.textDecoration = 'NONE';
    node_70.letterSpacing = {"unit":"PERCENT","value":0};
    node_70.lineHeight = {"unit":"AUTO"};
    node_70.hyperlink = null;
    node_70.textAlignHorizontal = 'LEFT';
    node_70.textAlignVertical = 'CENTER';
    node_70.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_70.paragraphIndent = 0;
    node_70.paragraphSpacing = 0;
    
    // base
    node_70.name = 'Tentang kami';
    // scene
    
    // layout
    node_70.resize(173, 36);
    
    node_70.x = 560;
    node_70.y = 32;
    node_70.constrainProportions = false;
    node_70.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_70.layoutAlign = 'INHERIT';
    node_70.layoutGrow = 0;
    node_70.layoutPositioning = 'AUTO';
    node_70.rotation = 0;
    
    // blend
    node_70.blendMode = 'PASS_THROUGH';
    node_70.effects = [];
    node_70.isMask = false;
    // geometry
  node_70.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_70.strokeWeight = 0;
  
    // TEXT 
    const node_71 = figma.createText();
    
    // append
    node_67.appendChild(node_71);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_71.autoRename = true;
    node_71.fontName = {"family":"Poppins","style":"Bold"};
    node_71.fontSize = 24;
    node_71.characters = 'Produk kami';
    node_71.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13503143191337585,"g":0.33317533135414124,"b":0.6105769276618958},"boundVariables":{}}];
    node_71.textCase = 'ORIGINAL';
    node_71.textDecoration = 'NONE';
    node_71.letterSpacing = {"unit":"PERCENT","value":0};
    node_71.lineHeight = {"unit":"AUTO"};
    node_71.hyperlink = null;
    node_71.textAlignHorizontal = 'LEFT';
    node_71.textAlignVertical = 'CENTER';
    node_71.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_71.paragraphIndent = 0;
    node_71.paragraphSpacing = 0;
    
    // base
    node_71.name = 'Produk kami';
    // scene
    
    // layout
    node_71.resize(157, 36);
    
    node_71.x = 765;
    node_71.y = 32;
    node_71.constrainProportions = false;
    node_71.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_71.layoutAlign = 'INHERIT';
    node_71.layoutGrow = 0;
    node_71.layoutPositioning = 'AUTO';
    node_71.rotation = 0;
    
    // blend
    node_71.blendMode = 'PASS_THROUGH';
    node_71.effects = [];
    node_71.isMask = false;
    // geometry
  node_71.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.13503143191337585,"g":0.33317533135414124,"b":0.6105769276618958},"boundVariables":{}}]
  node_71.strokeWeight = 0;
  
    // TEXT 
    const node_72 = figma.createText();
    
    // append
    node_67.appendChild(node_72);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_72.autoRename = true;
    node_72.fontName = {"family":"Poppins","style":"Bold"};
    node_72.fontSize = 24;
    node_72.characters = 'Wishlist';
    node_72.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}];
    node_72.textCase = 'ORIGINAL';
    node_72.textDecoration = 'NONE';
    node_72.letterSpacing = {"unit":"PERCENT","value":0};
    node_72.lineHeight = {"unit":"AUTO"};
    node_72.hyperlink = null;
    node_72.textAlignHorizontal = 'LEFT';
    node_72.textAlignVertical = 'CENTER';
    node_72.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_72.paragraphIndent = 0;
    node_72.paragraphSpacing = 0;
    
    // base
    node_72.name = 'Wishlist';
    // scene
    
    // layout
    node_72.resize(100, 36);
    
    node_72.x = 954;
    node_72.y = 32;
    node_72.constrainProportions = false;
    node_72.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_72.layoutAlign = 'INHERIT';
    node_72.layoutGrow = 0;
    node_72.layoutPositioning = 'AUTO';
    node_72.rotation = 0;
    
    // blend
    node_72.blendMode = 'PASS_THROUGH';
    node_72.effects = [];
    node_72.isMask = false;
    // geometry
  node_72.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_72.strokeWeight = 0;
  
    // GROUP
    const node_73 = figma.createFrame();
    
    // append
    node_67.appendChild(node_73);
    
    // layout
    node_73.resize(150, 42);
    
    node_73.x = 1268;
    node_73.y = 29;
    node_73.constrainProportions = false;
    
    node_73.layoutAlign = 'INHERIT';
    node_73.layoutGrow = 0;
    node_73.layoutPositioning = 'AUTO';
    node_73.rotation = 0;
    
    // base
    node_73.name = 'Group 1000001988';
    
    // blend
    node_73.blendMode = 'PASS_THROUGH';
    node_73.effects = [];
    node_73.isMask = false;
    // scene
    
    // RECTANGLE
    const node_74 = figma.createRectangle();
    
    // append
    node_73.appendChild(node_74);
    
    // base
    node_74.name = 'Rectangle 4547';
    // scene
    
    // layout
    node_74.resize(150, 42);
    
    node_74.x = 1268;
    node_74.y = 29;
    node_74.constrainProportions = false;
    node_74.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_74.layoutAlign = 'INHERIT';
    node_74.layoutGrow = 0;
    node_74.layoutPositioning = 'AUTO';
    node_74.rotation = 0;
    
    // blend
    node_74.blendMode = 'PASS_THROUGH';
    node_74.effects = [];
    node_74.isMask = false;
    // geometry
  node_74.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_74.strokes = [{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3291666805744171,"g":0.3291666805744171,"b":0.3291666805744171},"boundVariables":{}}];
  node_74.strokeWeight = 1;
  node_74.strokeJoin = "MITER";
  node_74.strokeAlign = 'INSIDE';
  node_74.dashPattern = [];
  node_74.strokeCap = "NONE";
  node_74.strokeMiterLimit = 4;
  
    // TEXT 
    const node_75 = figma.createText();
    
    // append
    node_73.appendChild(node_75);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_75.autoRename = true;
    node_75.fontName = {"family":"Poppins","style":"Bold"};
    node_75.fontSize = 24;
    node_75.characters = 'Register';
    node_75.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}];
    node_75.textCase = 'ORIGINAL';
    node_75.textDecoration = 'NONE';
    node_75.letterSpacing = {"unit":"PERCENT","value":0};
    node_75.lineHeight = {"unit":"AUTO"};
    node_75.hyperlink = {"type":"URL","value":"https://ipb-university.zoom.us/j/96849541116?pwd=kX0Hk4H8t94s9Wx7he3sEMcPQzC6wF.1","openInNewTab":true};
    node_75.textAlignHorizontal = 'LEFT';
    node_75.textAlignVertical = 'CENTER';
    node_75.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_75.paragraphIndent = 0;
    node_75.paragraphSpacing = 0;
    
    // base
    node_75.name = 'Register';
    // scene
    
    // layout
    node_75.resize(102, 36);
    
    node_75.x = 1294;
    node_75.y = 32;
    node_75.constrainProportions = false;
    node_75.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_75.layoutAlign = 'INHERIT';
    node_75.layoutGrow = 0;
    node_75.layoutPositioning = 'AUTO';
    node_75.rotation = 0;
    
    // blend
    node_75.blendMode = 'PASS_THROUGH';
    node_75.effects = [];
    node_75.isMask = false;
    // geometry
  node_75.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]
  node_75.strokeWeight = 0;
  
    // GROUP
    const node_76 = figma.createFrame();
    
    // append
    node_67.appendChild(node_76);
    
    // layout
    node_76.resize(150, 42);
    
    node_76.x = 1086;
    node_76.y = 29;
    node_76.constrainProportions = false;
    
    node_76.layoutAlign = 'INHERIT';
    node_76.layoutGrow = 0;
    node_76.layoutPositioning = 'AUTO';
    node_76.rotation = 0;
    
    // base
    node_76.name = 'Group 1000001987';
    
    // blend
    node_76.blendMode = 'PASS_THROUGH';
    node_76.effects = [];
    node_76.isMask = false;
    // scene
    
    // RECTANGLE
    const node_77 = figma.createRectangle();
    
    // append
    node_76.appendChild(node_77);
    
    // base
    node_77.name = 'Rectangle 4547';
    // scene
    
    // layout
    node_77.resize(150, 42);
    
    node_77.x = 1086;
    node_77.y = 29;
    node_77.constrainProportions = false;
    node_77.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_77.layoutAlign = 'INHERIT';
    node_77.layoutGrow = 0;
    node_77.layoutPositioning = 'AUTO';
    node_77.rotation = 0;
    
    // blend
    node_77.blendMode = 'PASS_THROUGH';
    node_77.effects = [];
    node_77.isMask = false;
    // geometry
  node_77.fills = []
  node_77.strokes = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}];
  node_77.strokeWeight = 2;
  node_77.strokeJoin = "MITER";
  node_77.strokeAlign = 'INSIDE';
  node_77.dashPattern = [];
  node_77.strokeCap = "NONE";
  node_77.strokeMiterLimit = 4;
  
    // TEXT 
    const node_78 = figma.createText();
    
    // append
    node_76.appendChild(node_78);
    await figma.loadFontAsync({"family":"Poppins","style":"Bold"});
    node_78.autoRename = true;
    node_78.fontName = {"family":"Poppins","style":"Bold"};
    node_78.fontSize = 24;
    node_78.characters = 'Login';
    node_78.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}];
    node_78.textCase = 'ORIGINAL';
    node_78.textDecoration = 'NONE';
    node_78.letterSpacing = {"unit":"PERCENT","value":0};
    node_78.lineHeight = {"unit":"AUTO"};
    node_78.hyperlink = null;
    node_78.textAlignHorizontal = 'LEFT';
    node_78.textAlignVertical = 'CENTER';
    node_78.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_78.paragraphIndent = 0;
    node_78.paragraphSpacing = 0;
    
    // base
    node_78.name = 'Login';
    // scene
    
    // layout
    node_78.resize(67, 36);
    
    node_78.x = 1129;
    node_78.y = 32;
    node_78.constrainProportions = false;
    node_78.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_78.layoutAlign = 'INHERIT';
    node_78.layoutGrow = 0;
    node_78.layoutPositioning = 'AUTO';
    node_78.rotation = 0;
    
    // blend
    node_78.blendMode = 'PASS_THROUGH';
    node_78.effects = [];
    node_78.isMask = false;
    // geometry
  node_78.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_78.strokeWeight = 0;
  
    // TEXT 
    const node_79 = figma.createText();
    
    // append
    node_67.appendChild(node_79);
    await figma.loadFontAsync({"family":"Rubik Glitch Pop","style":"Regular"});
    node_79.autoRename = true;
    node_79.fontName = {"family":"Rubik Glitch Pop","style":"Regular"};
    node_79.fontSize = 64;
    node_79.characters = 'W';
    node_79.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}];
    node_79.textCase = 'ORIGINAL';
    node_79.textDecoration = 'NONE';
    node_79.letterSpacing = {"unit":"PERCENT","value":0};
    node_79.lineHeight = {"unit":"AUTO"};
    node_79.hyperlink = null;
    node_79.textAlignHorizontal = 'LEFT';
    node_79.textAlignVertical = 'CENTER';
    node_79.textAutoResize = 'WIDTH_AND_HEIGHT';
    node_79.paragraphIndent = 0;
    node_79.paragraphSpacing = 0;
    
    // base
    node_79.name = 'W';
    // scene
    
    // layout
    node_79.resize(55, 76);
    
    node_79.x = 34;
    node_79.y = 12;
    node_79.constrainProportions = false;
    node_79.constraints = {"horizontal":"MIN","vertical":"MIN"};
    node_79.layoutAlign = 'INHERIT';
    node_79.layoutGrow = 0;
    node_79.layoutPositioning = 'AUTO';
    node_79.rotation = 0;
    
    // blend
    node_79.blendMode = 'PASS_THROUGH';
    node_79.effects = [];
    node_79.isMask = false;
    // geometry
  node_79.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.08347586542367935,"g":0.21851827204227448,"b":0.5600961446762085},"boundVariables":{}}]
  node_79.strokeWeight = 0;
    return node_0;// return root
  }