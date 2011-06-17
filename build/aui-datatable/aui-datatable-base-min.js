AUI.add("aui-datatable-base",function(c){var f=c.Lang,k=f.isNumber,b=f.isString,i="childNodes",e="columnset",d="data",g="headers",h="id",a="#",j=" ";c.DataTable.Base=c.Base.create("datatable",c.DataTable.Base,[],{initializer:function(){var l=this;l.after("render",l._afterRender);l.after("recordsetChange",l._afterRecordsetChangeExt);},getCellNode:function(m,n){var l=this;return l.getRowNode(m).get(i).item(n.keyIndex);},getColNode:function(m){var l=this;var o=l.get(e);var n=o.getColumnIndex(o.getColumnByCell(m));return l._colgroupNode.get(i).item(n);},getRowNode:function(l){return c.one(a+l.get(h));},_afterRender:function(){var l=this;l._bindPluginsEvents();l._fixPluginsUI();},_afterRecordsetChangeExt:function(m){var l=this;l._fixPluginsUI();},_bindPluginsEvents:function(){var l=this;var m=l.sort;if(m){m.after("lastSortedByChange",c.bind(l._fixPluginsUI,l));}},_fixPluginsUI:function(){var m=this;var n=m.sort;var l=m.scroll;if(n&&l){l.syncUI();l._syncWidths();}}},{});c.Columnset=c.Base.create("columnset",c.Columnset,[],{getColumn:function(m){var l=this;if(b(m)){return this.idHash[m];}else{if(k(m)){return l.keys[m];}}return null;},getColumnByCell:function(m){var l=this;var n=m.getAttribute(g).split(j).pop()||m.get(h);return l.getColumn(n);},getColumnIndex:function(l){return l.keyIndex;},getLength:function(){var l=this;return l.keys.length;},_setDefinitions:function(l){return l;}},{});c.Recordset=c.Base.create("recordset",c.Recordset,[],{getRecordByRow:function(m){var l=this;return l.getRecord(m.get(h));},getRecordIndex:function(m){var l=this;return c.Array.indexOf(l._items,m);},updateRecordDataByKey:function(m,n,p){var l=this;var o=m.get(d);if(o){o[n]=p;m.set(d,o);}l.update(m,l.getRecordIndex(m));}},{});},"@VERSION@",{requires:["aui-base","datatable","plugin"]});