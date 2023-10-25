const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyJBSo0Md = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRlrkj6h = BigInt("1466")
		const uintFBnqOIz = BigInt("1517")
		const uintqrfk4hf = BigInt("1386")
		const uintKwvVBN7 = BigInt("1230")
		const uintrJMWw2 = BigInt("677")
		const uintK6wZyW = BigInt("379")
		const uintcBMkiCd = await HungryHoodyJBSo0Md.safeMul.call(uintFBnqOIz, uintRlrkj6h, {from: accounts[1]});
		const uintEokeUm = await HungryHoodyJBSo0Md.safeSub.call(uintKwvVBN7, uintqrfk4hf, {from: accounts[5]});
		const uint6Emut6 = await HungryHoodyJBSo0Md.safeSub.call(uintK6wZyW, uintrJMWw2, {from: accounts[0]});
		const uintBXFGuD = await HungryHoodyJBSo0Md.totalSupply.call({from: accounts[0]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyqMcj3Yk = await HungryHoody.new({from: accounts[4]});
		const uintv58PhO = BigInt("1694")
		const uintmzExar2 = BigInt("532")
		const uintTh2U8Hf = BigInt("658")
		const addressY6ySJr7 = accounts[3]
		const addressF6tiJmP = "0x0000000000000000000000000000000000000001"
		const addressyctbcIm = accounts[1]
		const uintrner4H = await HungryHoodyqMcj3Yk.safeMul.call(uintmzExar2, uintv58PhO, {from: accounts[4]});
		const uintr9etiB2 = await HungryHoodyqMcj3Yk.totalSupply.call({from: accounts[1]});
		const boolmp90Keq = await HungryHoodyqMcj3Yk.transfer.call(addressY6ySJr7, uintTh2U8Hf, {from: accounts[0]});
		const uintb26XXlh = await HungryHoodyqMcj3Yk.balanceOf.call(addressF6tiJmP, {from: accounts[0]});
		const uintmIGFcc4 = await HungryHoodyqMcj3Yk.balanceOf.call(addressyctbcIm, {from: accounts[2]});

		assert.equal(uintr9etiB2, BigInt("25000000000000000000"))
		assert.equal(uintrner4H, BigInt("901208"))
		await expect(HungryHoodyqMcj3Yk.transfer.call(addressY6ySJr7, uintTh2U8Hf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyYeMX1Al = await HungryHoody.new({from: accounts[3]});
		const addressdWzT9iI = accounts[2]
		const uintDs10Ply = BigInt("754")
		const addressEEZ6Lgl = accounts[0]
		const uintZBwEKqS = BigInt("1206")
		const uintyF3aGA2 = BigInt("721")
		const uintZMHRMS2 = await HungryHoodyYeMX1Al.balanceOf.call(addressdWzT9iI, {from: accounts[0]});
		const boolNBJKFiY = await HungryHoodyYeMX1Al.approve.call(addressEEZ6Lgl, uintDs10Ply, {from: accounts[2]});
		const uintwpXjkul = await HungryHoodyYeMX1Al.safeSub.call(uintyF3aGA2, uintZBwEKqS, {from: accounts[3]});

		assert.equal(boolNBJKFiY, true)
		assert.equal(uintZMHRMS2, BigInt("0"))
		await expect(HungryHoodyYeMX1Al.safeSub.call(uintyF3aGA2, uintZBwEKqS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyHyEKkLk = await HungryHoody.new({from: accounts[4]});
		const uintYjT8XMl = BigInt("639")
		const uintIcYCc1u = BigInt("656")
		const addressZO6nrAs = accounts[0]
		const addressQ1QbWOF = accounts[1]
		const uintRSTLnfO = await HungryHoodyHyEKkLk.totalSupply.call({from: accounts[0]});
		const uint6DNeva = await HungryHoodyHyEKkLk.safeDiv.call(uintIcYCc1u, uintYjT8XMl, {from: accounts[1]});
		const uintTLV2MR0 = await HungryHoodyHyEKkLk.allowance.call(addressQ1QbWOF, addressZO6nrAs, {from: accounts[1]});

		assert.equal(uint6DNeva, BigInt("1"))
		assert.equal(uintRSTLnfO, BigInt("25000000000000000000"))
		assert.equal(uintTLV2MR0, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyUdXqDG = await HungryHoody.new({from: accounts[4]});
		const uintMnxzQZ = BigInt("292")
		const uintj7rISjK = BigInt("472")
		const uintf5xr0c = BigInt("366")
		const uintln7m8O4 = BigInt("565")
		const addresslPEbhdE = accounts[2]
		const addresslIZGPcD = accounts[4]
		const uintUvV8j59 = BigInt("174")
		const uintf9tOp1R = BigInt("137")
		const uintvKVoAC7 = BigInt("479")
		const uintACXqhvN = BigInt("1055")
		const uintDUvnCPA = BigInt("147")
		const uintE7zGaIG = BigInt("323")
		const uintYqYOQba = await HungryHoodyUdXqDG.safeDiv.call(uintj7rISjK, uintMnxzQZ, {from: accounts[5]});
		const uintnMg4Az = await HungryHoodyUdXqDG.safeAdd.call(uintln7m8O4, uintf5xr0c, {from: accounts[5]});
		const uintZLAoC8h = await HungryHoodyUdXqDG.allowance.call(addresslIZGPcD, addresslPEbhdE, {from: accounts[1]});
		const uinttnwHde1 = await HungryHoodyUdXqDG.safeSub.call(uintf9tOp1R, uintUvV8j59, {from: accounts[1]});
		const uintC0VzxZ6 = await HungryHoodyUdXqDG.safeAdd.call(uintACXqhvN, uintvKVoAC7, {from: accounts[3]});
		const uintAwqJxq = await HungryHoodyUdXqDG.safeMul.call(uintE7zGaIG, uintDUvnCPA, {from: accounts[3]});

		assert.equal(uintYqYOQba, BigInt("1"))
		assert.equal(uintZLAoC8h, BigInt("0"))
		assert.equal(uintnMg4Az, BigInt("931"))
		await expect(HungryHoodyUdXqDG.safeSub.call(uintf9tOp1R, uintUvV8j59, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyo2EoFG1 = await HungryHoody.new({from: accounts[3]});
		const uinteVuZ0Y = BigInt("1112")
		const uintC0r3pU = BigInt("308")
		const uintFJII8Zu = BigInt("1524")
		const uintlBPftkp = BigInt("1530")
		const uintFEWMipy = BigInt("65")
		const addressrA2ubBS = accounts[4]
		const addressWql7RNQ = accounts[0]
		const uintwLqBqqS = await HungryHoodyo2EoFG1.safeDiv.call(uintC0r3pU, uinteVuZ0Y, {from: accounts[0]});
		const uintxkqkE3P = await HungryHoodyo2EoFG1.safeSub.call(uintlBPftkp, uintFJII8Zu, {from: accounts[4]});
		const uintjdBLm7M = await HungryHoodyo2EoFG1.totalSupply.call({from: accounts[5]});
		const boolUYeTGpa = await HungryHoodyo2EoFG1.transferFrom.call(addressWql7RNQ, addressrA2ubBS, uintFEWMipy, {from: accounts[3]});

		assert.equal(uintjdBLm7M, BigInt("25000000000000000000"))
		assert.equal(uintwLqBqqS, BigInt("0"))
		assert.equal(uintxkqkE3P, BigInt("6"))
		await expect(HungryHoodyo2EoFG1.transferFrom.call(addressWql7RNQ, addressrA2ubBS, uintFEWMipy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})