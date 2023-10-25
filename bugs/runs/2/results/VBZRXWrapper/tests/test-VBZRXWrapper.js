const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractLMOUyk = await VBZRXWrapper.new({from: accounts[5]});
		const valueUacTsvs = BigInt("215")
		const spenderQ8TSljV = accounts[3]
		const valueWHBoLmW = BigInt("1412")
		const valuefk0mWWU = BigInt("1353")
		const dstw0c872Y = accounts[2]
		const srcKeFn0jp = accounts[3]
		const accountI0t5MXQ = accounts[5]
		const nullHfqRaxS = await contractLMOUyk.approve.call(spenderQ8TSljV, valueUacTsvs, {from: accounts[2]});
		const nullgOWEdYp = await contractLMOUyk.claim.call({from: accounts[0]});
		await contractLMOUyk.exit.call({from: accounts[3]});
		await contractLMOUyk.deposit.call(valueWHBoLmW, {from: accounts[2]});
		const nullc7kOCE3 = await contractLMOUyk.transferFrom.call(srcKeFn0jp, dstw0c872Y, valuefk0mWWU, {from: accounts[2]});
		const nullnRDH7Q = await contractLMOUyk.claimable.call(accountI0t5MXQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullHfqRaxS, true)
		assert.equal(nullgOWEdYp, 0)
		await expect(contractLMOUyk.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractg2jml0 = await VBZRXWrapper.new({from: accounts[0]});
		const valueXEl02xI = BigInt("1533")
		const dst6Vx4Fe = accounts[2]
		const valueeDRgVWU = BigInt("1941")
		const spenderADrXbHm = accounts[3]
		const valueAkQiqAm = BigInt("1706")
		const dstdzcr5kV = accounts[0]
		const srcRgxr6hH = accounts[0]
		const accountl55ka7L = accounts[1]
		const nullISrDdh = await contractg2jml0.transfer.call(dst6Vx4Fe, valueXEl02xI, {from: accounts[1]});
		const nullGyI63p = await contractg2jml0.approve.call(spenderADrXbHm, valueeDRgVWU, {from: accounts[4]});
		await contractg2jml0.exit.call({from: accounts[2]});
		const nullgwsFpU = await contractg2jml0.transferFrom.call(srcRgxr6hH, dstdzcr5kV, valueAkQiqAm, {from: accounts[2]});
		const nullYvmzQpI = await contractg2jml0.claimable.call(accountl55ka7L, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractg2jml0.transfer.call(dst6Vx4Fe, valueXEl02xI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractAVhi1A9 = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueGDNXxz1 = BigInt("191")
		const valueohUMCBl = BigInt("38")
		const dsttKOabDg = accounts[1]
		const srcmTNvdi = accounts[3]
		const valueBHcYq4H = BigInt("992")
		const valueOI9oEFp = BigInt("977")
		const spenderG3QV7kj = accounts[2]
		await contractAVhi1A9.exit.call({from: accounts[3]});
		await contractAVhi1A9.withdraw.call(valueGDNXxz1, {from: "0x0000000000000000000000000000000000000001"});
		const nullR2eCpij = await contractAVhi1A9.transferFrom.call(srcmTNvdi, dsttKOabDg, valueohUMCBl, {from: accounts[4]});
		await contractAVhi1A9.deposit.call(valueBHcYq4H, {from: accounts[0]});
		const nullAu9p05 = await contractAVhi1A9.approve.call(spenderG3QV7kj, valueOI9oEFp, {from: accounts[3]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractNe01DF = await VBZRXWrapper.new({from: accounts[5]});
		const accountTt2rZj6 = accounts[0]
		const valueYn50hFJ = BigInt("1028")
		const dstutabuOY = accounts[5]
		const srcQLhWkxq = accounts[2]
		const valueqXywsHY = BigInt("77")
		const dstnNa9EhI = accounts[4]
		const valueYPjIGxi = BigInt("1036")
		const dstSbA8VTW = accounts[2]
		const srcdXtLBKn = accounts[1]
		const nullDrc3up1 = await contractNe01DF.claimable.call(accountTt2rZj6, {from: accounts[1]});
		const nullJhGrIM = await contractNe01DF.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullV2ooFx1 = await contractNe01DF.transferFrom.call(srcQLhWkxq, dstutabuOY, valueYn50hFJ, {from: accounts[2]});
		const nullwg7x8Wl = await contractNe01DF.transfer.call(dstnNa9EhI, valueqXywsHY, {from: accounts[2]});
		const nulljsxCsmp = await contractNe01DF.transferFrom.call(srcdXtLBKn, dstSbA8VTW, valueYPjIGxi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractNe01DF.claimable.call(accountTt2rZj6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractEtTXryV = await VBZRXWrapper.new({from: accounts[1]});
		const valuepsCIxMe = BigInt("1522")
		const valueyFzTp4n = BigInt("185")
		const dstxLnkC3 = accounts[3]
		const srcFvgzSOE = "0x0000000000000000000000000000000000000001"
		await contractEtTXryV.deposit.call(valuepsCIxMe, {from: accounts[4]});
		const nullFbLQu3T = await contractEtTXryV.transferFrom.call(srcFvgzSOE, dstxLnkC3, valueyFzTp4n, {from: accounts[3]});

		await expect(contractEtTXryV.deposit.call(valuepsCIxMe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractv5uwLZa = await VBZRXWrapper.new({from: accounts[4]});
		const valueu8NWiSx = BigInt("0")
		const dsttsjqpdi = accounts[0]
		const value7DU98X = BigInt("19")
		const dstibpj1dj = accounts[4]
		const valueglLCNxP = BigInt("1628")
		const nullqYPRmET = await contractv5uwLZa.transfer.call(dsttsjqpdi, valueu8NWiSx, {from: accounts[3]});
		await contractv5uwLZa.exit.call({from: accounts[2]});
		const nullAjITSLG = await contractv5uwLZa.transfer.call(dstibpj1dj, value7DU98X, {from: accounts[3]});
		await contractv5uwLZa.exit.call({from: accounts[4]});
		await contractv5uwLZa.deposit.call(valueglLCNxP, {from: accounts[4]});

		assert.equal(nullqYPRmET, true)
		await expect(contractv5uwLZa.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})