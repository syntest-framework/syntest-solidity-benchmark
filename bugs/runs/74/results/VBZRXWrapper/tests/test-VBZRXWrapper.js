const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractk32xFDV = await VBZRXWrapper.new({from: accounts[0]});
		const values9pZjn = BigInt("1273")
		const dstJSK9Bl = accounts[1]
		const valueYL8Iy3d = BigInt("1777")
		const spenderIWVDkMg = accounts[5]
		const accountlbvob3T = accounts[0]
		const valueEuWOia = BigInt("32")
		const accountJvGZWtz = "0x0000000000000000000000000000000000000001"
		const null98eIxS = await contractk32xFDV.transfer.call(dstJSK9Bl, values9pZjn, {from: accounts[5]});
		const nullFnocDjE = await contractk32xFDV.approve.call(spenderIWVDkMg, valueYL8Iy3d, {from: accounts[2]});
		const nullJGq4PE5 = await contractk32xFDV.claimable.call(accountlbvob3T, {from: accounts[3]});
		await contractk32xFDV.deposit.call(valueEuWOia, {from: accounts[5]});
		const nullWtk7V2S = await contractk32xFDV.claim.call({from: accounts[3]});
		const nully6ovWOE = await contractk32xFDV.claimable.call(accountJvGZWtz, {from: accounts[0]});

		await expect(contractk32xFDV.transfer.call(dstJSK9Bl, values9pZjn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractLeXH49r = await VBZRXWrapper.new({from: accounts[1]});
		const valueBxsrP2C = BigInt("711")
		const valueGdJ7eOA = BigInt("1610")
		const dstGg2KtXg = accounts[3]
		const srcZIwYyuj = accounts[4]
		const accountqEaVt7v = accounts[5]
		const valueDagSXuF = BigInt("490")
		const nullMuINGeC = await contractLeXH49r.claim.call({from: accounts[4]});
		await contractLeXH49r.withdraw.call(valueBxsrP2C, {from: accounts[0]});
		const nulljmvedvc = await contractLeXH49r.transferFrom.call(srcZIwYyuj, dstGg2KtXg, valueGdJ7eOA, {from: accounts[2]});
		const nullvWk5y13 = await contractLeXH49r.claimable.call(accountqEaVt7v, {from: accounts[5]});
		await contractLeXH49r.withdraw.call(valueDagSXuF, {from: accounts[0]});

		assert.equal(nullMuINGeC, 0)
		await expect(contractLeXH49r.withdraw.call(valueBxsrP2C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractEEJ9fEY = await VBZRXWrapper.new({from: accounts[0]});
		const valuefu0mUDo = BigInt("1580")
		const spender2wy5mT = accounts[4]
		const valueU4GJGUt = BigInt("1065")
		const valueKgbDS6G = BigInt("1573")
		const dstxc4ajsP = accounts[4]
		const srchpeYCQq = "0x0000000000000000000000000000000000000001"
		const nulllLqRysd = await contractEEJ9fEY.approve.call(spender2wy5mT, valuefu0mUDo, {from: accounts[1]});
		await contractEEJ9fEY.withdraw.call(valueU4GJGUt, {from: accounts[5]});
		await contractEEJ9fEY.exit.call({from: accounts[2]});
		await contractEEJ9fEY.exit.call({from: accounts[4]});
		const nullK7OBn7A = await contractEEJ9fEY.transferFrom.call(srchpeYCQq, dstxc4ajsP, valueKgbDS6G, {from: accounts[2]});

		assert.equal(nulllLqRysd, true)
		await expect(contractEEJ9fEY.withdraw.call(valueU4GJGUt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractRgykuUV = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueBWH6LrH = BigInt("871")
		const valueHdroKRS = BigInt("755")
		const dstA8YdRJE = accounts[3]
		const nullvq9WRFn = await contractRgykuUV.claim.call({from: accounts[2]});
		await contractRgykuUV.deposit.call(valueBWH6LrH, {from: accounts[1]});
		const nullylAMOgY = await contractRgykuUV.transfer.call(dstA8YdRJE, valueHdroKRS, {from: accounts[2]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractvUz1ZPa = await VBZRXWrapper.new({from: accounts[5]});
		const accountiYDBqiv = accounts[1]
		const valueyOLApTM = BigInt("265")
		const dsthNT0nAZ = accounts[0]
		const accountoDZpGom = accounts[0]
		const nullkQp9XFC = await contractvUz1ZPa.claimable.call(accountiYDBqiv, {from: "0x0000000000000000000000000000000000000001"});
		const nullcEbyfQA = await contractvUz1ZPa.transfer.call(dsthNT0nAZ, valueyOLApTM, {from: accounts[2]});
		const nulleKojWAP = await contractvUz1ZPa.claimable.call(accountoDZpGom, {from: accounts[1]});

		await expect(contractvUz1ZPa.claimable.call(accountiYDBqiv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracttxZ6kOd = await VBZRXWrapper.new({from: accounts[0]});
		const valueGzfg5Ai = BigInt("356")
		const spenderPRfXfrN = accounts[5]
		const valueXr6wPD = BigInt("437")
		const dstfyuQ471 = accounts[3]
		const srcGtPyc5X = accounts[4]
		const nullU8T4oCU = await contracttxZ6kOd.approve.call(spenderPRfXfrN, valueGzfg5Ai, {from: "0x0000000000000000000000000000000000000001"});
		await contracttxZ6kOd.exit.call({from: accounts[1]});
		const nullXtcnSaH = await contracttxZ6kOd.transferFrom.call(srcGtPyc5X, dstfyuQ471, valueXr6wPD, {from: "0x0000000000000000000000000000000000000001"});
		await contracttxZ6kOd.exit.call({from: accounts[2]});

		assert.equal(nullU8T4oCU, true)
		await expect(contracttxZ6kOd.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractSTD6eOf = await VBZRXWrapper.new({from: accounts[0]});
		const valueLTBEjhS = BigInt("1580")
		const spenderLS4LRyw = accounts[4]
		const valueaUxfeTR = BigInt("1234")
		const valueto4qDUf = BigInt("1043")
		const valueIV5L6vP = BigInt("1573")
		const dstSiYJXr3 = accounts[4]
		const srcsXZkO6t = "0x0000000000000000000000000000000000000001"
		const nullnGkUvw = await contractSTD6eOf.approve.call(spenderLS4LRyw, valueLTBEjhS, {from: accounts[1]});
		await contractSTD6eOf.deposit.call(valueaUxfeTR, {from: accounts[3]});
		await contractSTD6eOf.withdraw.call(valueto4qDUf, {from: accounts[5]});
		await contractSTD6eOf.exit.call({from: accounts[2]});
		await contractSTD6eOf.exit.call({from: accounts[4]});
		const nullHzuwICq = await contractSTD6eOf.transferFrom.call(srcsXZkO6t, dstSiYJXr3, valueIV5L6vP, {from: accounts[2]});

		assert.equal(nullnGkUvw, true)
		await expect(contractSTD6eOf.deposit.call(valueaUxfeTR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})