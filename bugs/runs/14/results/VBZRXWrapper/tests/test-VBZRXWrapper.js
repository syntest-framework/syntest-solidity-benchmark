const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractektqFI = await VBZRXWrapper.new({from: accounts[1]});
		const valueYedskE2 = BigInt("208")
		const spenderPvpAIwv = accounts[3]
		const valueZylfdBW = BigInt("1667")
		const valuetI2gety = BigInt("55")
		const spenderZaDEBO4 = accounts[5]
		const nullB5xAUWj = await contractektqFI.approve.call(spenderPvpAIwv, valueYedskE2, {from: accounts[4]});
		await contractektqFI.deposit.call(valueZylfdBW, {from: accounts[4]});
		const nullreTHWCu = await contractektqFI.approve.call(spenderZaDEBO4, valuetI2gety, {from: accounts[0]});

		assert.equal(nullB5xAUWj, true)
		await expect(contractektqFI.deposit.call(valueZylfdBW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracttGIVWjq = await VBZRXWrapper.new({from: accounts[0]});
		const accountN804Ai = accounts[3]
		const nullsmjrdZp = await contracttGIVWjq.claim.call({from: accounts[3]});
		const nullO42fZHR = await contracttGIVWjq.claimable.call(accountN804Ai, {from: accounts[5]});
		await contracttGIVWjq.exit.call({from: accounts[3]});

		assert.equal(nullsmjrdZp, 0)
		await expect(contracttGIVWjq.claimable.call(accountN804Ai, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractu0zuKpg = await VBZRXWrapper.new({from: accounts[4]});
		const valueaOPR5qT = BigInt("1046")
		const valueSbod2ah = BigInt("880")
		const valuevZ2Vdif = BigInt("520")
		const dstwAeqbQw = accounts[2]
		await contractu0zuKpg.withdraw.call(valueaOPR5qT, {from: accounts[3]});
		await contractu0zuKpg.withdraw.call(valueSbod2ah, {from: accounts[2]});
		const nullLYJfxnG = await contractu0zuKpg.transfer.call(dstwAeqbQw, valuevZ2Vdif, {from: accounts[2]});

		await expect(contractu0zuKpg.withdraw.call(valueaOPR5qT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractJG92D2o = await VBZRXWrapper.new({from: accounts[1]});
		const valueAJZuEWp = BigInt("1848")
		const dstksBrEev = accounts[0]
		const srcjQYmD9y = accounts[3]
		const valueSuurs3I = BigInt("1834")
		const dstey0jwnI = accounts[1]
		const srcFboDuv6 = "0x0000000000000000000000000000000000000001"
		const valuei8G95JG = BigInt("1810")
		const nullaw5WWNi = await contractJG92D2o.transferFrom.call(srcjQYmD9y, dstksBrEev, valueAJZuEWp, {from: accounts[1]});
		const nulliddsCAS = await contractJG92D2o.transferFrom.call(srcFboDuv6, dstey0jwnI, valueSuurs3I, {from: accounts[3]});
		await contractJG92D2o.exit.call({from: accounts[0]});
		await contractJG92D2o.withdraw.call(valuei8G95JG, {from: accounts[4]});
		const nullUhwbPfS = await contractJG92D2o.claim.call({from: accounts[2]});

		await expect(contractJG92D2o.transferFrom.call(srcjQYmD9y, dstksBrEev, valueAJZuEWp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractw1TrsMn = await VBZRXWrapper.new({from: accounts[0]});
		const valuepdzxE1I = BigInt("1516")
		const dstuGWKX8X = accounts[4]
		await contractw1TrsMn.exit.call({from: accounts[4]});
		const nullngOjox = await contractw1TrsMn.claim.call({from: accounts[5]});
		const nullyyjcZh = await contractw1TrsMn.claim.call({from: accounts[1]});
		await contractw1TrsMn.exit.call({from: accounts[4]});
		const nullz3GS4wk = await contractw1TrsMn.transfer.call(dstuGWKX8X, valuepdzxE1I, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractw1TrsMn.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractxjzseUV = await VBZRXWrapper.new({from: accounts[1]});
		const valueI14o9Q = BigInt("19")
		const dstpqxhLlj = accounts[0]
		const valuemQ4ClSO = BigInt("1834")
		const dstDAM8xHI = accounts[1]
		const srcD3b6v5K = "0x0000000000000000000000000000000000000001"
		const nullkCmSJ0 = await contractxjzseUV.transfer.call(dstpqxhLlj, valueI14o9Q, {from: accounts[1]});
		const nulls2yu9Bo = await contractxjzseUV.transferFrom.call(srcD3b6v5K, dstDAM8xHI, valuemQ4ClSO, {from: accounts[3]});
		const nulljlWbbNi = await contractxjzseUV.claim.call({from: accounts[2]});

		await expect(contractxjzseUV.transfer.call(dstpqxhLlj, valueI14o9Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracteKA4K6a = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const accountxkHFxYg = accounts[4]
		const accountwXXitc0 = accounts[5]
		const valueGZqgolE = BigInt("1957")
		const valueRvnLrnL = BigInt("1040")
		const spendermnULKU = accounts[5]
		const nullE0SSGF6 = await contracteKA4K6a.claimable.call(accountxkHFxYg, {from: accounts[2]});
		const nullVeiuqJy = await contracteKA4K6a.claimable.call(accountwXXitc0, {from: accounts[1]});
		await contracteKA4K6a.withdraw.call(valueGZqgolE, {from: accounts[0]});
		const nullhXWpZa0 = await contracteKA4K6a.approve.call(spendermnULKU, valueRvnLrnL, {from: accounts[2]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractqdEA14S = await VBZRXWrapper.new({from: accounts[1]});
		const value2nH1N2 = BigInt("0")
		const dstgI4Kurm = accounts[2]
		const srcNApb79y = accounts[4]
		const valueSlZxW8V = BigInt("1848")
		const dstisk4xcH = accounts[0]
		const srchwP8MBK = accounts[4]
		const valuegrtkGvG = BigInt("1834")
		const dstggTwwvg = accounts[1]
		const srcHocWn45 = "0x0000000000000000000000000000000000000001"
		const valuelHbFzmA = BigInt("1810")
		const valueKjm7rlW = BigInt("716")
		const spenderm1kQMJb = accounts[1]
		const nullyKx0Kye = await contractqdEA14S.transferFrom.call(srcNApb79y, dstgI4Kurm, value2nH1N2, {from: accounts[3]});
		const nulleROzKeM = await contractqdEA14S.transferFrom.call(srchwP8MBK, dstisk4xcH, valueSlZxW8V, {from: accounts[1]});
		const nullSnnRG9k = await contractqdEA14S.transferFrom.call(srcHocWn45, dstggTwwvg, valuegrtkGvG, {from: accounts[3]});
		await contractqdEA14S.exit.call({from: accounts[0]});
		await contractqdEA14S.withdraw.call(valuelHbFzmA, {from: accounts[4]});
		const nullxCEUqrg = await contractqdEA14S.approve.call(spenderm1kQMJb, valueKjm7rlW, {from: accounts[1]});
		await contractqdEA14S.exit.call({from: accounts[5]});
		const nullHWFQON5 = await contractqdEA14S.claim.call({from: accounts[2]});

		assert.equal(nullyKx0Kye, true)
		await expect(contractqdEA14S.transferFrom.call(srchwP8MBK, dstisk4xcH, valueSlZxW8V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})