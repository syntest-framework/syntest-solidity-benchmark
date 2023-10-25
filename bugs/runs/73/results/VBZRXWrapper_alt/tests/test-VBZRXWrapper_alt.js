const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractrEp91YO = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueh7WUGni = BigInt("1571")
		const dstglDBZ1w = accounts[0]
		const toggleCviqfyZ = true
		const addrqP7K32O = accounts[1]
		const accountPPUtBS1 = accounts[3]
		const valueVppmHxD = BigInt("1092")
		const nullZHzhEr = await contractrEp91YO.transfer.call(dstglDBZ1w, valueh7WUGni, {from: accounts[1]});
		await contractrEp91YO.exit.call({from: accounts[1]});
		await contractrEp91YO.setBridge.call(addrqP7K32O, toggleCviqfyZ, {from: accounts[3]});
		const nullyLBsq4Q = await contractrEp91YO.claimable.call(accountPPUtBS1, {from: accounts[4]});
		const nullifIL0s2 = await contractrEp91YO.claim.call({from: accounts[2]});
		await contractrEp91YO.deposit.call(valueVppmHxD, {from: accounts[1]});

		await expect(contractrEp91YO.transfer.call(dstglDBZ1w, valueh7WUGni, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractOfaYb9x = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueKdKPLyR = BigInt("519")
		const valueA45aBOa = BigInt("961")
		const togglekO88Y4W = true
		const addrFYOoWrk = accounts[0]
		await contractOfaYb9x.deposit.call(valueKdKPLyR, {from: accounts[0]});
		await contractOfaYb9x.withdraw.call(valueA45aBOa, {from: accounts[4]});
		await contractOfaYb9x.setBridge.call(addrFYOoWrk, togglekO88Y4W, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractOfaYb9x.deposit.call(valueKdKPLyR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractp3mMzk = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountF2tzjtZ = accounts[4]
		const valuewUWURN = BigInt("2022")
		const spenderMbBUSp = "0x0000000000000000000000000000000000000001"
		const valueKpHEvIa = BigInt("281")
		const dstgVkgkiT = accounts[0]
		const valuewR0hB39 = BigInt("277")
		const spenderWagRRcf = accounts[4]
		const valueVzQsDmg = BigInt("1624")
		const value1tgHw3 = BigInt("156")
		const nullPdjw99a = await contractp3mMzk.claimable.call(accountF2tzjtZ, {from: accounts[3]});
		const nullWdoMW8Z = await contractp3mMzk.approve.call(spenderMbBUSp, valuewUWURN, {from: accounts[4]});
		const nullewFkl4y = await contractp3mMzk.transfer.call(dstgVkgkiT, valueKpHEvIa, {from: accounts[2]});
		const nullRbUkVRO = await contractp3mMzk.approve.call(spenderWagRRcf, valuewR0hB39, {from: "0x0000000000000000000000000000000000000001"});
		await contractp3mMzk.deposit.call(valueVzQsDmg, {from: accounts[1]});
		await contractp3mMzk.deposit.call(value1tgHw3, {from: accounts[0]});

		assert.equal(nullPdjw99a, 0)
		assert.equal(nullWdoMW8Z, true)
		await expect(contractp3mMzk.transfer.call(dstgVkgkiT, valueKpHEvIa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractkJIZita = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuejWI67Ox = BigInt("26")
		const valueGuaGGmY = BigInt("965")
		const dstcIfCMSh = accounts[4]
		const valuejYaJxh = BigInt("1106")
		const dsteWoKV6Z = accounts[1]
		const srclUXD4H = accounts[2]
		const valueq16j5Qi = BigInt("563")
		const dstVtvFaFZ = accounts[1]
		const srcj4MCnbo = accounts[3]
		const accountKPioFI5 = "0x0000000000000000000000000000000000000001"
		await contractkJIZita.exit.call({from: accounts[3]});
		await contractkJIZita.deposit.call(valuejWI67Ox, {from: accounts[0]});
		const nullLF1qFkx = await contractkJIZita.transfer.call(dstcIfCMSh, valueGuaGGmY, {from: accounts[4]});
		const nullrmIuyGc = await contractkJIZita.transferFrom.call(srclUXD4H, dsteWoKV6Z, valuejYaJxh, {from: accounts[1]});
		const nullhhGA9rR = await contractkJIZita.transferFrom.call(srcj4MCnbo, dstVtvFaFZ, valueq16j5Qi, {from: accounts[1]});
		const nulluaCPIr1 = await contractkJIZita.claimable.call(accountKPioFI5, {from: accounts[1]});

		await expect(contractkJIZita.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractnFSkJ57 = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueVhfrNkj = BigInt("852")
		const accountOarBoKG = "0x0000000000000000000000000000000000000001"
		const nullt01KoQ = await contractnFSkJ57.claim.call({from: accounts[2]});
		await contractnFSkJ57.exit.call({from: accounts[4]});
		await contractnFSkJ57.exit.call({from: accounts[3]});
		await contractnFSkJ57.exit.call({from: accounts[1]});
		await contractnFSkJ57.withdraw.call(valueVhfrNkj, {from: accounts[4]});
		const nullr692su = await contractnFSkJ57.claimable.call(accountOarBoKG, {from: accounts[1]});

		assert.equal(nullt01KoQ, 0)
		await expect(contractnFSkJ57.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract74eCmW = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountUHdiGxy = accounts[4]
		const valueErLwK64 = BigInt("2019")
		const spenderYiuzhF8 = "0x0000000000000000000000000000000000000001"
		const toggleBvVDMHt = true
		const addrndmfjWs = accounts[4]
		const valuexr5L27r = BigInt("277")
		const spenderRDsgO3 = accounts[4]
		const valuec6t0pO9 = BigInt("1624")
		const valueplAAWGu = BigInt("156")
		const nullvmlm2E = await contract74eCmW.claimable.call(accountUHdiGxy, {from: accounts[3]});
		const nullizmETRH = await contract74eCmW.approve.call(spenderYiuzhF8, valueErLwK64, {from: accounts[4]});
		await contract74eCmW.setBridge.call(addrndmfjWs, toggleBvVDMHt, {from: accounts[5]});
		const nullDKEVWPT = await contract74eCmW.approve.call(spenderRDsgO3, valuexr5L27r, {from: "0x0000000000000000000000000000000000000001"});
		await contract74eCmW.deposit.call(valuec6t0pO9, {from: accounts[1]});
		await contract74eCmW.deposit.call(valueplAAWGu, {from: accounts[0]});

		assert.equal(nullizmETRH, true)
		assert.equal(nullvmlm2E, 0)
		await expect(contract74eCmW.setBridge.call(addrndmfjWs, toggleBvVDMHt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractNYQEVVN = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueCY0gQnR = BigInt("1674")
		const spenderR2SGBFi = accounts[3]
		const toggleA1Xz6A = false
		const addrgmKIIQm = accounts[0]
		const nullBNTBMJ = await contractNYQEVVN.approve.call(spenderR2SGBFi, valueCY0gQnR, {from: accounts[2]});
		await contractNYQEVVN.setBridge.call(addrgmKIIQm, toggleA1Xz6A, {from: accounts[4]});
		const null8ARRhN = await contractNYQEVVN.claim.call({from: accounts[1]});
		await contractNYQEVVN.exit.call({from: accounts[4]});

		assert.equal(null8ARRhN, 0)
		assert.equal(nullBNTBMJ, true)
		await expect(contractNYQEVVN.claim.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractRRBsm1t = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueLE2q3i = BigInt("363")
		const spenderrBSzwp5 = accounts[3]
		const accountNTSD9ZX = accounts[2]
		const nullQ3XemIQ = await contractRRBsm1t.approve.call(spenderrBSzwp5, valueLE2q3i, {from: accounts[4]});
		const nulluKFSBju = await contractRRBsm1t.claimable.call(accountNTSD9ZX, {from: accounts[1]});
	});
})