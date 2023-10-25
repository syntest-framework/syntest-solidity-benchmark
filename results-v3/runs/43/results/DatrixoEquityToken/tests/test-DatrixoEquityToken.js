const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressOofEv6o = accounts[4]
		const uintRDRdNc = BigInt("635")
		const DatrixoEquityTokenuSDdQzq = await DatrixoEquityToken.new(addressOofEv6o, uintRDRdNc, {from: accounts[2]});
		const addressZ0hpLjT = accounts[2]
		const boolKSsjGJW = await DatrixoEquityTokenuSDdQzq.removeShareholder.call(addressZ0hpLjT, {from: accounts[1]});
		await DatrixoEquityTokenuSDdQzq.afterStartTime.call({from: accounts[1]});

		await expect(DatrixoEquityTokenuSDdQzq.removeShareholder.call(addressZ0hpLjT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressBjQCaxS = accounts[0]
		const uintjOWLowd = BigInt("1433")
		const DatrixoEquityTokenKIakwv3 = await DatrixoEquityToken.new(addressBjQCaxS, uintjOWLowd, {from: "0x0000000000000000000000000000000000000001"});
		const uintir9wokv = BigInt("475")
		const addressJDFMSxv = accounts[0]
		const uintPUq1SOu = BigInt("1524")
		const addresskYQSth0 = accounts[2]
		const addressNFZ9jEs = accounts[4]
		const boolNY6MEml = await DatrixoEquityTokenKIakwv3.transfer.call(addressJDFMSxv, uintir9wokv, {from: accounts[2]});
		const boolGiPTfJ3 = await DatrixoEquityTokenKIakwv3.transferFrom.call(addressNFZ9jEs, addresskYQSth0, uintPUq1SOu, {from: accounts[3]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addresss2A8ssw = accounts[1]
		const uintYEyqypu = BigInt("1939")
		const DatrixoEquityTokenw6oU7ts = await DatrixoEquityToken.new(addresss2A8ssw, uintYEyqypu, {from: accounts[1]});
		const addressCwbKNTb = accounts[1]
		await DatrixoEquityTokenw6oU7ts.afterStartTime.call({from: accounts[0]});
		const boolSLFRSUl = await DatrixoEquityTokenw6oU7ts.removeShareholder.call(addressCwbKNTb, {from: accounts[4]});

		await expect(DatrixoEquityTokenw6oU7ts.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressk1WDSTy = "0x0000000000000000000000000000000000000001"
		const uintpLVU36 = BigInt("637")
		const DatrixoEquityTokenKUelcjL = await DatrixoEquityToken.new(addressk1WDSTy, uintpLVU36, {from: accounts[1]});
		const uintv89Axmq = BigInt("1210")
		const addresslr0Gkpm = accounts[0]
		const addressVuxN71p = accounts[2]
		const addressarrayIVoX6Eo = await DatrixoEquityTokenKUelcjL.getShareholdersArray.call({from: accounts[1]});
		const boolTYBi5xs = await DatrixoEquityTokenKUelcjL.transferFrom.call(addressVuxN71p, addresslr0Gkpm, uintv89Axmq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayIVoX6Eo, )
		await expect(DatrixoEquityTokenKUelcjL.transferFrom.call(addressVuxN71p, addresslr0Gkpm, uintv89Axmq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressZKUvenl = "0x0000000000000000000000000000000000000001"
		const uintKUUTQEt = BigInt("637")
		const DatrixoEquityTokenKUelcjL = await DatrixoEquityToken.new(addressZKUvenl, uintKUUTQEt, {from: accounts[1]});
		const uintFl7j8UH = BigInt("1692")
		const addressUfsjtLg = accounts[4]
		const uintcq3yh9G = BigInt("1209")
		const addressZ0VqBvs = accounts[1]
		const addressQGBLkyJ = accounts[2]
		const boolJOXlXSU = await DatrixoEquityTokenKUelcjL.transfer.call(addressUfsjtLg, uintFl7j8UH, {from: "0x0000000000000000000000000000000000000001"});
		const addressarrayIVoX6Eo = await DatrixoEquityTokenKUelcjL.getShareholdersArray.call({from: accounts[1]});
		const boolTYBi5xs = await DatrixoEquityTokenKUelcjL.transferFrom.call(addressQGBLkyJ, addressZ0VqBvs, uintcq3yh9G, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayIVoX6Eo, )
		assert.equal(boolJOXlXSU, true)
		await expect(DatrixoEquityTokenKUelcjL.transferFrom.call(addressQGBLkyJ, addressZ0VqBvs, uintcq3yh9G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspOnh4T1 = "0x0000000000000000000000000000000000000001"
		const uintsxQ3qdj = BigInt("637")
		const DatrixoEquityTokenKUelcjL = await DatrixoEquityToken.new(addresspOnh4T1, uintsxQ3qdj, {from: accounts[1]});
		const uintswFyMr0 = BigInt("1210")
		const addressm53YKBH = accounts[0]
		const addressGIMJ9Te = "0x0000000000000000000000000000000000000001"
		const boolTYBi5xs = await DatrixoEquityTokenKUelcjL.transferFrom.call(addressGIMJ9Te, addressm53YKBH, uintswFyMr0, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenKUelcjL.afterStartTime.call({from: accounts[1]});

		assert.equal(boolTYBi5xs, true)
		await expect(DatrixoEquityTokenKUelcjL.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressTUZ8vYk = "0x0000000000000000000000000000000000000001"
		const uintpk0QVwg = BigInt("637")
		const DatrixoEquityTokenKUelcjL = await DatrixoEquityToken.new(addressTUZ8vYk, uintpk0QVwg, {from: accounts[1]});
		const addressUVgruN1 = accounts[4]
		const uintHB7qWS3 = BigInt("1209")
		const addressLRT5WyA = accounts[1]
		const addressfLAJoo4 = accounts[2]
		const addressarrayIVoX6Eo = await DatrixoEquityTokenKUelcjL.getShareholdersArray.call({from: accounts[1]});
		const boolQ9gXhXN = await DatrixoEquityTokenKUelcjL.removeShareholder.call(addressUVgruN1, {from: "0x0000000000000000000000000000000000000001"});
		const boolTYBi5xs = await DatrixoEquityTokenKUelcjL.transferFrom.call(addressfLAJoo4, addressLRT5WyA, uintHB7qWS3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayIVoX6Eo, )
		await expect(DatrixoEquityTokenKUelcjL.removeShareholder.call(addressUVgruN1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressgLQPAOG = "0x0000000000000000000000000000000000000001"
		const uintg8La25T = BigInt("637")
		const DatrixoEquityTokenKUelcjL = await DatrixoEquityToken.new(addressgLQPAOG, uintg8La25T, {from: accounts[1]});
		const addressdAZ1L28 = "0x0000000000000000000000000000000000000000"
		const uintaU4L6jW = BigInt("1209")
		const addressTD3VhdQ = "0x0000000000000000000000000000000000000001"
		const addressRCTEgvP = accounts[2]
		const addressarrayIVoX6Eo = await DatrixoEquityTokenKUelcjL.getShareholdersArray.call({from: accounts[1]});
		const addressarrayWZJaC0i = await DatrixoEquityTokenKUelcjL.getShareholdersArray.call({from: accounts[1]});
		const boolQ9gXhXN = await DatrixoEquityTokenKUelcjL.removeShareholder.call(addressdAZ1L28, {from: "0x0000000000000000000000000000000000000001"});
		const addressarrayays9l8P = await DatrixoEquityTokenKUelcjL.getShareholdersArray.call({from: accounts[2]});
		const addressarrayqmV7PM = await DatrixoEquityTokenKUelcjL.getShareholdersArray.call({from: accounts[0]});
		const boolTYBi5xs = await DatrixoEquityTokenKUelcjL.transferFrom.call(addressRCTEgvP, addressTD3VhdQ, uintaU4L6jW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayIVoX6Eo, )
		assert.equal(addressarrayWZJaC0i, )
		await expect(DatrixoEquityTokenKUelcjL.removeShareholder.call(addressdAZ1L28, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressblSRG9S = "0x0000000000000000000000000000000000000001"
		const uintxFIMaOD = BigInt("637")
		const DatrixoEquityTokenKUelcjL = await DatrixoEquityToken.new(addressblSRG9S, uintxFIMaOD, {from: accounts[1]});
		const uintOKODJ3U = BigInt("1210")
		const addressldBK2lb = "0x0000000000000000000000000000000000000001"
		const addressgH7yDee = "0x0000000000000000000000000000000000000001"
		const uintNBeyjXf = BigInt("800")
		const boolTYBi5xs = await DatrixoEquityTokenKUelcjL.transferFrom.call(addressgH7yDee, addressldBK2lb, uintOKODJ3U, {from: "0x0000000000000000000000000000000000000001"});
		const uintG5FeC5G = await DatrixoEquityTokenKUelcjL.setStart.call(uintNBeyjXf, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenKUelcjL.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayXH6vcgr = await DatrixoEquityTokenKUelcjL.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenKUelcjL.afterStartTime.call({from: accounts[1]});

		assert.equal(boolTYBi5xs, true)
		await expect(DatrixoEquityTokenKUelcjL.setStart.call(uintNBeyjXf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPTfu37G = "0x0000000000000000000000000000000000000001"
		const uintQZOwR10 = BigInt("637")
		const DatrixoEquityTokenKUelcjL = await DatrixoEquityToken.new(addressPTfu37G, uintQZOwR10, {from: accounts[1]});
		const uinttlGrqej = BigInt("1309")
		const addressO7TULpe = "0x0000000000000000000000000000000000000001"
		const uintisV1ywi = BigInt("71")
		const addressOQ2RXsU = accounts[4]
		const addressf5pPqdw = accounts[2]
		const addresskIud670 = "0x0000000000000000000000000000000000000002"
		const boole8YmGPI = await DatrixoEquityTokenKUelcjL.transfer.call(addressO7TULpe, uinttlGrqej, {from: "0x0000000000000000000000000000000000000001"});
		const boolTS3nAf = await DatrixoEquityTokenKUelcjL.transferFrom.call(addressf5pPqdw, addressOQ2RXsU, uintisV1ywi, {from: accounts[4]});
		const boole4THGCI = await DatrixoEquityTokenKUelcjL.removeShareholder.call(addresskIud670, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenKUelcjL.transfer.call(addressO7TULpe, uinttlGrqej, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})