'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentTabview = require('@economist/component-tabview');

var _economistComponentTabview2 = _interopRequireDefault(_economistComponentTabview);

var ArticleTemplate = (function (_React$Component) {
  function ArticleTemplate(props) {
    _classCallCheck(this, ArticleTemplate);

    _React$Component.call(this, props);
  }

  _inherits(ArticleTemplate, _React$Component);

  ArticleTemplate.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'article-container-inner' },
      _react2['default'].createElement(
        'div',
        { className: 'section group' },
        _react2['default'].createElement(
          'div',
          { className: 'span_12 article-image-container' },
          _react2['default'].createElement(
            'div',
            { className: 'article-image-container-content' },
            _react2['default'].createElement(
              'div',
              { className: 'article-title-container' },
              _react2['default'].createElement(
                'h2',
                { className: 'article-section margin_1' },
                this.props.section
              ),
              _react2['default'].createElement(
                'h1',
                { className: 'article-flytitle margin_1 span_10 ' },
                this.props.flytitle
              ),
              _react2['default'].createElement(
                'h3',
                { className: 'article-title margin_1 span_10 ' },
                this.props.title
              )
            ),
            _react2['default'].createElement('img', { src: this.props.mainimage, className: 'article-image' })
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'section group' },
        _react2['default'].createElement(
          'h4',
          { className: 'span_10 margin_1 article-rubric' },
          'Rluptat inctota tisqui asitio molupti quid essita quatur si cus, od esequi sitaspe rsperum es enisderis solor sin repeditae ium sitaspe rsperum es enis deris solor sin repeditae ium'
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'section group' },
        _react2['default'].createElement(
          'div',
          { className: 'span_12 article-body' },
          this.props.children
        )
      ),
      _react2['default'].createElement(
        _economistComponentTabview2['default'],
        null,
        _react2['default'].createElement(
          'div',
          { title: 'Politics' },
          _react2['default'].createElement('div', { className: 'TabView--Views--Tint' }),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/cats' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/people' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/city' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/fashion' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { title: 'Business & Economics' },
          _react2['default'].createElement('div', { className: 'TabView--Views--Tint' }),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/food' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/nightlife' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/sports' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/nature' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { title: 'Science & technology' },
          _react2['default'].createElement('div', { className: 'TabView--Views--Tint' }),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/transport' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/abstract' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/technics' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/cats' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { title: 'History' },
          _react2['default'].createElement('div', { className: 'TabView--Views--Tint' }),
          _react2['default'].createElement(
            'a',
            { href: '#' },
            _react2['default'].createElement(
              'figure',
              { className: 'TabView--View--Content' },
              _react2['default'].createElement('img', { src: 'http://lorempixel.com/g/300/169/nightlife' }),
              _react2['default'].createElement(
                'figcaption',
                null,
                'this is the caption'
              )
            )
          )
        )
      )
    );
  };

  _createClass(ArticleTemplate, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        section: _react2['default'].PropTypes.string,
        flytitle: _react2['default'].PropTypes.string,
        title: _react2['default'].PropTypes.string,
        mainimage: _react2['default'].PropTypes.node,
        children: _react2['default'].PropTypes.node
      };
    }
  }]);

  return ArticleTemplate;
})(_react2['default'].Component);

exports['default'] = ArticleTemplate;
module.exports = exports['default'];

