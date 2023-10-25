const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractNpisiaA = await VBZRXWrapper.new({from: accounts[4]});
		const accountzGUUgh6 = accounts[4]
		const valueqCsTHfI = BigInt("1009")
		const valueOkwzEOD = BigInt("309")
		const nullwgTwTOw = await contractNpisiaA.claimable.call(accountzGUUgh6, {from: accounts[4]});
		await contractNpisiaA.deposit.call(valueqCsTHfI, {from: accounts[4]});
		await contractNpisiaA.withdraw.call(valueOkwzEOD, {from: accounts[4]});

		await expect(contractNpisiaA.claimable.call(accountzGUUgh6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractRKC6nR = await VBZRXWrapper.new({from: accounts[4]});
		const valuez0NzLV = BigInt("343")
		const dstX1fK6Vg = accounts[2]
		const srcrKsIQTs = accounts[0]
		const valueipnjFwb = BigInt("1175")
		const spenderFEZ280S = "0x0000000000000000000000000000000000000001"
		const accountYOiMGng = accounts[0]
		const valuezUFFZ4E = BigInt("1536")
		const dstSSkQLAC = accounts[1]
		const srcW9oFzUj = accounts[0]
		const nullyRw4hyr = await contractRKC6nR.transferFrom.call(srcrKsIQTs, dstX1fK6Vg, valuez0NzLV, {from: accounts[0]});
		const nullBWZW9ZX = await contractRKC6nR.approve.call(spenderFEZ280S, valueipnjFwb, {from: accounts[4]});
		const nullxPlnghu = await contractRKC6nR.claimable.call(accountYOiMGng, {from: accounts[2]});
		const nulll8pt5V7 = await contractRKC6nR.claim.call({from: accounts[5]});
		const nullQi9udGI = await contractRKC6nR.transferFrom.call(srcW9oFzUj, dstSSkQLAC, valuezUFFZ4E, {from: accounts[3]});

		await expect(contractRKC6nR.transferFrom.call(srcrKsIQTs, dstX1fK6Vg, valuez0NzLV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractEvqsbrN = await VBZRXWrapper.new({from: accounts[0]});
		const valuelGAv7jY = BigInt("506")
		const accountFNActLC = accounts[3]
		const accountNDWfwYm = accounts[1]
		await contractEvqsbrN.deposit.call(valuelGAv7jY, {from: accounts[2]});
		const nullhjUE5b4 = await contractEvqsbrN.claimable.call(accountFNActLC, {from: accounts[0]});
		const nullLddAMjF = await contractEvqsbrN.claimable.call(accountNDWfwYm, {from: accounts[0]});

		await expect(contractEvqsbrN.deposit.call(valuelGAv7jY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractR9f9Gj4 = await VBZRXWrapper.new({from: accounts[3]});
		const valueIjqZPsJ = BigInt("634")
		const valueMICg5T1 = BigInt("1376")
		const spenderbd0yAUH = accounts[1]
		await contractR9f9Gj4.withdraw.call(valueIjqZPsJ, {from: accounts[4]});
		await contractR9f9Gj4.exit.call({from: accounts[1]});
		const nullIH0h3s9 = await contractR9f9Gj4.claim.call({from: accounts[4]});
		const nullmrCyvMH = await contractR9f9Gj4.claim.call({from: accounts[1]});
		const nullJBW9Wl7 = await contractR9f9Gj4.approve.call(spenderbd0yAUH, valueMICg5T1, {from: accounts[0]});

		await expect(contractR9f9Gj4.withdraw.call(valueIjqZPsJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractq0Liy72 = await VBZRXWrapper.new({from: accounts[3]});
		const valueZJTFbIN = BigInt("465")
		const dstwFyYJ0B = accounts[1]
		const srcj8o3bwk = accounts[1]
		const valueaDckGJe = BigInt("1004")
		const dstzm9BQnF = accounts[1]
		const srcbkAvgsZ = accounts[3]
		const valueWrVSHEG = BigInt("781")
		const spenderLLwJdz8 = accounts[4]
		const nullXME9fw = await contractq0Liy72.claim.call({from: accounts[2]});
		const nullYWcZUgB = await contractq0Liy72.transferFrom.call(srcj8o3bwk, dstwFyYJ0B, valueZJTFbIN, {from: accounts[2]});
		const nullnYUw77 = await contractq0Liy72.transferFrom.call(srcbkAvgsZ, dstzm9BQnF, valueaDckGJe, {from: accounts[4]});
		const nullAPjvTF = await contractq0Liy72.approve.call(spenderLLwJdz8, valueWrVSHEG, {from: accounts[2]});

		assert.equal(nullXME9fw, 0)
		await expect(contractq0Liy72.transferFrom.call(srcj8o3bwk, dstwFyYJ0B, valueZJTFbIN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractoWmrSPr = await VBZRXWrapper.new({from: accounts[2]});
		const valueIXrkff = BigInt("1776")
		const spenderwkUKpAp = accounts[5]
		const accountEXDE7rY = accounts[3]
		const nullvSR2p6c = await contractoWmrSPr.approve.call(spenderwkUKpAp, valueIXrkff, {from: accounts[1]});
		const nulljCniuIu = await contractoWmrSPr.claimable.call(accountEXDE7rY, {from: accounts[4]});

		assert.equal(nullvSR2p6c, true)
		await expect(contractoWmrSPr.claimable.call(accountEXDE7rY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractVvytAsu = await VBZRXWrapper.new({from: accounts[4]});
		const valueB8L0j85 = BigInt("649")
		const valuexavKW5 = BigInt("1293")
		const valuelMGTvuP = BigInt("1455")
		const dstHa5EQ7g = accounts[1]
		const srcYVPUSgM = "0x0000000000000000000000000000000000000001"
		const valueXSoyakf = BigInt("322")
		const valuedmzfhP = BigInt("244")
		const valueWlhmPk1 = BigInt("1754")
		const spenderO4GoSlg = accounts[0]
		await contractVvytAsu.exit.call({from: accounts[4]});
		await contractVvytAsu.deposit.call(valueB8L0j85, {from: accounts[5]});
		await contractVvytAsu.withdraw.call(valuexavKW5, {from: accounts[1]});
		const nullIMc0rR = await contractVvytAsu.transferFrom.call(srcYVPUSgM, dstHa5EQ7g, valuelMGTvuP, {from: accounts[1]});
		await contractVvytAsu.withdraw.call(valueXSoyakf, {from: accounts[0]});
		await contractVvytAsu.withdraw.call(valuedmzfhP, {from: accounts[5]});
		const nullI27O0yz = await contractVvytAsu.approve.call(spenderO4GoSlg, valueWlhmPk1, {from: accounts[2]});
		const nullObrCIPi = await contractVvytAsu.claim.call({from: accounts[3]});

		await expect(contractVvytAsu.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractFKNgTYm = await VBZRXWrapper.new({from: accounts[3]});
		const valuezqmrOqG = BigInt("113")
		const dstNbghXvS = accounts[5]
		const accountMuHOWAt = accounts[5]
		const valuegZ73ZiM = BigInt("1283")
		const dstVoeBoy8 = accounts[4]
		const valueYF91H1P = BigInt("1130")
		const dstOIOvDE = accounts[1]
		const srcZikisY0 = accounts[4]
		const nullwO2UYSf = await contractFKNgTYm.transfer.call(dstNbghXvS, valuezqmrOqG, {from: accounts[0]});
		const nullDAXlB86 = await contractFKNgTYm.claimable.call(accountMuHOWAt, {from: accounts[5]});
		await contractFKNgTYm.exit.call({from: accounts[5]});
		const nulleQOsJOW = await contractFKNgTYm.transfer.call(dstVoeBoy8, valuegZ73ZiM, {from: accounts[3]});
		const nullUxzzGkS = await contractFKNgTYm.transferFrom.call(srcZikisY0, dstOIOvDE, valueYF91H1P, {from: accounts[0]});

		await expect(contractFKNgTYm.transfer.call(dstNbghXvS, valuezqmrOqG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractHxRqf9 = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuehu1WM4g = BigInt("459")
		const spenderErJB0xN = accounts[3]
		const valueaOCz7fq = BigInt("1442")
		const spendera6K2syr = accounts[1]
		const nullKGTHUaa = await contractHxRqf9.approve.call(spenderErJB0xN, valuehu1WM4g, {from: accounts[4]});
		const nullhG7jviu = await contractHxRqf9.approve.call(spendera6K2syr, valueaOCz7fq, {from: accounts[2]});
	});
})