/*global define*/
define(function() {
    "use strict";

    /**
     * Represents a command to the renderer for drawing.
     *
     * @alias DrawCommand
     * @constructor
     *
     * @see ClearCommand
     * @see PassState
     */
    var DrawCommand = function(owner) {
        /**
         * The bounding volume of the geometry.  This is used for culling and frustum selection.
         * <p>
         * For best rendering performance, use the tightest possible bounding volume.  Although
         * <code>undefined</code> is allowed, always try to provide a bounding volume to
         * allow the tightest possible near and far planes to be computed for the scene, and
         * minimize the number of frustums needed.
         * </p>
         *
         * @type Object
         *
         * @default undefined
         *
         * @see DrawCommand#debugShowBoundingVolume
         */
        this.boundingVolume = undefined;

        /**
         * The transformation from the geometry in model space to world space.
         * <p>
         * When <code>undefined</code>, the geometry is assumed to be defined in world space.
         * </p>
         *
         * @type Matrix4
         *
         * @default undefined
         */
        this.modelMatrix = undefined;

        /**
         * The type of geometry in the vertex array.
         *
         * @type PrimitiveType
         *
         * @default undefined
         */
        this.primitiveType = undefined;

        /**
         * The vertex array.
         *
         * @type VertexArray
         *
         * @default undefined
         */
        this.vertexArray = undefined;

        /**
         * The number of vertices to draw in the vertex array.
         *
         * @type Number
         *
         * @default undefined
         */
        this.count = undefined;

        /**
         * The offset to start drawing in the vertex array.
         *
         * @type Number
         *
         * @default undefined
         */
        this.offset = undefined;

        /**
         * The shader program to apply.
         *
         * @type ShaderProgram
         *
         * @default undefined
         */
        this.shaderProgram = undefined;

        /**
         * An object with functions whose names match the uniforms in the shader program
         * and return values to set those uniforms.
         *
         * @type Object
         *
         * @default undefined
         */
        this.uniformMap = undefined;

        /**
         * The render state.
         *
         * @type Object
         *
         * @default undefined
         *
         * @see Context#createRenderState
         */
        this.renderState = undefined;

        /**
         * The framebuffer to draw to.
         *
         * @type Framebuffer
         *
         * @default undefined
         */
        this.framebuffer = undefined;

        /**
         * Specifies if this command is only to be executed in the frustum closest
         * to the eye containing the bounding volume. Defaults to <code>false</code>.
         *
         * @type Boolean
         *
         * @default false
         */
        this.executeInClosestFrustum = false;

        /**
         * The object who created this command.  This is useful for debugging command
         * execution; it allows you to see who created a command when you only have a
         * reference to the command, and can be used to selectively execute commands
         * with {@link Scene#debugCommandFilter}.
         *
         * @type Object
         *
         * @default undefined
         *
         * @see Scene#debugCommandFilter
         */
        this.owner = owner;

        /**
         * This property is for debugging only; it is not for production use nor is it optimized.
         * <p>
         * Draws the {@link DrawCommand#boundingVolume} for this command, assuming it is a sphere, when the command executes.
         * </p>
         *
         * @type Boolean
         *
         * @default false
         *
         * @see DrawCommand#boundingVolume
         */
        this.debugShowBoundingVolume = false;
    };

    /**
     * Executes the draw command.
     *
     * @memberof DrawCommand
     *
     * @param {Context} context The renderer context in which to draw.
     * @param {PassState} [passState] TBA.
     */
    DrawCommand.prototype.execute = function(context, passState) {
        context.draw(this, passState);
    };

    return DrawCommand;
});