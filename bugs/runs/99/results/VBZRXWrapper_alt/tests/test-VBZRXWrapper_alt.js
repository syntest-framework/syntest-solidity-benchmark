const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractQEQq8Z = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valuevhAPD7t = BigInt("1405")
		const valueGWyDQx7 = BigInt("1991")
		const valuenaZrWXb = BigInt("1701")
		const dstFkvmRA = accounts[2]
		await contractQEQq8Z.deposit.call(valuevhAPD7t, {from: accounts[5]});
		await contractQEQq8Z.withdraw.call(valueGWyDQx7, {from: accounts[4]});
		const nulldAXxDFW = await contractQEQq8Z.claim.call({from: accounts[4]});
		const nullIncIduX = await contractQEQq8Z.transfer.call(dstFkvmRA, valuenaZrWXb, {from: accounts[3]});

		await expect(contractQEQq8Z.deposit.call(valuevhAPD7t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractbCIzYj = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueWJv02Ew = BigInt("608")
		const dstGPzz2D6 = accounts[0]
		const valuec8oKc8q = BigInt("842")
		const toggleDRqULSm = true
		const addrOfFfIt = accounts[2]
		const valueidafNzs = BigInt("1380")
		const nullZ17jiUO = await contractbCIzYj.claim.call({from: accounts[1]});
		const nullv7jzYMT = await contractbCIzYj.transfer.call(dstGPzz2D6, valueWJv02Ew, {from: accounts[4]});
		await contractbCIzYj.deposit.call(valuec8oKc8q, {from: accounts[4]});
		const nullZ5bRE9k = await contractbCIzYj.claim.call({from: accounts[0]});
		await contractbCIzYj.setBridge.call(addrOfFfIt, toggleDRqULSm, {from: accounts[0]});
		await contractbCIzYj.deposit.call(valueidafNzs, {from: accounts[3]});

		assert.equal(nullZ17jiUO, 0)
		await expect(contractbCIzYj.transfer.call(dstGPzz2D6, valueWJv02Ew, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractXDVhqor = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueqEdCz9B = BigInt("1059")
		const spenderOd3jJko = accounts[4]
		const valuePA75l50 = BigInt("151")
		const spenderEKPSBZi = accounts[3]
		const valuejeoMdq = BigInt("383")
		const valueABZ4pzW = BigInt("1025")
		const nullpxUnAMz = await contractXDVhqor.approve.call(spenderOd3jJko, valueqEdCz9B, {from: accounts[0]});
		const nullUdzHQWs = await contractXDVhqor.approve.call(spenderEKPSBZi, valuePA75l50, {from: accounts[2]});
		await contractXDVhqor.deposit.call(valuejeoMdq, {from: accounts[4]});
		await contractXDVhqor.withdraw.call(valueABZ4pzW, {from: accounts[2]});

		assert.equal(nullUdzHQWs, true)
		assert.equal(nullpxUnAMz, true)
		await expect(contractXDVhqor.deposit.call(valuejeoMdq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractCj115x = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountyctWbvJ = "0x0000000000000000000000000000000000000001"
		const accountCjjBI5t = accounts[1]
		const valuet8byhou = BigInt("1877")
		const nullk6JEblO = await contractCj115x.claimable.call(accountyctWbvJ, {from: accounts[0]});
		await contractCj115x.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullg23cVzS = await contractCj115x.claimable.call(accountCjjBI5t, {from: "0x0000000000000000000000000000000000000001"});
		await contractCj115x.withdraw.call(valuet8byhou, {from: accounts[2]});

		assert.equal(nullk6JEblO, 0)
		await expect(contractCj115x.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractv2D0fi = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const accounta67u1Gq = accounts[5]
		const valueLSf8wE = BigInt("1714")
		const valueuIziNnh = BigInt("96")
		const spenderdOBgoEH = accounts[1]
		const nulln1vIFbt = await contractv2D0fi.claim.call({from: accounts[2]});
		const nullh6VjWV6 = await contractv2D0fi.claimable.call(accounta67u1Gq, {from: accounts[3]});
		const nullGsrAXDB = await contractv2D0fi.claim.call({from: accounts[5]});
		await contractv2D0fi.withdraw.call(valueLSf8wE, {from: accounts[3]});
		const nulldoyHoEz = await contractv2D0fi.approve.call(spenderdOBgoEH, valueuIziNnh, {from: accounts[4]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractsBIJdbL = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountOdOdyfU = "0x0000000000000000000000000000000000000001"
		const toggleKbso6FO = true
		const addrFJxUpym = accounts[2]
		const accountbCekDFj = accounts[1]
		const valueIGTScuC = BigInt("1888")
		const togglemy1UOi = true
		const addrRB0mUBf = accounts[0]
		const nullLvtOpvx = await contractsBIJdbL.claimable.call(accountOdOdyfU, {from: accounts[0]});
		await contractsBIJdbL.setBridge.call(addrFJxUpym, toggleKbso6FO, {from: accounts[4]});
		const nullkAhfhHd = await contractsBIJdbL.claimable.call(accountbCekDFj, {from: "0x0000000000000000000000000000000000000001"});
		await contractsBIJdbL.withdraw.call(valueIGTScuC, {from: accounts[2]});
		await contractsBIJdbL.setBridge.call(addrRB0mUBf, togglemy1UOi, {from: accounts[4]});

		assert.equal(nullLvtOpvx, 0)
		await expect(contractsBIJdbL.setBridge.call(addrFJxUpym, toggleKbso6FO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracttQuCbv5 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountudypSzT = "0x0000000000000000000000000000000000000001"
		const accountfHuGKB4 = accounts[2]
		const toggleurTHHSS = true
		const addrI0EnQxj = accounts[3]
		const valueEJNvH6n = BigInt("817")
		const spenderYKrfiYk = "0x0000000000000000000000000000000000000001"
		const nullK16anyl = await contracttQuCbv5.claimable.call(accountudypSzT, {from: accounts[0]});
		const nullzMEEcVO = await contracttQuCbv5.claim.call({from: accounts[2]});
		const nullyjmIXRT = await contracttQuCbv5.claimable.call(accountfHuGKB4, {from: "0x0000000000000000000000000000000000000001"});
		await contracttQuCbv5.setBridge.call(addrI0EnQxj, toggleurTHHSS, {from: accounts[2]});
		const nulldOsCaKy = await contracttQuCbv5.approve.call(spenderYKrfiYk, valueEJNvH6n, {from: accounts[0]});

		assert.equal(nullK16anyl, 0)
		assert.equal(nulldOsCaKy, true)
		assert.equal(nullyjmIXRT, 0)
		assert.equal(nullzMEEcVO, 0)
	});
})