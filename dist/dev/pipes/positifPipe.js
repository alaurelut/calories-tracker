var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var angular2_1 = require('angular2/angular2');
var PositifPipe = (function (_super) {
    __extends(PositifPipe, _super);
    function PositifPipe() {
        _super.apply(this, arguments);
    }
    PositifPipe.prototype.supports = function () {
        return true;
    };
    PositifPipe.prototype.transform = function (value) {
        var change = Math.abs(value);
        return change;
    };
    PositifPipe.prototype.create = function () {
        return this;
    };
    return PositifPipe;
})(angular2_1.Pipe);
exports.PositifPipe = PositifPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL3Bvc2l0aWZQaXBlLnRzIl0sIm5hbWVzIjpbIlBvc2l0aWZQaXBlIiwiUG9zaXRpZlBpcGUuY29uc3RydWN0b3IiLCJQb3NpdGlmUGlwZS5zdXBwb3J0cyIsIlBvc2l0aWZQaXBlLnRyYW5zZm9ybSIsIlBvc2l0aWZQaXBlLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUJBQW1CLG1CQUFtQixDQUFDLENBQUE7QUFFdkM7SUFBaUNBLCtCQUFJQTtJQUFyQ0E7UUFBaUNDLDhCQUFJQTtJQWFyQ0EsQ0FBQ0E7SUFaQ0QsOEJBQVFBLEdBQVJBO1FBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBRURGLCtCQUFTQSxHQUFUQSxVQUFVQSxLQUFLQTtRQUNiRyxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM3QkEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBRURILDRCQUFNQSxHQUFOQTtRQUNFSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNkQSxDQUFDQTtJQUNISixrQkFBQ0E7QUFBREEsQ0FiQSxBQWFDQSxFQWJnQyxlQUFJLEVBYXBDO0FBYlksbUJBQVcsY0FhdkIsQ0FBQSIsImZpbGUiOiJwaXBlcy9wb3NpdGlmUGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvc2l0aWZQaXBlIGV4dGVuZHMgUGlwZSB7XHJcbiAgc3VwcG9ydHMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZSk6IG51bWJlciB7XHJcbiAgICBsZXQgY2hhbmdlID0gTWF0aC5hYnModmFsdWUpO1xyXG4gICAgcmV0dXJuIGNoYW5nZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpOiBQaXBlIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==