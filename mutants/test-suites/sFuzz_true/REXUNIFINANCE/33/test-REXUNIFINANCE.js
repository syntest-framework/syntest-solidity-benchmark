const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEgIOxOU = await REXUNIFINANCE.new({from: accounts[0]});
		const addresssvF9weg = accounts[4]
		const uintd094zVK = BigInt("444")
		const addressvR03w05 = accounts[0]
		const uintLvlFbKg = BigInt("531")
		const addressGpnxJnz = accounts[1]
		const addressWDjxYN = accounts[3]
		const uintwcbtOMZ = BigInt("915")
		const addressHh5ObhL = accounts[1]
		const uint256egzXUUp = await REXUNIFINANCEgIOxOU.balanceOf.call(addresssvF9weg, {from: accounts[2]});
//		const boolv2Bm47H = await REXUNIFINANCEgIOxOU.transfer.call(addressvR03w05, uintd094zVK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTr9Wmz = await REXUNIFINANCEgIOxOU.increaseApproval.call(addressGpnxJnz, uintLvlFbKg, {from: accounts[3]});
//		const addressUpq8t5c = await REXUNIFINANCEgIOxOU.transferOwnership.call(addressWDjxYN, {from: accounts[4]});
//		const boolmaZKZY3 = await REXUNIFINANCEgIOxOU.decreaseApproval.call(addressHh5ObhL, uintwcbtOMZ, {from: accounts[4]});

		assert.equal(uint256egzXUUp, BigInt("0"))
		await expect(REXUNIFINANCEgIOxOU.transfer.call(addressvR03w05, uintd094zVK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEheMZ4dW = await REXUNIFINANCE.new({from: accounts[1]});
		const uintUBVbHV0 = BigInt("803")
		const addresspH6SHb = accounts[2]
		const uintWjlkpxH = BigInt("686")
		const addressilqz5DV = accounts[3]
		const uintoPPmcV8 = BigInt("1366")
		const addressui8tx4l = accounts[4]
		const boolxDLWBXq = await REXUNIFINANCEheMZ4dW.increaseApproval.call(addresspH6SHb, uintUBVbHV0, {from: accounts[3]});
//		const boolF27lVsr = await REXUNIFINANCEheMZ4dW.increaseApproval.call(addressilqz5DV, uintWjlkpxH, {from: accounts[3]});
//		const boolk9nBi1Q = await REXUNIFINANCEheMZ4dW.decreaseApproval.call(addressui8tx4l, uintoPPmcV8, {from: accounts[0]});

		assert.equal(boolxDLWBXq, true)
		await expect(REXUNIFINANCEheMZ4dW.increaseApproval.call(addressilqz5DV, uintWjlkpxH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEP6xWgEX = await REXUNIFINANCE.new({from: accounts[5]});
		const uintRrYKe0m = BigInt("1649")
		const addressYAJney4 = accounts[0]
		const addressfYLoR9 = accounts[4]
		const addressBvHGYSw = accounts[4]
		const addresscTIVlKP = accounts[2]
		const boolHf05MXS = await REXUNIFINANCEP6xWgEX.decreaseApproval.call(addressYAJney4, uintRrYKe0m, {from: accounts[4]});
		const uint256OYlrUiV = await REXUNIFINANCEP6xWgEX.allowance.call(addressBvHGYSw, addressfYLoR9, {from: accounts[5]});
		const uint256MrBeLU1 = await REXUNIFINANCEP6xWgEX.transferableTokens.call(addresscTIVlKP, {from: accounts[4]});

		assert.equal(boolHf05MXS, true)
		assert.equal(uint256MrBeLU1, BigInt("0"))
		assert.equal(uint256OYlrUiV, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEbHBCEJI = await REXUNIFINANCE.new({from: accounts[5]});
		const addressrbvJ0fZ = accounts[2]
		const uintVk00VI = BigInt("1850")
		const addressyckr63P = accounts[0]
		const addressUJbcXyd = accounts[2]
		const uint256uFRVE0D = await REXUNIFINANCEbHBCEJI.transferableTokens.call(addressrbvJ0fZ, {from: accounts[1]});
//		const boolArqnacv = await REXUNIFINANCEbHBCEJI.transferFrom.call(addressUJbcXyd, addressyckr63P, uintVk00VI, {from: accounts[2]});

		assert.equal(uint256uFRVE0D, BigInt("0"))
		await expect(REXUNIFINANCEbHBCEJI.transferFrom.call(addressUJbcXyd, addressyckr63P, uintVk00VI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEXsUyISk = await REXUNIFINANCE.new({from: accounts[2]});
		const uintBl7Hu7J = BigInt("1328")
		const addressoYAGF7t = "0x0000000000000000000000000000000000000001"
		const addressePEbI2l = accounts[5]
		const addressiePodGv = "0x0000000000000000000000000000000000000001"
		const uintFfV0845 = BigInt("1049")
		const addressVVZxHbR = accounts[0]
		const boolzSwX3tU = await REXUNIFINANCEXsUyISk.approve.call(addressoYAGF7t, uintBl7Hu7J, {from: accounts[1]});
		const uint256mZpr0v6 = await REXUNIFINANCEXsUyISk.allowance.call(addressiePodGv, addressePEbI2l, {from: accounts[2]});
		const boolQYCVMyv = await REXUNIFINANCEXsUyISk.approve.call(addressVVZxHbR, uintFfV0845, {from: accounts[3]});

		assert.equal(boolQYCVMyv, true)
		assert.equal(boolzSwX3tU, true)
		assert.equal(uint256mZpr0v6, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEABbJWer = await REXUNIFINANCE.new({from: accounts[3]});
		const uintp6ba7bl = BigInt("104")
		const addressfiouuW4 = "0x0000000000000000000000000000000000000001"
		const addresse8QcOVI = "0x0000000000000000000000000000000000000001"
		const addresscYnBzgX = accounts[1]
		const boolv5PNPVa = await REXUNIFINANCEABbJWer.approve.call(addressfiouuW4, uintp6ba7bl, {from: accounts[5]});
//		const addressk4p8lr = await REXUNIFINANCEABbJWer.transferOwnership.call(addresse8QcOVI, {from: accounts[2]});
//		const addressqeTf3bh = await REXUNIFINANCEABbJWer.transferOwnership.call(addresscYnBzgX, {from: accounts[1]});

		assert.equal(boolv5PNPVa, true)
		await expect(REXUNIFINANCEABbJWer.transferOwnership.call(addresse8QcOVI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCENkcVZLE = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKe77Lu2 = accounts[3]
		const addressolMLKYw = accounts[1]
		const addressR2BAIbM = accounts[0]
		const uint256Lv4MEqz = await REXUNIFINANCENkcVZLE.transferableTokens.call(addressKe77Lu2, {from: accounts[0]});
		const uint256Dr5Br61 = await REXUNIFINANCENkcVZLE.balanceOf.call(addressolMLKYw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nyLOsIJ = await REXUNIFINANCENkcVZLE.balanceOf.call(addressR2BAIbM, {from: accounts[0]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEdrkjgKP = await REXUNIFINANCE.new({from: accounts[3]});
		const addressULQEeJ2 = accounts[3]
		const addressb9xxvMk = accounts[5]
		const addressNAfwz5t = accounts[2]
		const uintkFzb0Rz = BigInt("1270")
		const addressCT1EUS = accounts[4]
		const uintDoMS1ZM = BigInt("1338")
		const addressxuxLPXC = accounts[0]
		const address2MfKH2 = accounts[5]
//		const addressMfIzzgH = await REXUNIFINANCEdrkjgKP.transferOwnership.call(addressULQEeJ2, {from: accounts[3]});
//		const addresslDniiH2 = await REXUNIFINANCEdrkjgKP.transferOwnership.call(addressb9xxvMk, {from: accounts[0]});
//		const uint256yTgyii = await REXUNIFINANCEdrkjgKP.balanceOf.call(addressNAfwz5t, {from: accounts[0]});
//		const boolc9Ushso = await REXUNIFINANCEdrkjgKP.approve.call(addressCT1EUS, uintkFzb0Rz, {from: accounts[0]});
//		const boolBsj58Lb = await REXUNIFINANCEdrkjgKP.transferFrom.call(address2MfKH2, addressxuxLPXC, uintDoMS1ZM, {from: accounts[2]});

		await expect(REXUNIFINANCEdrkjgKP.transferOwnership.call(addressULQEeJ2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEdrkjgKP = await REXUNIFINANCE.new({from: accounts[3]});
		const addresssGaegns = accounts[4]
		const uintNFJqoxQ = BigInt("1935")
		const addressEOwIpRK = accounts[4]
		const uintCL11wUR = BigInt("1757")
		const addressOwM25lF = accounts[3]
		const addressYCEy9O3 = accounts[5]
		const addressM4Ovobd = accounts[2]
		const uintGeSlp0m = BigInt("1270")
		const addressqS23Xbt = accounts[4]
		const addressMfIzzgH = await REXUNIFINANCEdrkjgKP.transferOwnership.call(addresssGaegns, {from: accounts[3]});
//		const boolcxzbEJc = await REXUNIFINANCEdrkjgKP.transfer.call(addressEOwIpRK, uintNFJqoxQ, {from: accounts[0]});
//		const boolO7HS1xp = await REXUNIFINANCEdrkjgKP.transfer.call(addressOwM25lF, uintCL11wUR, {from: accounts[3]});
//		const addresslDniiH2 = await REXUNIFINANCEdrkjgKP.transferOwnership.call(addressYCEy9O3, {from: accounts[0]});
//		const uint256yTgyii = await REXUNIFINANCEdrkjgKP.balanceOf.call(addressM4Ovobd, {from: accounts[0]});
//		const boolc9Ushso = await REXUNIFINANCEdrkjgKP.approve.call(addressqS23Xbt, uintGeSlp0m, {from: accounts[0]});

		await expect(REXUNIFINANCEdrkjgKP.transfer.call(addressEOwIpRK, uintNFJqoxQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})