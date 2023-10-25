const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractex9P2v = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuedzpcv5F = BigInt("170")
		const dstJ1bgTzu = accounts[4]
		const srcI6zwft = accounts[0]
		const valueUjt2zPK = BigInt("1122")
		const valueLrWYurm = BigInt("1459")
		const nullcrl7Qjh = await contractex9P2v.claim.call({from: accounts[2]});
		const nullTrqVOXW = await contractex9P2v.transferFrom.call(srcI6zwft, dstJ1bgTzu, valuedzpcv5F, {from: accounts[1]});
		await contractex9P2v.deposit.call(valueUjt2zPK, {from: accounts[0]});
		await contractex9P2v.withdraw.call(valueLrWYurm, {from: accounts[4]});
		await contractex9P2v.exit.call({from: accounts[4]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractU81CxM = await VBZRXWrapper.new({from: accounts[1]});
		const valuexScn6Io = BigInt("1844")
		const valuex3NcMp = BigInt("1476")
		const spenderGWbkCbI = accounts[1]
		const valueQAVuy0f = BigInt("1732")
		const dstVBQ2p7k = accounts[3]
		const srcO17Ck7D = accounts[2]
		const accountXXyLA3 = accounts[4]
		const nullUemPeti = await contractU81CxM.claim.call({from: accounts[5]});
		await contractU81CxM.deposit.call(valuexScn6Io, {from: accounts[5]});
		const nullC4egfJH = await contractU81CxM.approve.call(spenderGWbkCbI, valuex3NcMp, {from: accounts[2]});
		const nullgU2p0zI = await contractU81CxM.transferFrom.call(srcO17Ck7D, dstVBQ2p7k, valueQAVuy0f, {from: accounts[0]});
		const nullHljaD7v = await contractU81CxM.claimable.call(accountXXyLA3, {from: accounts[0]});

		assert.equal(nullUemPeti, 0)
		await expect(contractU81CxM.deposit.call(valuexScn6Io, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractWHarJjd = await VBZRXWrapper.new({from: accounts[2]});
		const accountTFtRbp = accounts[1]
		const value5Z4jwL = BigInt("1787")
		const valueUiuBKe = BigInt("873")
		const spenderT5KnLSF = accounts[1]
		const nullH5DR5u1 = await contractWHarJjd.claim.call({from: accounts[1]});
		const nullVyNhDj = await contractWHarJjd.claim.call({from: accounts[1]});
		const null64UTIL = await contractWHarJjd.claimable.call(accountTFtRbp, {from: accounts[3]});
		await contractWHarJjd.deposit.call(value5Z4jwL, {from: accounts[4]});
		const nulla0LKih = await contractWHarJjd.approve.call(spenderT5KnLSF, valueUiuBKe, {from: accounts[0]});

		assert.equal(nullH5DR5u1, 0)
		assert.equal(nullVyNhDj, 0)
		await expect(contractWHarJjd.claimable.call(accountTFtRbp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractvXR6AZp = await VBZRXWrapper.new({from: accounts[3]});
		const valuepvPj0bG = BigInt("291")
		const spendery1aHSif = accounts[1]
		await contractvXR6AZp.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullkDb0v3 = await contractvXR6AZp.approve.call(spendery1aHSif, valuepvPj0bG, {from: accounts[5]});
		const nullZ6ucgv8 = await contractvXR6AZp.claim.call({from: accounts[3]});

		await expect(contractvXR6AZp.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractuz17IZU = await VBZRXWrapper.new({from: accounts[4]});
		const valuef52gMAp = BigInt("317")
		const spenderbu1R7fa = accounts[1]
		const valueDO2jZ8t = BigInt("258")
		const valueOrVqe0i = BigInt("739")
		const spenderyIvi8lH = accounts[5]
		const valuebBdWgx = BigInt("327")
		const dstgJCts20 = accounts[3]
		const nullTYj5J9w = await contractuz17IZU.approve.call(spenderbu1R7fa, valuef52gMAp, {from: accounts[3]});
		await contractuz17IZU.withdraw.call(valueDO2jZ8t, {from: accounts[1]});
		const nullYfHOfUR = await contractuz17IZU.approve.call(spenderyIvi8lH, valueOrVqe0i, {from: accounts[0]});
		const nullF8EolYd = await contractuz17IZU.transfer.call(dstgJCts20, valuebBdWgx, {from: accounts[5]});
		await contractuz17IZU.exit.call({from: accounts[2]});

		assert.equal(nullTYj5J9w, true)
		await expect(contractuz17IZU.withdraw.call(valueDO2jZ8t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractmcIKUDu = await VBZRXWrapper.new({from: accounts[3]});
		const valuefYQVbn = BigInt("155")
		const dstXAUDnCv = accounts[0]
		const srcRBg1Qz0 = accounts[4]
		const valueZA6ndh0 = BigInt("291")
		const spendermunGM8E = accounts[1]
		const nullT2ck6r3 = await contractmcIKUDu.transferFrom.call(srcRBg1Qz0, dstXAUDnCv, valuefYQVbn, {from: accounts[2]});
		await contractmcIKUDu.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullV6qNeUk = await contractmcIKUDu.approve.call(spendermunGM8E, valueZA6ndh0, {from: accounts[5]});
		const nulleYYZ6u = await contractmcIKUDu.claim.call({from: accounts[3]});

		await expect(contractmcIKUDu.transferFrom.call(srcRBg1Qz0, dstXAUDnCv, valuefYQVbn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractWjwJOJA = await VBZRXWrapper.new({from: accounts[3]});
		const valueVic1dw4 = BigInt("2006")
		const dstSJXyUi = accounts[1]
		const valueHPQkXDQ = BigInt("188")
		const spendergN6Zm6Z = accounts[4]
		const valuerCZeiDK = BigInt("1222")
		const nullTVZQJaX = await contractWjwJOJA.transfer.call(dstSJXyUi, valueVic1dw4, {from: accounts[4]});
		const nulls7nYsn0 = await contractWjwJOJA.approve.call(spendergN6Zm6Z, valueHPQkXDQ, {from: accounts[3]});
		await contractWjwJOJA.deposit.call(valuerCZeiDK, {from: accounts[2]});

		await expect(contractWjwJOJA.transfer.call(dstSJXyUi, valueVic1dw4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})