const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEiVhhmWv = await REXUNIFINANCE.new({from: accounts[2]});
		const addressfE1181e = accounts[4]
		const addressqfTxUEK = accounts[4]
		const uintDDKeqMe = BigInt("24")
		const addressdlWXnr = accounts[0]
		const addresssuzv4Sa = accounts[0]
		const uintPVnCgc = BigInt("732")
		const addressiGxkhQk = accounts[1]
		const uintobHlZNR = BigInt("1678")
		const addresslj7moKt = accounts[4]
		const uint256fn8h4hL = await REXUNIFINANCEiVhhmWv.allowance.call(addressqfTxUEK, addressfE1181e, {from: accounts[3]});
//		const booloSSfhV2 = await REXUNIFINANCEiVhhmWv.transferFrom.call(addresssuzv4Sa, addressdlWXnr, uintDDKeqMe, {from: accounts[2]});
//		const boolgrjNbjO = await REXUNIFINANCEiVhhmWv.approve.call(addressiGxkhQk, uintPVnCgc, {from: accounts[0]});
//		const boolb2dSs7E = await REXUNIFINANCEiVhhmWv.approve.call(addresslj7moKt, uintobHlZNR, {from: accounts[3]});

		assert.equal(uint256fn8h4hL, BigInt("0"))
		await expect(REXUNIFINANCEiVhhmWv.transferFrom.call(addresssuzv4Sa, addressdlWXnr, uintDDKeqMe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEb4ZjpxY = await REXUNIFINANCE.new({from: accounts[1]});
		const uintP5IGUh = BigInt("517")
		const addressEbY9atI = accounts[0]
		const addressQlFaOry = accounts[0]
		const addresskKYjqE4 = "0x0000000000000000000000000000000000000001"
		const addressdhS2qS = accounts[4]
		const uintU31kAT = BigInt("910")
		const addressdesRv1w = accounts[3]
		const addressRbNtm0b = accounts[3]
		const boolhZulI0 = await REXUNIFINANCEb4ZjpxY.approve.call(addressEbY9atI, uintP5IGUh, {from: accounts[2]});
//		const addressyI8kV2o = await REXUNIFINANCEb4ZjpxY.transferOwnership.call(addressQlFaOry, {from: accounts[5]});
//		const uint256g0Q1Rx = await REXUNIFINANCEb4ZjpxY.allowance.call(addressdhS2qS, addresskKYjqE4, {from: accounts[2]});
//		const boolJXwSSbg = await REXUNIFINANCEb4ZjpxY.transferFrom.call(addressRbNtm0b, addressdesRv1w, uintU31kAT, {from: accounts[4]});

		assert.equal(boolhZulI0, true)
		await expect(REXUNIFINANCEb4ZjpxY.transferOwnership.call(addressQlFaOry, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCErrh5Cg7 = await REXUNIFINANCE.new({from: accounts[1]});
		const uinteeZ7HqC = BigInt("330")
		const addressERCtTA4 = accounts[0]
		const uintgr5fEA9 = BigInt("1574")
		const addressCotuM0J = accounts[3]
		const uintdmlL9Xo = BigInt("762")
		const addressMHUXOh3 = accounts[5]
		const uintP3wvJq = BigInt("1011")
		const addresstwuCMPt = accounts[0]
		const addressjYKL92B = accounts[2]
		const addressEPnhf51 = accounts[4]
		const boolf1Bga3 = await REXUNIFINANCErrh5Cg7.approve.call(addressERCtTA4, uinteeZ7HqC, {from: accounts[4]});
//		const boolMz8cizf = await REXUNIFINANCErrh5Cg7.transfer.call(addressCotuM0J, uintgr5fEA9, {from: accounts[2]});
//		const boolWvzqANw = await REXUNIFINANCErrh5Cg7.approve.call(addressMHUXOh3, uintdmlL9Xo, {from: accounts[0]});
//		const boolYkmNeXu = await REXUNIFINANCErrh5Cg7.increaseApproval.call(addresstwuCMPt, uintP3wvJq, {from: accounts[1]});
//		const uint256I9WrHaG = await REXUNIFINANCErrh5Cg7.balanceOf.call(addressjYKL92B, {from: accounts[1]});
//		const addressX0wg6Va = await REXUNIFINANCErrh5Cg7.transferOwnership.call(addressEPnhf51, {from: accounts[5]});

		assert.equal(boolf1Bga3, true)
		await expect(REXUNIFINANCErrh5Cg7.transfer.call(addressCotuM0J, uintgr5fEA9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEIfYF4Y = await REXUNIFINANCE.new({from: accounts[2]});
		const uintAns15i = BigInt("1997")
		const addressRZrG6GH = accounts[2]
		const addressL9lwGz3 = accounts[2]
		const addressf1gC8GX = accounts[1]
		const uintAQxRw0r = BigInt("1427")
		const addressUAZAQCr = accounts[0]
		const addressVsEKGl = accounts[3]
		const uintBpNsvUY = BigInt("1599")
		const address2g0DD8 = accounts[0]
		const addressTZS0DUq = accounts[3]
//		const boolkWupoyT = await REXUNIFINANCEIfYF4Y.decreaseApproval.call(addressRZrG6GH, uintAns15i, {from: accounts[2]});
//		const uint256IwWslLw = await REXUNIFINANCEIfYF4Y.allowance.call(addressf1gC8GX, addressL9lwGz3, {from: accounts[3]});
//		const booljvyscu = await REXUNIFINANCEIfYF4Y.transferFrom.call(addressVsEKGl, addressUAZAQCr, uintAQxRw0r, {from: accounts[2]});
//		const booljuQZLVE = await REXUNIFINANCEIfYF4Y.approve.call(address2g0DD8, uintBpNsvUY, {from: accounts[1]});
//		const uint256822fyd = await REXUNIFINANCEIfYF4Y.balanceOf.call(addressTZS0DUq, {from: accounts[0]});

		await expect(REXUNIFINANCEIfYF4Y.decreaseApproval.call(addressRZrG6GH, uintAns15i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCExt3oYT0 = await REXUNIFINANCE.new({from: accounts[2]});
		const uintyEJaNgU = BigInt("710")
		const addressvuIEVyg = accounts[4]
		const uintTqhU0kP = BigInt("836")
		const addressN8RBsDe = accounts[5]
		const uintAQvu8d0 = BigInt("959")
		const addresslyq0u8 = accounts[2]
		const addressQWPPM2O = accounts[0]
		const uintdlrRGAL = BigInt("807")
		const addressvimdEZY = accounts[1]
		const uintPEPKhh = BigInt("203")
		const addressIVddD3e = accounts[5]
		const addressqv2ucXW = accounts[1]
		const boolUmSJnMX = await REXUNIFINANCExt3oYT0.decreaseApproval.call(addressvuIEVyg, uintyEJaNgU, {from: "0x0000000000000000000000000000000000000001"});
		const boolTrXh86h = await REXUNIFINANCExt3oYT0.increaseApproval.call(addressN8RBsDe, uintTqhU0kP, {from: accounts[1]});
//		const boolKr5llN0 = await REXUNIFINANCExt3oYT0.transfer.call(addresslyq0u8, uintAQvu8d0, {from: accounts[2]});
//		const addressvmr9YWz = await REXUNIFINANCExt3oYT0.transferOwnership.call(addressQWPPM2O, {from: accounts[0]});
//		const boolCPsRFd = await REXUNIFINANCExt3oYT0.decreaseApproval.call(addressvimdEZY, uintdlrRGAL, {from: accounts[0]});
//		const boolrIugLzN = await REXUNIFINANCExt3oYT0.transferFrom.call(addressqv2ucXW, addressIVddD3e, uintPEPKhh, {from: accounts[2]});

		assert.equal(boolTrXh86h, true)
		assert.equal(boolUmSJnMX, true)
		await expect(REXUNIFINANCExt3oYT0.transfer.call(addresslyq0u8, uintAQvu8d0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCENzkz1fq = await REXUNIFINANCE.new({from: accounts[4]});
		const uintrZTeaVM = BigInt("961")
		const addressdmcdQDH = accounts[0]
		const addressQhei3X8 = accounts[0]
		const uintwnWUYR = BigInt("1779")
		const addressBfBwvm0 = accounts[0]
		const addressCbH8Hge = accounts[4]
		const addressyGhi0yk = accounts[0]
		const boolOOQgYl = await REXUNIFINANCENzkz1fq.decreaseApproval.call(addressdmcdQDH, uintrZTeaVM, {from: accounts[1]});
		const uint256E0PNOy = await REXUNIFINANCENzkz1fq.balanceOf.call(addressQhei3X8, {from: accounts[2]});
		const boolm9AryXr = await REXUNIFINANCENzkz1fq.decreaseApproval.call(addressBfBwvm0, uintwnWUYR, {from: accounts[4]});
		const uint256LfLXAkX = await REXUNIFINANCENzkz1fq.allowance.call(addressyGhi0yk, addressCbH8Hge, {from: accounts[5]});

		assert.equal(boolOOQgYl, true)
		assert.equal(boolm9AryXr, true)
		assert.equal(uint256E0PNOy, BigInt("0"))
		assert.equal(uint256LfLXAkX, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCENzkz1fq = await REXUNIFINANCE.new({from: accounts[4]});
		const uintZ0Upb9W = BigInt("1432")
		const addressa6VJ6Vb = accounts[5]
		const addresshl6Wz8A = "0x0000000000000000000000000000000000000001"
		const uintg9OQKYm = BigInt("961")
		const addresswcv57Gu = accounts[1]
//		const boolx4Zy4LE = await REXUNIFINANCENzkz1fq.transferFrom.call(addresshl6Wz8A, addressa6VJ6Vb, uintZ0Upb9W, {from: accounts[5]});
//		const boolOOQgYl = await REXUNIFINANCENzkz1fq.decreaseApproval.call(addresswcv57Gu, uintg9OQKYm, {from: accounts[1]});

		await expect(REXUNIFINANCENzkz1fq.transferFrom.call(addresshl6Wz8A, addressa6VJ6Vb, uintZ0Upb9W, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEqA5aqtC = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEBSl6nP = accounts[0]
		const uintt9dlyal = BigInt("1354")
		const addressUnJO2Yg = accounts[0]
		const uintvOlDVZQ = BigInt("1323")
		const addressgV8old7 = accounts[5]
		const uint256Z8SWBOq = await REXUNIFINANCEqA5aqtC.transferableTokens.call(addressEBSl6nP, {from: accounts[3]});
		const bools0meoOA = await REXUNIFINANCEqA5aqtC.decreaseApproval.call(addressUnJO2Yg, uintt9dlyal, {from: accounts[0]});
		const boolcnrDvWo = await REXUNIFINANCEqA5aqtC.approve.call(addressgV8old7, uintvOlDVZQ, {from: accounts[0]});
	});
})