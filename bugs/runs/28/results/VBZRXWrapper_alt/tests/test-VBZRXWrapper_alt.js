const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractzkoTAvc = await VBZRXWrapper_alt.new({from: accounts[3]});
		await contractzkoTAvc.exit.call({from: accounts[1]});
		await contractzkoTAvc.exit.call({from: accounts[3]});

		await expect(contractzkoTAvc.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractXQ3kLiE = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueyNy3TB = BigInt("144")
		const dstcKdbiTW = accounts[1]
		const srcyJdkL6X = accounts[3]
		const valueGxNx3rL = BigInt("1452")
		const valuem3rVVhh = BigInt("1533")
		const valueSiyljj = BigInt("2020")
		const nullglmdAl = await contractXQ3kLiE.transferFrom.call(srcyJdkL6X, dstcKdbiTW, valueyNy3TB, {from: accounts[2]});
		await contractXQ3kLiE.deposit.call(valueGxNx3rL, {from: accounts[5]});
		await contractXQ3kLiE.deposit.call(valuem3rVVhh, {from: "0x0000000000000000000000000000000000000001"});
		await contractXQ3kLiE.withdraw.call(valueSiyljj, {from: accounts[1]});

		await expect(contractXQ3kLiE.transferFrom.call(srcyJdkL6X, dstcKdbiTW, valueyNy3TB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractSDUtZUX = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuegztDwRe = BigInt("1060")
		const valuezMjE9d7 = BigInt("1379")
		const dstI3RnTCm = accounts[3]
		const srcGQ4JSdO = "0x0000000000000000000000000000000000000001"
		const valueTGgdepJ = BigInt("1569")
		const nullUMUL0vq = await contractSDUtZUX.claim.call({from: accounts[0]});
		await contractSDUtZUX.exit.call({from: accounts[4]});
		await contractSDUtZUX.withdraw.call(valuegztDwRe, {from: accounts[3]});
		const nullt2Oz6RE = await contractSDUtZUX.transferFrom.call(srcGQ4JSdO, dstI3RnTCm, valuezMjE9d7, {from: accounts[2]});
		await contractSDUtZUX.deposit.call(valueTGgdepJ, {from: accounts[0]});

		assert.equal(nullUMUL0vq, 0)
		await expect(contractSDUtZUX.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractYNsCXGa = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueUPIRWx7 = BigInt("671")
		const valuewtUcDlf = BigInt("33")
		const nullaaI81sC = await contractYNsCXGa.claim.call({from: accounts[3]});
		await contractYNsCXGa.exit.call({from: accounts[1]});
		await contractYNsCXGa.exit.call({from: accounts[3]});
		const nullDQox8bS = await contractYNsCXGa.claim.call({from: accounts[3]});
		await contractYNsCXGa.withdraw.call(valueUPIRWx7, {from: accounts[3]});
		await contractYNsCXGa.deposit.call(valuewtUcDlf, {from: accounts[3]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractctKarb = await VBZRXWrapper_alt.new({from: accounts[1]});
		const togglenWPdC4V = false
		const addruWuBpck = accounts[5]
		const accountS0GN1Dq = accounts[1]
		const accountDnWpsh9 = accounts[0]
		const valueXaSHwlg = BigInt("317")
		const dstOMscPfz = accounts[3]
		const srcVPm0fcg = accounts[3]
		const accountcEIIxZb = accounts[2]
		await contractctKarb.setBridge.call(addruWuBpck, togglenWPdC4V, {from: accounts[2]});
		const nulllTmRTy = await contractctKarb.claimable.call(accountS0GN1Dq, {from: accounts[0]});
		const nulldDqTdx = await contractctKarb.claim.call({from: accounts[4]});
		const nullr3BFnL = await contractctKarb.claimable.call(accountDnWpsh9, {from: accounts[4]});
		const nullmcm2zkf = await contractctKarb.transferFrom.call(srcVPm0fcg, dstOMscPfz, valueXaSHwlg, {from: accounts[1]});
		const nullLj4plWq = await contractctKarb.claimable.call(accountcEIIxZb, {from: accounts[1]});

		await expect(contractctKarb.setBridge.call(addruWuBpck, togglenWPdC4V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractLxQBjHy = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuexdf1qqB = BigInt("662")
		const valueopVBPaa = BigInt("1423")
		const valueulV9fH6 = BigInt("1502")
		const spendergTVZGIe = accounts[1]
		const valueG88OlPs = BigInt("1952")
		const dstJT1YyfU = accounts[3]
		const srcBEDPs2K = accounts[1]
		await contractLxQBjHy.deposit.call(valuexdf1qqB, {from: accounts[4]});
		await contractLxQBjHy.deposit.call(valueopVBPaa, {from: accounts[5]});
		const nullFo02JPH = await contractLxQBjHy.claim.call({from: accounts[2]});
		const nullVdNcpQZ = await contractLxQBjHy.approve.call(spendergTVZGIe, valueulV9fH6, {from: accounts[1]});
		const nullHA66bvz = await contractLxQBjHy.transferFrom.call(srcBEDPs2K, dstJT1YyfU, valueG88OlPs, {from: accounts[3]});
		const nulluVkcAep = await contractLxQBjHy.claim.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractLxQBjHy.deposit.call(valuexdf1qqB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractNbdsGEZ = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueEf8lRAh = BigInt("501")
		const dsta0qhimr = accounts[4]
		const valuenGEFIWP = BigInt("338")
		const dstiUhkOqM = accounts[5]
		const nullqatrhqp = await contractNbdsGEZ.transfer.call(dsta0qhimr, valueEf8lRAh, {from: accounts[5]});
		const nulleBMEjaY = await contractNbdsGEZ.transfer.call(dstiUhkOqM, valuenGEFIWP, {from: accounts[1]});

		await expect(contractNbdsGEZ.transfer.call(dsta0qhimr, valueEf8lRAh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractaRZ9iRM = await VBZRXWrapper_alt.new({from: accounts[5]});
		const accountxk5jrWR = accounts[2]
		const valueWTGHNJ = BigInt("350")
		const dstpzGJISY = "0x0000000000000000000000000000000000000001"
		const srcz358285 = accounts[3]
		const accountAp7PZJZ = accounts[3]
		const valuepq1bE6j = BigInt("984")
		const valueHRHcjZ4 = BigInt("768")
		const dstxBxoz54 = accounts[2]
		const srcTCkxJ2G = "0x0000000000000000000000000000000000000001"
		const nullrH2StO9 = await contractaRZ9iRM.claimable.call(accountxk5jrWR, {from: accounts[5]});
		const nullvsQbqmX = await contractaRZ9iRM.transferFrom.call(srcz358285, dstpzGJISY, valueWTGHNJ, {from: accounts[4]});
		const nullQh8n3TY = await contractaRZ9iRM.claimable.call(accountAp7PZJZ, {from: accounts[1]});
		await contractaRZ9iRM.withdraw.call(valuepq1bE6j, {from: accounts[3]});
		const nulleGnPCnQ = await contractaRZ9iRM.transferFrom.call(srcTCkxJ2G, dstxBxoz54, valueHRHcjZ4, {from: accounts[5]});

		assert.equal(nullrH2StO9, 0)
		await expect(contractaRZ9iRM.transferFrom.call(srcz358285, dstpzGJISY, valueWTGHNJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractl6QwINn = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueqAsg9i = BigInt("941")
		const spenderm2KDpwf = accounts[3]
		const valuevcrtu83 = BigInt("1211")
		const spenderjG0CzmO = accounts[4]
		const nullWokHq1B = await contractl6QwINn.approve.call(spenderm2KDpwf, valueqAsg9i, {from: accounts[2]});
		const nullUjlVP7 = await contractl6QwINn.approve.call(spenderjG0CzmO, valuevcrtu83, {from: accounts[1]});
		await contractl6QwINn.exit.call({from: accounts[1]});
		await contractl6QwINn.exit.call({from: accounts[3]});

		assert.equal(nullUjlVP7, true)
		assert.equal(nullWokHq1B, true)
		await expect(contractl6QwINn.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractiiY65qY = await VBZRXWrapper_alt.new({from: accounts[4]});
		const toggleq1fMikW = false
		const addrWXS5Pm = accounts[4]
		const togglejAZXgH = true
		const addrZL4ilAY = accounts[1]
		const valuefXDQBj = BigInt("1501")
		await contractiiY65qY.setBridge.call(addrWXS5Pm, toggleq1fMikW, {from: accounts[4]});
		await contractiiY65qY.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await contractiiY65qY.setBridge.call(addrZL4ilAY, togglejAZXgH, {from: accounts[2]});
		await contractiiY65qY.withdraw.call(valuefXDQBj, {from: accounts[2]});
		const nullMIfhTR9 = await contractiiY65qY.claim.call({from: accounts[0]});

		await expect(contractiiY65qY.setBridge.call(addrWXS5Pm, toggleq1fMikW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractdHhtSn0 = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountVKW6RI2 = "0x00000000000000000000000000000000000000-1"
		const valuei3MxoVO = BigInt("268")
		const valueDQiFLuY = BigInt("538")
		const spenderF9FH2Te = accounts[0]
		const accountIsmwbLf = accounts[2]
		const nullEz3pkCv = await contractdHhtSn0.claimable.call(accountVKW6RI2, {from: accounts[4]});
		await contractdHhtSn0.deposit.call(valuei3MxoVO, {from: accounts[1]});
		const nullnZdOZnB = await contractdHhtSn0.claim.call({from: accounts[0]});
		const nullvRJ7TkJ = await contractdHhtSn0.approve.call(spenderF9FH2Te, valueDQiFLuY, {from: accounts[5]});
		const null1K2hDR = await contractdHhtSn0.claimable.call(accountIsmwbLf, {from: accounts[4]});
		await contractdHhtSn0.exit.call({from: accounts[3]});
		const nullOePHQLl = await contractdHhtSn0.claim.call({from: accounts[0]});

		await expect(contractdHhtSn0.claimable.call(accountVKW6RI2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})