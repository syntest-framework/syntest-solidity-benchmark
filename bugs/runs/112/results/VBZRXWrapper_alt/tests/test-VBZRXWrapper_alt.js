const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractuSaVDAJ = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountOKIU5dg = accounts[3]
		const accountTkj65E = accounts[3]
		const togglehWhZVvy = true
		const addreqUnFz = accounts[2]
		const nullhrKC0sM = await contractuSaVDAJ.claimable.call(accountOKIU5dg, {from: accounts[4]});
		const nullrRewOg = await contractuSaVDAJ.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullTu95Cc1 = await contractuSaVDAJ.claim.call({from: accounts[3]});
		const nullJCIVCsX = await contractuSaVDAJ.claimable.call(accountTkj65E, {from: accounts[5]});
		await contractuSaVDAJ.setBridge.call(addreqUnFz, togglehWhZVvy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullJCIVCsX, 0)
		assert.equal(nullTu95Cc1, 0)
		assert.equal(nullhrKC0sM, 0)
		assert.equal(nullrRewOg, 0)
		await expect(contractuSaVDAJ.setBridge.call(addreqUnFz, togglehWhZVvy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractWChnqWP = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuezZbGz02 = BigInt("1505")
		const dstfSQqTyF = accounts[2]
		const srce4shd8E = accounts[4]
		await contractWChnqWP.exit.call({from: accounts[3]});
		const nullcOI74p2 = await contractWChnqWP.transferFrom.call(srce4shd8E, dstfSQqTyF, valuezZbGz02, {from: accounts[0]});
		await contractWChnqWP.exit.call({from: accounts[2]});
		await contractWChnqWP.exit.call({from: accounts[4]});

		await expect(contractWChnqWP.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractbrUp8QQ = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const toggleenwDesB = true
		const addrFfKvrLN = "0x0000000000000000000000000000000000000001"
		const accountP4r9sD9 = accounts[0]
		const valuer8wsg9A = BigInt("813")
		await contractbrUp8QQ.setBridge.call(addrFfKvrLN, toggleenwDesB, {from: accounts[1]});
		const nullRMq9vkm = await contractbrUp8QQ.claimable.call(accountP4r9sD9, {from: accounts[4]});
		await contractbrUp8QQ.withdraw.call(valuer8wsg9A, {from: accounts[1]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractqjR2HRL = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueDk0jL4 = BigInt("1610")
		const dstzPiixws = "0x0000000000000000000000000000000000000001"
		const srcFJpzqbx = accounts[1]
		const nullktCd8SF = await contractqjR2HRL.claim.call({from: accounts[2]});
		const nulldrTpQJy = await contractqjR2HRL.transferFrom.call(srcFJpzqbx, dstzPiixws, valueDk0jL4, {from: accounts[2]});
		await contractqjR2HRL.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullfJZ2AQy = await contractqjR2HRL.claim.call({from: accounts[5]});

		assert.equal(nullktCd8SF, 0)
		await expect(contractqjR2HRL.transferFrom.call(srcFJpzqbx, dstzPiixws, valueDk0jL4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractrTRwNxU = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueHMsF7JN = BigInt("352")
		const valueLqVT1Vr = BigInt("434")
		const spendertUa4E4 = accounts[5]
		const valueUS1fPw = BigInt("1185")
		const dstvSykAzy = "0x0000000000000000000000000000000000000001"
		const valueoFmGD14 = BigInt("1988")
		const valuefDGYF62 = BigInt("1626")
		const dstNTXAEWz = accounts[2]
		const srcnXO0ocU = accounts[0]
		await contractrTRwNxU.deposit.call(valueHMsF7JN, {from: accounts[4]});
		const nullopZwfIP = await contractrTRwNxU.approve.call(spendertUa4E4, valueLqVT1Vr, {from: accounts[2]});
		const nulljEpRlfe = await contractrTRwNxU.transfer.call(dstvSykAzy, valueUS1fPw, {from: accounts[4]});
		await contractrTRwNxU.deposit.call(valueoFmGD14, {from: accounts[3]});
		const nullLPPhFKn = await contractrTRwNxU.transferFrom.call(srcnXO0ocU, dstNTXAEWz, valuefDGYF62, {from: accounts[4]});

		await expect(contractrTRwNxU.deposit.call(valueHMsF7JN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractNaQPuS = await VBZRXWrapper_alt.new({from: accounts[1]});
		const account62KLpd = accounts[3]
		const valuexOqsN4 = BigInt("428")
		const spenderMp2qRG = accounts[1]
		const accountHYxAk5H = accounts[3]
		const toggleQrWfMfC = true
		const addrCMXJB9q = accounts[2]
		const nulll3RmC2P = await contractNaQPuS.claimable.call(account62KLpd, {from: accounts[4]});
		const nulluSXzLSQ = await contractNaQPuS.approve.call(spenderMp2qRG, valuexOqsN4, {from: accounts[5]});
		await contractNaQPuS.exit.call({from: accounts[4]});
		const nullc3XtAD8 = await contractNaQPuS.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullFauu3hF = await contractNaQPuS.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullzhWNQIs = await contractNaQPuS.claimable.call(accountHYxAk5H, {from: accounts[5]});
		await contractNaQPuS.setBridge.call(addrCMXJB9q, toggleQrWfMfC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulll3RmC2P, 0)
		assert.equal(nulluSXzLSQ, true)
		await expect(contractNaQPuS.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractytMwks = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueqd4CFkw = BigInt("72")
		const dstfhACh5B = accounts[0]
		const value5MBMJy = BigInt("1032")
		const dstzAiHHCd = accounts[0]
		const srccrH3U4O = "0x0000000000000000000000000000000000000000"
		const nullp2DAhQ9 = await contractytMwks.transfer.call(dstfhACh5B, valueqd4CFkw, {from: accounts[4]});
		const nullKIuRqUn = await contractytMwks.transferFrom.call(srccrH3U4O, dstzAiHHCd, value5MBMJy, {from: accounts[4]});
		await contractytMwks.exit.call({from: accounts[1]});

		await expect(contractytMwks.transfer.call(dstfhACh5B, valueqd4CFkw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractWsw98A3 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const toggleQtMxMXJ = false
		const addrC6FdCL1 = accounts[0]
		const valueawqpB9Y = BigInt("1009")
		const dstR9pihy8 = accounts[1]
		const srcaTXIM53 = "0x0000000000000000000000000000000000000000"
		const toggleC2HlLDs = true
		const addrM0vSxO = accounts[1]
		await contractWsw98A3.setBridge.call(addrC6FdCL1, toggleQtMxMXJ, {from: accounts[2]});
		const nullxO3BDoK = await contractWsw98A3.transferFrom.call(srcaTXIM53, dstR9pihy8, valueawqpB9Y, {from: accounts[4]});
		await contractWsw98A3.setBridge.call(addrM0vSxO, toggleC2HlLDs, {from: accounts[2]});

		await expect(contractWsw98A3.setBridge.call(addrC6FdCL1, toggleQtMxMXJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracttDxdgLE = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueHrsHRlk = BigInt("1009")
		const dstS0pf5ie = accounts[0]
		const srczazxpAX = "0x00000000000000000000000000000000000000-1"
		const nullSymbjZX = await contracttDxdgLE.transferFrom.call(srczazxpAX, dstS0pf5ie, valueHrsHRlk, {from: accounts[4]});

		await expect(contracttDxdgLE.transferFrom.call(srczazxpAX, dstS0pf5ie, valueHrsHRlk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractlLzFE1A = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountLurozC = accounts[4]
		const valueEVoNBmh = BigInt("2037")
		const dstp8XHDkJ = "0x00000000000000000000000000000000000000-1"
		const valueUSBTIgM = BigInt("1859")
		const dstsoSV54z = accounts[1]
		const toggleswrCftW = false
		const addrLajy8tn = accounts[0]
		const valueZMaY0cP = BigInt("319")
		const valueZrZ4iLb = BigInt("874")
		const spenderaPCU4R = accounts[0]
		const nullxPlX6c0 = await contractlLzFE1A.claimable.call(accountLurozC, {from: "0x0000000000000000000000000000000000000001"});
		const nullqOUnY3I = await contractlLzFE1A.transfer.call(dstp8XHDkJ, valueEVoNBmh, {from: accounts[1]});
		await contractlLzFE1A.exit.call({from: accounts[4]});
		const nullyL5pKhr = await contractlLzFE1A.transfer.call(dstsoSV54z, valueUSBTIgM, {from: accounts[0]});
		await contractlLzFE1A.setBridge.call(addrLajy8tn, toggleswrCftW, {from: accounts[2]});
		await contractlLzFE1A.withdraw.call(valueZMaY0cP, {from: accounts[5]});
		const nullytmP37i = await contractlLzFE1A.approve.call(spenderaPCU4R, valueZrZ4iLb, {from: accounts[0]});

		assert.equal(nullxPlX6c0, 0)
		await expect(contractlLzFE1A.transfer.call(dstp8XHDkJ, valueEVoNBmh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})