const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractbaFkivQ = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueaogxc4H = BigInt("597")
		const spenderTaKRT0z = accounts[2]
		const valueQrxGKKt = BigInt("786")
		const dstGRwgYSr = accounts[0]
		const valueYYo1PKt = BigInt("1655")
		const valueUZA6W4G = BigInt("1127")
		const nullUqVPzrN = await contractbaFkivQ.approve.call(spenderTaKRT0z, valueaogxc4H, {from: accounts[2]});
		const nullTwtGYE = await contractbaFkivQ.transfer.call(dstGRwgYSr, valueQrxGKKt, {from: accounts[4]});
		await contractbaFkivQ.withdraw.call(valueYYo1PKt, {from: "0x0000000000000000000000000000000000000001"});
		await contractbaFkivQ.deposit.call(valueUZA6W4G, {from: accounts[1]});

		assert.equal(nullUqVPzrN, true)
		await expect(contractbaFkivQ.transfer.call(dstGRwgYSr, valueQrxGKKt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUT9l2y1 = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueqFfGEjF = BigInt("1006")
		const accountjif87Lf = accounts[0]
		const accountLNmWQdA = accounts[5]
		const nullBwHVd6 = await contractUT9l2y1.claim.call({from: accounts[0]});
		await contractUT9l2y1.withdraw.call(valueqFfGEjF, {from: accounts[3]});
		const nullb3cupX9 = await contractUT9l2y1.claimable.call(accountjif87Lf, {from: accounts[4]});
		const nullrFxcekj = await contractUT9l2y1.claimable.call(accountLNmWQdA, {from: accounts[0]});

		assert.equal(nullBwHVd6, 0)
		await expect(contractUT9l2y1.withdraw.call(valueqFfGEjF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractHli4RTQ = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valuePtqIs3m = BigInt("1214")
		const spenderermEKp0 = accounts[2]
		const accountgyDLQ5q = "0x0000000000000000000000000000000000000001"
		const valuewVepIH = BigInt("48")
		const nullHfLGRMl = await contractHli4RTQ.approve.call(spenderermEKp0, valuePtqIs3m, {from: accounts[3]});
		await contractHli4RTQ.exit.call({from: accounts[2]});
		const nullUwwMavN = await contractHli4RTQ.claimable.call(accountgyDLQ5q, {from: accounts[2]});
		await contractHli4RTQ.withdraw.call(valuewVepIH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullHfLGRMl, true)
		await expect(contractHli4RTQ.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractyf19A9 = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueoEp29Fs = BigInt("720")
		const valuezLRFRvy = BigInt("1863")
		const valueXQtoDCN = BigInt("1608")
		await contractyf19A9.deposit.call(valueoEp29Fs, {from: accounts[2]});
		await contractyf19A9.exit.call({from: accounts[3]});
		await contractyf19A9.exit.call({from: accounts[3]});
		await contractyf19A9.withdraw.call(valuezLRFRvy, {from: accounts[1]});
		await contractyf19A9.deposit.call(valueXQtoDCN, {from: accounts[5]});

		await expect(contractyf19A9.deposit.call(valueoEp29Fs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractHTfFPgp = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueSdnWCsY = BigInt("441")
		const spenderJo7c1q0 = "0x0000000000000000000000000000000000000001"
		const valuetWhZAi5 = BigInt("2008")
		const spenderQIs4f3z = accounts[1]
		const accountGpCz2CH = accounts[1]
		const valueWSFGKj1 = BigInt("1776")
		const nullmvFAJY = await contractHTfFPgp.approve.call(spenderJo7c1q0, valueSdnWCsY, {from: accounts[4]});
		const nullPDqcTz = await contractHTfFPgp.approve.call(spenderQIs4f3z, valuetWhZAi5, {from: accounts[1]});
		const nulllswXkTq = await contractHTfFPgp.claimable.call(accountGpCz2CH, {from: "0x0000000000000000000000000000000000000001"});
		const nulldLdfgLa = await contractHTfFPgp.claim.call({from: accounts[3]});
		await contractHTfFPgp.deposit.call(valueWSFGKj1, {from: accounts[0]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractnfZvkku = await VBZRXWrapper_alt.new({from: accounts[0]});
		const accountLMvNwxk = accounts[1]
		const valuedlqJSD = BigInt("1285")
		const nullTf2jXgi = await contractnfZvkku.claimable.call(accountLMvNwxk, {from: accounts[2]});
		await contractnfZvkku.withdraw.call(valuedlqJSD, {from: accounts[0]});

		assert.equal(nullTf2jXgi, 0)
		await expect(contractnfZvkku.withdraw.call(valuedlqJSD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractQHDilfl = await VBZRXWrapper_alt.new({from: accounts[0]});
		const toggleQfDbvQE = true
		const addrFM2BLaR = accounts[0]
		const accountNcJy7E0 = accounts[3]
		await contractQHDilfl.setBridge.call(addrFM2BLaR, toggleQfDbvQE, {from: accounts[0]});
		const nullP19Hih9 = await contractQHDilfl.claimable.call(accountNcJy7E0, {from: accounts[2]});
		await contractQHDilfl.exit.call({from: accounts[0]});

		assert.equal(nullP19Hih9, 0)
		await expect(contractQHDilfl.claimable.call(accountNcJy7E0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractYfPu3q9 = await VBZRXWrapper_alt.new({from: accounts[0]});
		const accountFtAJH58 = accounts[3]
		const toggleRre96iW = true
		const addrIIY5j0 = accounts[3]
		const nullB3gnRjO = await contractYfPu3q9.claimable.call(accountFtAJH58, {from: accounts[2]});
		await contractYfPu3q9.setBridge.call(addrIIY5j0, toggleRre96iW, {from: accounts[2]});

		assert.equal(nullB3gnRjO, 0)
		await expect(contractYfPu3q9.setBridge.call(addrIIY5j0, toggleRre96iW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})