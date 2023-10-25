const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractqjAktia = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valuezaaXvL = BigInt("429")
		const valueaNawKLY = BigInt("1716")
		const dstW3fiNQD = "0x0000000000000000000000000000000000000001"
		const srcsFhpegu = accounts[0]
		await contractqjAktia.deposit.call(valuezaaXvL, {from: accounts[2]});
		const nullnPKpXqL = await contractqjAktia.transferFrom.call(srcsFhpegu, dstW3fiNQD, valueaNawKLY, {from: accounts[0]});

		await expect(contractqjAktia.deposit.call(valuezaaXvL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractcqECsLp = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountOi6WJqn = accounts[4]
		const valueep2yeRd = BigInt("770")
		const valuea29x6V = BigInt("655")
		const dstCWdVcw = accounts[1]
		const valuep9PibqA = BigInt("410")
		const dstvXDlWtP = accounts[0]
		const nullos8v7bY = await contractcqECsLp.claimable.call(accountOi6WJqn, {from: accounts[4]});
		await contractcqECsLp.withdraw.call(valueep2yeRd, {from: accounts[2]});
		const nullXQW7Nst = await contractcqECsLp.transfer.call(dstCWdVcw, valuea29x6V, {from: accounts[1]});
		await contractcqECsLp.exit.call({from: accounts[5]});
		const nullAroF901 = await contractcqECsLp.transfer.call(dstvXDlWtP, valuep9PibqA, {from: accounts[2]});

		assert.equal(nullos8v7bY, 0)
		await expect(contractcqECsLp.withdraw.call(valueep2yeRd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractbMQIplS = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valuePI886e1 = BigInt("952")
		const dstsh2gRjc = accounts[1]
		const src7g0rbz = accounts[3]
		const valueRdPWDW = BigInt("1670")
		const valueGje37hA = BigInt("154")
		const spenderFrMG68k = "0x0000000000000000000000000000000000000001"
		const valueNz47AJ8 = BigInt("484")
		const spenderpmEBqR9 = accounts[1]
		const null1JjHz0 = await contractbMQIplS.transferFrom.call(src7g0rbz, dstsh2gRjc, valuePI886e1, {from: accounts[2]});
		await contractbMQIplS.withdraw.call(valueRdPWDW, {from: accounts[1]});
		const nullOLvU5Jj = await contractbMQIplS.approve.call(spenderFrMG68k, valueGje37hA, {from: "0x0000000000000000000000000000000000000001"});
		const nulln9A3mK4 = await contractbMQIplS.approve.call(spenderpmEBqR9, valueNz47AJ8, {from: accounts[1]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractlOxulJZ = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueJgRsX1 = BigInt("1977")
		const dstEn8khtn = accounts[3]
		const srcWHeCBq2 = accounts[0]
		const valuerAWeeEX = BigInt("465")
		const valueDkrEFph = BigInt("169")
		const accountsOZVhr9 = accounts[2]
		const valueMjjgyec = BigInt("1038")
		const dstdrCDMwB = accounts[5]
		const srcYcOdDyN = accounts[4]
		const nullIx3fwgr = await contractlOxulJZ.transferFrom.call(srcWHeCBq2, dstEn8khtn, valueJgRsX1, {from: accounts[0]});
		await contractlOxulJZ.deposit.call(valuerAWeeEX, {from: accounts[0]});
		const nullhrl7Vk = await contractlOxulJZ.claim.call({from: accounts[0]});
		await contractlOxulJZ.withdraw.call(valueDkrEFph, {from: accounts[2]});
		const nullKCDbPuB = await contractlOxulJZ.claimable.call(accountsOZVhr9, {from: accounts[2]});
		const nullAYc6O3T = await contractlOxulJZ.transferFrom.call(srcYcOdDyN, dstdrCDMwB, valueMjjgyec, {from: accounts[3]});

		await expect(contractlOxulJZ.transferFrom.call(srcWHeCBq2, dstEn8khtn, valueJgRsX1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractfSB14GH = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountHe8n41V = accounts[1]
		const valuegPWjCZX = BigInt("115")
		const spendery2BS8oG = accounts[4]
		const valueQyrLmw8 = BigInt("1120")
		const dstjkhUU2z = accounts[0]
		const srczQTV7WJ = accounts[4]
		const nullNAGy25x = await contractfSB14GH.claimable.call(accountHe8n41V, {from: accounts[1]});
		const nullTYE6VQV = await contractfSB14GH.approve.call(spendery2BS8oG, valuegPWjCZX, {from: accounts[0]});
		const nullx1rfdfK = await contractfSB14GH.transferFrom.call(srczQTV7WJ, dstjkhUU2z, valueQyrLmw8, {from: accounts[0]});
		await contractfSB14GH.exit.call({from: accounts[1]});
		const nullJGso6zL = await contractfSB14GH.claim.call({from: accounts[0]});

		assert.equal(nullNAGy25x, 0)
		assert.equal(nullTYE6VQV, true)
		await expect(contractfSB14GH.transferFrom.call(srczQTV7WJ, dstjkhUU2z, valueQyrLmw8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractLYYGXkj = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueqRKBhZ7 = BigInt("1656")
		const spenderOj8MYHc = accounts[2]
		const valueSDNYMjq = BigInt("995")
		const spenderDbRkor = accounts[3]
		const valueiDdyvVj = BigInt("384")
		const valueN8k7IYx = BigInt("730")
		const dstp57I7S1 = accounts[3]
		const srcRz9VcI1 = accounts[1]
		const nullVJzxyRO = await contractLYYGXkj.approve.call(spenderOj8MYHc, valueqRKBhZ7, {from: accounts[2]});
		await contractLYYGXkj.exit.call({from: accounts[0]});
		const nullHnctZxl = await contractLYYGXkj.approve.call(spenderDbRkor, valueSDNYMjq, {from: "0x0000000000000000000000000000000000000001"});
		await contractLYYGXkj.withdraw.call(valueiDdyvVj, {from: accounts[1]});
		const nullfr5NtYb = await contractLYYGXkj.transferFrom.call(srcRz9VcI1, dstp57I7S1, valueN8k7IYx, {from: accounts[4]});

		assert.equal(nullVJzxyRO, true)
		await expect(contractLYYGXkj.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractthVhGxk = await VBZRXWrapper_alt.new({from: accounts[4]});
		const toggleXSBg94J = false
		const addrecCX8yH = accounts[5]
		const toggleicQOAC7 = true
		const addrljkLVCA = accounts[2]
		await contractthVhGxk.setBridge.call(addrecCX8yH, toggleXSBg94J, {from: accounts[3]});
		await contractthVhGxk.exit.call({from: accounts[5]});
		await contractthVhGxk.setBridge.call(addrljkLVCA, toggleicQOAC7, {from: accounts[1]});

		await expect(contractthVhGxk.setBridge.call(addrecCX8yH, toggleXSBg94J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractHdimmm = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountynIP9y = accounts[3]
		const nullBRxQxSy = await contractHdimmm.claimable.call(accountynIP9y, {from: accounts[4]});
		const nullUmHXEuj = await contractHdimmm.claim.call({from: accounts[1]});
		const nullMBzV3vk = await contractHdimmm.claim.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullBRxQxSy, 0)
		assert.equal(nullMBzV3vk, 0)
		assert.equal(nullUmHXEuj, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractI8jo3S = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueV2yeIDC = BigInt("1458")
		const spenderAeF0Vzb = accounts[0]
		const toggleoJjciTo = true
		const addrKvcogip = accounts[1]
		const valueQNwWCJK = BigInt("587")
		const dstWggG8wA = accounts[5]
		const valuerDrXd8O = BigInt("74")
		const nully1uKbnc = await contractI8jo3S.approve.call(spenderAeF0Vzb, valueV2yeIDC, {from: accounts[2]});
		await contractI8jo3S.setBridge.call(addrKvcogip, toggleoJjciTo, {from: accounts[0]});
		await contractI8jo3S.exit.call({from: accounts[0]});
		const nullrSjdNgi = await contractI8jo3S.transfer.call(dstWggG8wA, valueQNwWCJK, {from: accounts[0]});
		await contractI8jo3S.deposit.call(valuerDrXd8O, {from: accounts[0]});

		assert.equal(nully1uKbnc, true)
		await expect(contractI8jo3S.setBridge.call(addrKvcogip, toggleoJjciTo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractG05LXiA = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valuefcEfagp = BigInt("270")
		const dstdqzTxRX = accounts[4]
		const accountySqVI0V = accounts[2]
		const nullDw0IJ0f = await contractG05LXiA.transfer.call(dstdqzTxRX, valuefcEfagp, {from: accounts[1]});
		const nullFxr5KMX = await contractG05LXiA.claimable.call(accountySqVI0V, {from: accounts[4]});

		await expect(contractG05LXiA.transfer.call(dstdqzTxRX, valuefcEfagp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})