const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTSUFNmG = await PACT.new({from: accounts[4]});
		const addressgL8akR = accounts[4]
		const uinteTrGvmi = BigInt("88")
		const addresstivX8NT = accounts[1]
		const addresspLLzOXd = accounts[1]
//		const boolFZTq1Dq = await PACTSUFNmG.setupRewards.call(addressgL8akR, {from: accounts[5]});
//		const boolJgW3gJl = await PACTSUFNmG.transferFrom.call(addresspLLzOXd, addresstivX8NT, uinteTrGvmi, {from: accounts[3]});
//		const uintMjzazY3 = await PACTSUFNmG.totalSupply.call({from: accounts[2]});
//		const uinttKAbqEu = await PACTSUFNmG.totalSupply.call({from: accounts[1]});

		await expect(PACTSUFNmG.setupRewards.call(addressgL8akR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThfOLxQY = await PACT.new({from: accounts[0]});
		const addressmyvg8TW = accounts[2]
		const addressCdnXJ3V = accounts[3]
//		const boolQrdQVnX = await PACThfOLxQY.setupBasePool.call(addressmyvg8TW, {from: accounts[3]});
//		const boolkRloYIE = await PACThfOLxQY.setupRewards.call(addressCdnXJ3V, {from: accounts[2]});

		await expect(PACThfOLxQY.setupBasePool.call(addressmyvg8TW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkG6CvJ = await PACT.new({from: accounts[2]});
		const addressbff4mx2 = "0x0000000000000000000000000000000000000001"
		const addressSzuXG2V = accounts[0]
		const addressDxmkYFX = accounts[5]
		const uintSZh1qXb = await PACTkG6CvJ.balanceOf.call(addressbff4mx2, {from: accounts[3]});
		const stringX3oO3AR = await PACTkG6CvJ.symbol.call({from: accounts[1]});
		const uintPRyUNSB = await PACTkG6CvJ.balanceOf.call(addressSzuXG2V, {from: accounts[0]});
//		const boolrQXqN3 = await PACTkG6CvJ.setupReserve.call(addressDxmkYFX, {from: accounts[2]});
//		const stringV04P8Q = await PACTkG6CvJ.name.call({from: accounts[1]});

		assert.equal(stringX3oO3AR, "PACT")
		assert.equal(uintPRyUNSB, BigInt("0"))
		assert.equal(uintSZh1qXb, BigInt("0"))
		await expect(PACTkG6CvJ.setupReserve.call(addressDxmkYFX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTErUFFw = await PACT.new({from: accounts[3]});
		const addressDGoVRMf = accounts[1]
		const addressdJKRDXg = accounts[5]
		const addressnPOzjGe = accounts[2]
		const addressSlwOUBo = "0x0000000000000000000000000000000000000001"
		const addressGfcn7mw = accounts[0]
		const uintl51oAtp = BigInt("1243")
		const addressfAdrcZt = accounts[3]
		const addressFcIgTAk = accounts[3]
		const uintbbMkAsp = await PACTErUFFw.balanceOf.call(addressDGoVRMf, {from: "0x0000000000000000000000000000000000000001"});
		const uint6k1jnO = await PACTErUFFw.allowance.call(addressnPOzjGe, addressdJKRDXg, {from: accounts[3]});
//		const boollGyS1oo = await PACTErUFFw.setupBasePool.call(addressSlwOUBo, {from: accounts[2]});
//		const boolocelwcW = await PACTErUFFw.setupReserve.call(addressGfcn7mw, {from: accounts[2]});
//		const boolxR5jgqs = await PACTErUFFw.transferFrom.call(addressFcIgTAk, addressfAdrcZt, uintl51oAtp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint6k1jnO, BigInt("0"))
		assert.equal(uintbbMkAsp, BigInt("0"))
		await expect(PACTErUFFw.setupBasePool.call(addressSlwOUBo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThFT5L8N = await PACT.new({from: accounts[2]});
		const addressq0Aj4z = "0x0000000000000000000000000000000000000001"
		const uintCuyYmTJ = BigInt("1294")
		const addressg24NItb = accounts[0]
		const addressudfcAT9 = accounts[5]
		const addressn3paKrq = accounts[1]
		const stringZsfkbEl = await PACThFT5L8N.name.call({from: accounts[1]});
//		const boolRZqX62o = await PACThFT5L8N.setupTeam.call(addressq0Aj4z, {from: accounts[0]});
//		const stringimHujt6 = await PACThFT5L8N.symbol.call({from: accounts[1]});
//		const boolu3LpGUZ = await PACThFT5L8N.approve.call(addressg24NItb, uintCuyYmTJ, {from: accounts[4]});
//		const boolkt7Hage = await PACThFT5L8N.setupBasePool.call(addressudfcAT9, {from: accounts[2]});
//		const bool5spLkz = await PACThFT5L8N.setupFarming.call(addressn3paKrq, {from: accounts[1]});

		assert.equal(stringZsfkbEl, "P2PB2B community token")
		await expect(PACThFT5L8N.setupTeam.call(addressq0Aj4z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkHwgbkS = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressR1D3ccY = accounts[1]
		const addressILE7Yul = accounts[1]
		const addresspNz5UBm = accounts[0]
		const addressq9WuD6T = accounts[0]
		const uinteAyAqD = BigInt("975")
		const addressMGg41xT = accounts[0]
		const uintsC9eaua = await PACTkHwgbkS.allowance.call(addressILE7Yul, addressR1D3ccY, {from: accounts[4]});
		const uintnOUG59I = await PACTkHwgbkS.allowance.call(addressq9WuD6T, addresspNz5UBm, {from: accounts[2]});
		const uint8AdVVPk = await PACTkHwgbkS.decimals.call({from: accounts[4]});
		const uint8mXShGPv = await PACTkHwgbkS.decimals.call({from: accounts[3]});
		const boolw6n5gNb = await PACTkHwgbkS.approve.call(addressMGg41xT, uinteAyAqD, {from: accounts[5]});
	});

	it('test for PACT', async () => {
		const PACTewFXJSS = await PACT.new({from: accounts[3]});
		const uintdZBB3a = BigInt("168")
		const addressotjxKZV = accounts[2]
		const addressJI30R4H = accounts[5]
		const uintSSxkxfb = BigInt("241")
		const addressKl0IMYw = accounts[0]
		const addresszRWWgAh = accounts[4]
		const addressCAH6kZ = accounts[2]
		const addresssEM4Qlt = accounts[1]
		const stringVNSTLGW = await PACTewFXJSS.name.call({from: accounts[0]});
//		const boolBpgM2w = await PACTewFXJSS.transferFrom.call(addressJI30R4H, addressotjxKZV, uintdZBB3a, {from: accounts[1]});
//		const booldye58Ek = await PACTewFXJSS.transfer.call(addressKl0IMYw, uintSSxkxfb, {from: accounts[5]});
//		const boolbOHXaQ = await PACTewFXJSS.setupFarming.call(addresszRWWgAh, {from: accounts[1]});
//		const boolMZqTO7s = await PACTewFXJSS.setupFarming.call(addressCAH6kZ, {from: accounts[0]});
//		const bool0GDxqb = await PACTewFXJSS.setupReserve.call(addresssEM4Qlt, {from: accounts[5]});

		assert.equal(stringVNSTLGW, "P2PB2B community token")
		await expect(PACTewFXJSS.transferFrom.call(addressJI30R4H, addressotjxKZV, uintdZBB3a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfAPHkGc = await PACT.new({from: accounts[1]});
		const uintnhrCz4V = BigInt("671")
		const addressW5UlTho = accounts[0]
		const stringm8bXYcg = await PACTfAPHkGc.symbol.call({from: accounts[5]});
		const boolNZnJTVo = await PACTfAPHkGc.approve.call(addressW5UlTho, uintnhrCz4V, {from: accounts[0]});

		assert.equal(boolNZnJTVo, true)
		assert.equal(stringm8bXYcg, "PACT")
	});

	it('test for PACT', async () => {
		const PACTa0L8Yd6 = await PACT.new({from: accounts[4]});
		const addressWSjYGhJ = accounts[1]
		const uintJKz35To = BigInt("426")
		const addressPo9WkZX = accounts[4]
		const addressYVtKgeb = accounts[1]
		const addressz7yM1Bd = accounts[2]
		const addressbrmWHAM = accounts[4]
		const address0VQjgU = accounts[5]
		const addressquqNbDX = accounts[4]
		const uintwqs3OGM = await PACTa0L8Yd6.balanceOf.call(addressWSjYGhJ, {from: accounts[4]});
//		const boolTxlXEr = await PACTa0L8Yd6.burn.call(addressPo9WkZX, uintJKz35To, {from: "0x0000000000000000000000000000000000000001"});
//		const uintrUcQsQL = await PACTa0L8Yd6.allowance.call(addressz7yM1Bd, addressYVtKgeb, {from: accounts[0]});
//		const uintjJHFnLu = await PACTa0L8Yd6.balanceOf.call(addressbrmWHAM, {from: accounts[1]});
//		const uint8x2FQNT = await PACTa0L8Yd6.decimals.call({from: accounts[0]});
//		const uintgYkgG6y = await PACTa0L8Yd6.allowance.call(addressquqNbDX, address0VQjgU, {from: accounts[5]});

		assert.equal(uintwqs3OGM, BigInt("0"))
		await expect(PACTa0L8Yd6.burn.call(addressPo9WkZX, uintJKz35To, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkG6CvJ = await PACT.new({from: accounts[2]});
		const addressZCFBdqR = "0x0000000000000000000000000000000000000001"
		const addressyQK8URH = accounts[1]
		const addressEFxksxP = accounts[5]
		const uintSZh1qXb = await PACTkG6CvJ.balanceOf.call(addressZCFBdqR, {from: accounts[3]});
		const uint8synTciM = await PACTkG6CvJ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringX3oO3AR = await PACTkG6CvJ.symbol.call({from: accounts[1]});
		const uintPRyUNSB = await PACTkG6CvJ.balanceOf.call(addressyQK8URH, {from: accounts[0]});
//		const boolrQXqN3 = await PACTkG6CvJ.setupReserve.call(addressEFxksxP, {from: accounts[2]});
//		const stringwsbYEU = await PACTkG6CvJ.symbol.call({from: accounts[1]});
//		const stringV04P8Q = await PACTkG6CvJ.name.call({from: accounts[1]});

		assert.equal(stringX3oO3AR, "PACT")
		assert.equal(uint8synTciM, BigInt("18"))
		assert.equal(uintPRyUNSB, BigInt("0"))
		assert.equal(uintSZh1qXb, BigInt("0"))
		await expect(PACTkG6CvJ.setupReserve.call(addressEFxksxP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfAPHkGc = await PACT.new({from: accounts[1]});
		const uintKQJgfGd = BigInt("278")
		const addresslfbOzyR = accounts[1]
		const uintLb4Fwj = BigInt("1192")
		const addressOXhgDsv = accounts[0]
		const stringm8bXYcg = await PACTfAPHkGc.symbol.call({from: accounts[5]});
		const boolc3fymup = await PACTfAPHkGc.approve.call(addresslfbOzyR, uintKQJgfGd, {from: accounts[1]});
//		const boolP4zmeUk = await PACTfAPHkGc.transfer.call(addressOXhgDsv, uintLb4Fwj, {from: accounts[3]});

		assert.equal(boolc3fymup, true)
		assert.equal(stringm8bXYcg, "PACT")
		await expect(PACTfAPHkGc.transfer.call(addressOXhgDsv, uintLb4Fwj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfAPHkGc = await PACT.new({from: accounts[1]});
		const stringJbjP3Vx = await PACTfAPHkGc.symbol.call({from: accounts[2]});
		const uintpcghsi7 = await PACTfAPHkGc.totalSupply.call({from: accounts[4]});
		const stringAXRtJag = await PACTfAPHkGc.symbol.call({from: accounts[2]});
		const stringm8bXYcg = await PACTfAPHkGc.symbol.call({from: accounts[5]});

		assert.equal(stringAXRtJag, "PACT")
		assert.equal(stringJbjP3Vx, "PACT")
		assert.equal(stringm8bXYcg, "PACT")
		assert.equal(uintpcghsi7, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTfAPHkGc = await PACT.new({from: accounts[1]});
		const addressrslVC7z = accounts[0]
//		const boolh4mSA4G = await PACTfAPHkGc.setupFarming.call(addressrslVC7z, {from: accounts[1]});
//		const stringbhcxuid = await PACTfAPHkGc.symbol.call({from: accounts[2]});
//		const stringm8bXYcg = await PACTfAPHkGc.symbol.call({from: accounts[5]});

		await expect(PACTfAPHkGc.setupFarming.call(addressrslVC7z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})