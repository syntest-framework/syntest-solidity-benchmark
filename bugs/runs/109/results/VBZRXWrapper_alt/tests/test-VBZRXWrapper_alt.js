const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractnEIDEX9 = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountNy5v1Eu = accounts[5]
		const valueM7mWqOu = BigInt("1242")
		const toggleqry0eTC = true
		const addrcd8WzTW = accounts[3]
		const valuePsFfZF = BigInt("1974")
		const spendercv1l9wN = accounts[1]
		const valuejcdU8mf = BigInt("727")
		const spenderp8LecMJ = accounts[2]
		const nullhEtcQG = await contractnEIDEX9.claim.call({from: accounts[0]});
		const nulluQyUCLd = await contractnEIDEX9.claimable.call(accountNy5v1Eu, {from: accounts[4]});
		await contractnEIDEX9.deposit.call(valueM7mWqOu, {from: accounts[0]});
		await contractnEIDEX9.setBridge.call(addrcd8WzTW, toggleqry0eTC, {from: accounts[0]});
		const nullu09zKkZ = await contractnEIDEX9.approve.call(spendercv1l9wN, valuePsFfZF, {from: accounts[2]});
		const nullGTyudRf = await contractnEIDEX9.approve.call(spenderp8LecMJ, valuejcdU8mf, {from: accounts[0]});

		assert.equal(nullhEtcQG, 0)
		assert.equal(nulluQyUCLd, 0)
		await expect(contractnEIDEX9.deposit.call(valueM7mWqOu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractVGu76KU = await VBZRXWrapper_alt.new({from: accounts[4]});
		const nullbSQlVJA = await contractVGu76KU.claim.call({from: accounts[0]});
		await contractVGu76KU.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullLksb6Bs = await contractVGu76KU.claim.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullbSQlVJA, 0)
		await expect(contractVGu76KU.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractM0ujB7 = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuep3Vo6UC = BigInt("1982")
		const dst2jLArX = accounts[1]
		const srcL4L6mzn = accounts[0]
		const valuely6Mp60 = BigInt("1443")
		const valuetMEvFZu = BigInt("664")
		const spenderdggT9ij = accounts[1]
		const nullm69mjMZ = await contractM0ujB7.transferFrom.call(srcL4L6mzn, dst2jLArX, valuep3Vo6UC, {from: accounts[4]});
		await contractM0ujB7.withdraw.call(valuely6Mp60, {from: accounts[4]});
		const nullccyXg7j = await contractM0ujB7.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullKgauqcj = await contractM0ujB7.approve.call(spenderdggT9ij, valuetMEvFZu, {from: accounts[3]});
		const nullWMa8Q2 = await contractM0ujB7.claim.call({from: accounts[1]});

		await expect(contractM0ujB7.transferFrom.call(srcL4L6mzn, dst2jLArX, valuep3Vo6UC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractcLZiogO = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuebyeZqZF = BigInt("565")
		const spenderxDJ4mZ = accounts[1]
		const valuexIBBnP = BigInt("1542")
		const nullaX9zR2l = await contractcLZiogO.approve.call(spenderxDJ4mZ, valuebyeZqZF, {from: accounts[4]});
		await contractcLZiogO.exit.call({from: accounts[2]});
		await contractcLZiogO.deposit.call(valuexIBBnP, {from: accounts[1]});
		await contractcLZiogO.exit.call({from: accounts[0]});

		assert.equal(nullaX9zR2l, true)
		await expect(contractcLZiogO.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracth0QcdPE = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuecRfdSz2 = BigInt("1717")
		const dstuDWuqm2 = accounts[0]
		const valuenL3IB98 = BigInt("517")
		const dsthUCCrXx = accounts[0]
		const valuepjHZF5r = BigInt("1134")
		const valueqUVIoBS = BigInt("1776")
		const valuedkmgeUC = BigInt("644")
		const valuejxcb0rs = BigInt("1821")
		const dstdDcn8h = accounts[3]
		const srcTUYd4xs = accounts[2]
		const nullIGfAl4K = await contracth0QcdPE.transfer.call(dstuDWuqm2, valuecRfdSz2, {from: accounts[4]});
		const nullToBOjIn = await contracth0QcdPE.transfer.call(dsthUCCrXx, valuenL3IB98, {from: accounts[4]});
		await contracth0QcdPE.deposit.call(valuepjHZF5r, {from: "0x0000000000000000000000000000000000000001"});
		await contracth0QcdPE.deposit.call(valueqUVIoBS, {from: accounts[3]});
		await contracth0QcdPE.deposit.call(valuedkmgeUC, {from: accounts[2]});
		const nullkioG9Xn = await contracth0QcdPE.transferFrom.call(srcTUYd4xs, dstdDcn8h, valuejxcb0rs, {from: accounts[3]});

		await expect(contracth0QcdPE.transfer.call(dstuDWuqm2, valuecRfdSz2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract9aw8QO = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountcDNf1SM = accounts[0]
		const accounteUnTUCB = accounts[5]
		const toggleX38I45D = true
		const addrtKmTCzA = accounts[1]
		const nullT7YvZzR = await contract9aw8QO.claimable.call(accountcDNf1SM, {from: accounts[3]});
		const nullog2BjA = await contract9aw8QO.claimable.call(accounteUnTUCB, {from: accounts[5]});
		await contract9aw8QO.setBridge.call(addrtKmTCzA, toggleX38I45D, {from: accounts[1]});

		assert.equal(nullT7YvZzR, 0)
		assert.equal(nullog2BjA, 0)
		await expect(contract9aw8QO.setBridge.call(addrtKmTCzA, toggleX38I45D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractHFhc91s = await VBZRXWrapper_alt.new({from: accounts[4]});
		const togglefLmLFv = false
		const addrIPsRoa = accounts[4]
		const nulliXI6qzj = await contractHFhc91s.claim.call({from: accounts[0]});
		await contractHFhc91s.setBridge.call(addrIPsRoa, togglefLmLFv, {from: accounts[4]});
		await contractHFhc91s.exit.call({from: accounts[5]});

		assert.equal(nulliXI6qzj, 0)
		await expect(contractHFhc91s.setBridge.call(addrIPsRoa, togglefLmLFv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractcIvwxNe = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueSeDsK0k = BigInt("718")
		const valuerYL4EMI = BigInt("1184")
		const valueZ0xcAe = BigInt("67")
		const valueYUN0EgZ = BigInt("193")
		await contractcIvwxNe.exit.call({from: accounts[4]});
		await contractcIvwxNe.deposit.call(valueSeDsK0k, {from: accounts[5]});
		await contractcIvwxNe.deposit.call(valuerYL4EMI, {from: accounts[0]});
		await contractcIvwxNe.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await contractcIvwxNe.deposit.call(valueZ0xcAe, {from: accounts[0]});
		await contractcIvwxNe.withdraw.call(valueYUN0EgZ, {from: accounts[2]});
	});
})