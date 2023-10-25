const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractlf9TBJ = await VBZRXWrapper_alt.new({from: accounts[4]});
		const togglelAXM479 = true
		const addrXxg3mGh = accounts[5]
		const valueHpLaSCF = BigInt("1400")
		const spenderRjZwRu4 = accounts[3]
		const valueiY2FNd5 = BigInt("1508")
		await contractlf9TBJ.setBridge.call(addrXxg3mGh, togglelAXM479, {from: "0x0000000000000000000000000000000000000001"});
		await contractlf9TBJ.exit.call({from: accounts[0]});
		const nullTZUyfvh = await contractlf9TBJ.approve.call(spenderRjZwRu4, valueHpLaSCF, {from: accounts[0]});
		await contractlf9TBJ.withdraw.call(valueiY2FNd5, {from: accounts[4]});

		await expect(contractlf9TBJ.setBridge.call(addrXxg3mGh, togglelAXM479, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractw8T8Tgv = await VBZRXWrapper_alt.new({from: accounts[2]});
		const nullTrelkBA = await contractw8T8Tgv.claim.call({from: accounts[5]});
		await contractw8T8Tgv.exit.call({from: accounts[4]});

		assert.equal(nullTrelkBA, 0)
		await expect(contractw8T8Tgv.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractBY9Dgld = await VBZRXWrapper_alt.new({from: accounts[0]});
		const value2hlQAr = BigInt("310")
		const dstLdSUndP = accounts[3]
		const srcbKtae6R = accounts[0]
		const valuea1Gj4I = BigInt("344")
		const dstWEozPD = accounts[4]
		const srcclRNJTJ = accounts[1]
		const nulloGxhvNf = await contractBY9Dgld.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullU5FFelC = await contractBY9Dgld.transferFrom.call(srcbKtae6R, dstLdSUndP, value2hlQAr, {from: accounts[2]});
		const nullVSo1rhQ = await contractBY9Dgld.transferFrom.call(srcclRNJTJ, dstWEozPD, valuea1Gj4I, {from: accounts[2]});

		assert.equal(nulloGxhvNf, 0)
		await expect(contractBY9Dgld.transferFrom.call(srcbKtae6R, dstLdSUndP, value2hlQAr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractX0GHgbE = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueU6Mm4xM = BigInt("2035")
		const valueNMGE7SR = BigInt("1279")
		const dstiCNa3Wo = accounts[4]
		const srclE5qnwB = accounts[5]
		const valuewkrRz3S = BigInt("1364")
		const valueGZ0xEKd = BigInt("192")
		const dstoDw3Ah7 = accounts[2]
		const srcqbqJ82 = accounts[0]
		await contractX0GHgbE.exit.call({from: accounts[4]});
		await contractX0GHgbE.deposit.call(valueU6Mm4xM, {from: accounts[3]});
		const nullUqOrNDe = await contractX0GHgbE.transferFrom.call(srclE5qnwB, dstiCNa3Wo, valueNMGE7SR, {from: accounts[4]});
		await contractX0GHgbE.withdraw.call(valuewkrRz3S, {from: accounts[2]});
		const nullf7LbNLf = await contractX0GHgbE.transferFrom.call(srcqbqJ82, dstoDw3Ah7, valueGZ0xEKd, {from: accounts[5]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractlaPnFfP = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountJjZvCOu = accounts[3]
		const accountUnq56Li = accounts[1]
		const valueeGylBFj = BigInt("679")
		const dstLO4M1M1 = accounts[0]
		const srcLe3b4Bh = accounts[0]
		const valueBN2L3vF = BigInt("1736")
		const spenderpSTfKWL = accounts[1]
		const nullcqUhcQ4 = await contractlaPnFfP.claimable.call(accountJjZvCOu, {from: accounts[3]});
		const nullepgZW9J = await contractlaPnFfP.claimable.call(accountUnq56Li, {from: accounts[4]});
		const nullk4zqtlT = await contractlaPnFfP.transferFrom.call(srcLe3b4Bh, dstLO4M1M1, valueeGylBFj, {from: accounts[2]});
		const nulloQtuXpX = await contractlaPnFfP.approve.call(spenderpSTfKWL, valueBN2L3vF, {from: accounts[4]});

		assert.equal(nullcqUhcQ4, 0)
		assert.equal(nullepgZW9J, 0)
		await expect(contractlaPnFfP.transferFrom.call(srcLe3b4Bh, dstLO4M1M1, valueeGylBFj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractkvnnV2G = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueVdlKM1x = BigInt("863")
		const accountvrrI8d8 = "0x0000000000000000000000000000000000000001"
		await contractkvnnV2G.deposit.call(valueVdlKM1x, {from: accounts[2]});
		await contractkvnnV2G.exit.call({from: accounts[1]});
		const null1BEKAk = await contractkvnnV2G.claimable.call(accountvrrI8d8, {from: accounts[5]});

		await expect(contractkvnnV2G.deposit.call(valueVdlKM1x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractpC6cYPP = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valuelrNENem = BigInt("1791")
		const spenderflPhEHu = accounts[3]
		const accountT27Qcpd = accounts[2]
		const valuebs3wu8G = BigInt("344")
		const dstTQMgUHH = accounts[4]
		const srckVHXi9C = accounts[1]
		const nullQG1fDvH = await contractpC6cYPP.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nulljmTrwsf = await contractpC6cYPP.approve.call(spenderflPhEHu, valuelrNENem, {from: accounts[1]});
		const nullsK9eOLc = await contractpC6cYPP.claimable.call(accountT27Qcpd, {from: accounts[2]});
		const nullzPfZ5Qz = await contractpC6cYPP.transferFrom.call(srckVHXi9C, dstTQMgUHH, valuebs3wu8G, {from: accounts[2]});

		assert.equal(nullQG1fDvH, 0)
		assert.equal(nulljmTrwsf, true)
		assert.equal(nullsK9eOLc, 0)
		await expect(contractpC6cYPP.transferFrom.call(srckVHXi9C, dstTQMgUHH, valuebs3wu8G, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractkSdZmp7 = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountJlWmh9 = accounts[4]
		const accountwT4g7LV = accounts[1]
		const valueDk4nX9p = BigInt("1774")
		const dstpnPjICg = accounts[2]
		const valueeHIuGwm = BigInt("679")
		const dstrpmLzBN = accounts[0]
		const srcPxPqkfl = accounts[0]
		const value2ghpWd = BigInt("1736")
		const spenderM4SYS29 = accounts[1]
		const nullXroaUId = await contractkSdZmp7.claimable.call(accountJlWmh9, {from: accounts[3]});
		const nullqXKLGCZ = await contractkSdZmp7.claimable.call(accountwT4g7LV, {from: accounts[4]});
		const nullNy2yycZ = await contractkSdZmp7.transfer.call(dstpnPjICg, valueDk4nX9p, {from: accounts[1]});
		const nullrLmYp3 = await contractkSdZmp7.transferFrom.call(srcPxPqkfl, dstrpmLzBN, valueeHIuGwm, {from: accounts[2]});
		const nullbjbjAvj = await contractkSdZmp7.approve.call(spenderM4SYS29, value2ghpWd, {from: accounts[4]});

		assert.equal(nullXroaUId, 0)
		assert.equal(nullqXKLGCZ, 0)
		await expect(contractkSdZmp7.transfer.call(dstpnPjICg, valueDk4nX9p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractD2j1W1y = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountPXnDQsk = accounts[5]
		const toggleB2DmTcm = false
		const addrPc2MHGt = accounts[5]
		const nullCFmd7Oy = await contractD2j1W1y.claimable.call(accountPXnDQsk, {from: accounts[3]});
		await contractD2j1W1y.setBridge.call(addrPc2MHGt, toggleB2DmTcm, {from: accounts[1]});

		assert.equal(nullCFmd7Oy, 0)
	});
})