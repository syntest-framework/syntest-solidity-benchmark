const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressho864jC = accounts[1]
		const addressDDmiy0s = accounts[2]
		const QuickTokenvoguwEW = await QuickToken.new(addressho864jC, addressDDmiy0s, {from: accounts[4]});
		const addressK7l3RbA = accounts[1]
		const uintDv5V1AL = BigInt("898")
		const addressNDAYgbU = accounts[4]
		const uintjZu3uxR = BigInt("542")
		const addressIXfR33u = accounts[2]
		const addressyZXY0tR = accounts[2]
		const uintCOqIUYg = BigInt("863")
		const addressjfvz9HM = accounts[4]
		const uintkQzckti = BigInt("1938")
		const addressIwglL1E = accounts[1]
//		const addresshjF0va8 = await QuickTokenvoguwEW.setMinter.call(addressK7l3RbA, {from: accounts[3]});
//		const boolAHwn7W = await QuickTokenvoguwEW.approve.call(addressNDAYgbU, uintDv5V1AL, {from: accounts[2]});
//		const boolJyRkGrw = await QuickTokenvoguwEW.transfer.call(addressIXfR33u, uintjZu3uxR, {from: accounts[5]});
//		const uintsLNoDln = await QuickTokenvoguwEW.balanceOf.call(addressyZXY0tR, {from: accounts[5]});
//		const addressiduhZdD = await QuickTokenvoguwEW.mint.call(addressjfvz9HM, uintCOqIUYg, {from: accounts[1]});
//		const boolzLgmfXU = await QuickTokenvoguwEW.approve.call(addressIwglL1E, uintkQzckti, {from: accounts[4]});

		await expect(QuickTokenvoguwEW.setMinter.call(addressK7l3RbA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresswlW0gK0 = accounts[2]
		const addressFLWHWvi = accounts[5]
		const QuickTokenNl5zxlW = await QuickToken.new(addresswlW0gK0, addressFLWHWvi, {from: accounts[2]});
		const uintnRX4QEX = BigInt("1869")
		const addressSHRdeF = accounts[3]
		const uintPKZjfcP = BigInt("399")
		const address4zVGjH = accounts[0]
		const uintlSGfksM = BigInt("1356")
		const addressiMVHlzy = accounts[3]
		const uintWNdA7TG = BigInt("143")
		const addressg5p278n = accounts[1]
		const addresso8OLv9s = accounts[2]
		const addressQqMiAey = accounts[3]
		const uintsn8Osaz = BigInt("1159")
		const addressP6gbmzP = accounts[2]
		const boolq7fli9 = await QuickTokenNl5zxlW.approve.call(addressSHRdeF, uintnRX4QEX, {from: "0x0000000000000000000000000000000000000001"});
		const boolj4hpta = await QuickTokenNl5zxlW.approve.call(address4zVGjH, uintPKZjfcP, {from: accounts[3]});
//		const addressGMp1fIX = await QuickTokenNl5zxlW.mint.call(addressiMVHlzy, uintlSGfksM, {from: accounts[0]});
//		const booluUReZs = await QuickTokenNl5zxlW.transfer.call(addressg5p278n, uintWNdA7TG, {from: accounts[5]});
//		const uintjBppkzj = await QuickTokenNl5zxlW.allowance.call(addressQqMiAey, addresso8OLv9s, {from: accounts[3]});
//		const addressXbZjdPW = await QuickTokenNl5zxlW.mint.call(addressP6gbmzP, uintsn8Osaz, {from: accounts[2]});

		assert.equal(boolj4hpta, true)
		assert.equal(boolq7fli9, true)
		await expect(QuickTokenNl5zxlW.mint.call(addressiMVHlzy, uintlSGfksM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressAd2vPsG = accounts[2]
		const addressFPyx4uJ = accounts[3]
		const QuickTokenL0Uti7A = await QuickToken.new(addressAd2vPsG, addressFPyx4uJ, {from: accounts[5]});
		const uintYOUKwUb = BigInt("669")
		const addressK9Der8x = accounts[1]
		const addressYLhFQLh = "0x0000000000000000000000000000000000000001"
		const addressR464Z4p = accounts[3]
		const uintQIFz7I = BigInt("1008")
		const addressNdBB8YF = accounts[3]
		const addressev2PApv = accounts[3]
		const boolwMrdkR = await QuickTokenL0Uti7A.approve.call(addressK9Der8x, uintYOUKwUb, {from: accounts[4]});
		const uintC5LUcO2 = await QuickTokenL0Uti7A.allowance.call(addressR464Z4p, addressYLhFQLh, {from: accounts[5]});
		const boolaTy43vj = await QuickTokenL0Uti7A.approve.call(addressNdBB8YF, uintQIFz7I, {from: accounts[0]});
		const uintQ15SKo = await QuickTokenL0Uti7A.balanceOf.call(addressev2PApv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaTy43vj, true)
		assert.equal(boolwMrdkR, true)
		assert.equal(uintC5LUcO2, BigInt("0"))
		assert.equal(uintQ15SKo, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresscIUr4cH = accounts[1]
		const addressqjPriSP = accounts[4]
		const QuickTokenGJrXrmB = await QuickToken.new(addresscIUr4cH, addressqjPriSP, {from: accounts[5]});
		const addressJnZpKP5 = accounts[0]
		const addressIhJyVn9 = accounts[0]
		const uinty2zcrDA = BigInt("1349")
		const addressZMAmuU = accounts[0]
		const addressHrSHMgZ = accounts[1]
		const addressdlQ4u7s = accounts[4]
		const addressOqWUphI = accounts[1]
		const addressmk1Gk5t = accounts[0]
		const addressrnYzgQ6 = accounts[0]
		const uintKm8p3cY = BigInt("1163")
		const addressl7KTnOC = "0x0000000000000000000000000000000000000001"
		const addresstH0o6tV = accounts[5]
		const uintTpYZ6Rj = await QuickTokenGJrXrmB.allowance.call(addressIhJyVn9, addressJnZpKP5, {from: accounts[4]});
//		const boolOT5jrF6 = await QuickTokenGJrXrmB.transferFrom.call(addressHrSHMgZ, addressZMAmuU, uinty2zcrDA, {from: accounts[2]});
//		const uintqHEe2yl = await QuickTokenGJrXrmB.allowance.call(addressOqWUphI, addressdlQ4u7s, {from: accounts[1]});
//		const uintQuLiA4 = await QuickTokenGJrXrmB.allowance.call(addressrnYzgQ6, addressmk1Gk5t, {from: accounts[2]});
//		const boolFdAjasT = await QuickTokenGJrXrmB.transferFrom.call(addresstH0o6tV, addressl7KTnOC, uintKm8p3cY, {from: accounts[0]});

		assert.equal(uintTpYZ6Rj, BigInt("0"))
		await expect(QuickTokenGJrXrmB.transferFrom.call(addressHrSHMgZ, addressZMAmuU, uinty2zcrDA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressJNGgUE7 = accounts[5]
		const addressBHi9YcH = accounts[0]
		const QuickTokenvmB3Rr4 = await QuickToken.new(addressJNGgUE7, addressBHi9YcH, {from: accounts[2]});
		const uintiwqrxnK = BigInt("1311")
		const addressa7YoAaY = accounts[0]
		const addressAShIjE3 = accounts[1]
		const addressGiRYAoe = accounts[2]
//		const bool5WiSUa = await QuickTokenvmB3Rr4.transfer.call(addressa7YoAaY, uintiwqrxnK, {from: accounts[1]});
//		const addressg16oVS0 = await QuickTokenvmB3Rr4.setMinter.call(addressAShIjE3, {from: accounts[5]});
//		const uintwldvWEr = await QuickTokenvmB3Rr4.balanceOf.call(addressGiRYAoe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(QuickTokenvmB3Rr4.transfer.call(addressa7YoAaY, uintiwqrxnK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressooXffvC = accounts[0]
		const addressIjAA1Qt = accounts[3]
		const QuickTokencFds9x3 = await QuickToken.new(addressooXffvC, addressIjAA1Qt, {from: accounts[4]});
		const addressQuKcxiE = accounts[5]
		const addressck1LT3c = accounts[4]
		const uintJt517b3 = BigInt("43")
		const addressXfQBC8v = accounts[1]
		const uintPx8jueW = BigInt("1772")
		const addresskH6WSP2 = accounts[0]
		const uintXInQl8 = await QuickTokencFds9x3.allowance.call(addressck1LT3c, addressQuKcxiE, {from: accounts[3]});
		const boolmKZKhs = await QuickTokencFds9x3.transfer.call(addressXfQBC8v, uintJt517b3, {from: accounts[0]});
//		const addressjQGSMzB = await QuickTokencFds9x3.mint.call(addresskH6WSP2, uintPx8jueW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolmKZKhs, true)
		assert.equal(uintXInQl8, BigInt("0"))
		await expect(QuickTokencFds9x3.mint.call(addresskH6WSP2, uintPx8jueW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressWRr8aQx = accounts[0]
		const addressEbg3jmD = accounts[3]
		const QuickTokencFds9x3 = await QuickToken.new(addressWRr8aQx, addressEbg3jmD, {from: accounts[4]});
		const uintbXvyU9E = BigInt("599")
		const addressWvnygRe = "0x0000000000000000000000000000000000000001"
		const addresscvhRXG5 = accounts[5]
		const addresso75lDyf = accounts[4]
		const uintyOAroBO = BigInt("1758")
		const addressuoHPGQ3 = accounts[1]
		const uintlE3b0Sy = BigInt("175")
		const address4RlKzL = accounts[0]
		const addressl6DUiY = accounts[0]
		const uintbqrnodq = BigInt("938")
		const addresseHQY3Ky = accounts[1]
		const uintyRFZoks = BigInt("899")
		const addressH4AhZwh = accounts[1]
		const addressni6izO5 = accounts[1]
		const addressuK1KZ4G = await QuickTokencFds9x3.mint.call(addressWvnygRe, uintbXvyU9E, {from: accounts[3]});
		const uintXInQl8 = await QuickTokencFds9x3.allowance.call(addresso75lDyf, addresscvhRXG5, {from: accounts[3]});
//		const addressjQGSMzB = await QuickTokencFds9x3.mint.call(addressuoHPGQ3, uintyOAroBO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMS40wVj = await QuickTokencFds9x3.transferFrom.call(addressl6DUiY, address4RlKzL, uintlE3b0Sy, {from: accounts[0]});
//		const addressJR9tzbD = await QuickTokencFds9x3.mint.call(addresseHQY3Ky, uintbqrnodq, {from: accounts[2]});
//		const boolJHS6MbR = await QuickTokencFds9x3.transferFrom.call(addressni6izO5, addressH4AhZwh, uintyRFZoks, {from: accounts[5]});

		assert.equal(uintXInQl8, BigInt("0"))
		await expect(QuickTokencFds9x3.mint.call(addressuoHPGQ3, uintyOAroBO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressfuuSbr2 = accounts[3]
		const addressWKwf449 = accounts[4]
		const QuickTokenScKsiOo = await QuickToken.new(addressfuuSbr2, addressWKwf449, {from: "0x0000000000000000000000000000000000000001"});
		const uintOliRktj = BigInt("437")
		const addressTXLbOwq = accounts[0]
		const addressul2JcfI = accounts[2]
		const uints5TpZXn = BigInt("967")
		const address6aebRc = accounts[1]
		const uintblcul5z = BigInt("293")
		const addressapM9VLV = accounts[5]
		const boolGLI5FA8 = await QuickTokenScKsiOo.transferFrom.call(addressul2JcfI, addressTXLbOwq, uintOliRktj, {from: accounts[5]});
		const addresskDcnpbH = await QuickTokenScKsiOo.mint.call(address6aebRc, uints5TpZXn, {from: accounts[4]});
		const boolRCQ8Uqh = await QuickTokenScKsiOo.transfer.call(addressapM9VLV, uintblcul5z, {from: accounts[0]});
	});
})