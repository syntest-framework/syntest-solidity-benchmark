const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenG1CR981 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressLOh7dq = accounts[1]
		const uintrjifmTo = await CryptoSecureBankTokenG1CR981.totalSupply.call({from: accounts[3]});
		const addressdF1kbGS = await CryptoSecureBankTokenG1CR981.transferOwnership.call(addressLOh7dq, {from: accounts[1]});
		await CryptoSecureBankTokenG1CR981.pause.call({from: accounts[4]});

		assert.equal(uintrjifmTo, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenG1CR981.transferOwnership.call(addressLOh7dq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVfUpdoM = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressf4XMM5i = accounts[4]
		const uintpHm6QW8 = BigInt("907")
		const addressGlKf65 = accounts[3]
		const addressIgh2Eq3 = await CryptoSecureBankTokenVfUpdoM.setOwner2.call(addressf4XMM5i, {from: accounts[3]});
		await CryptoSecureBankTokenVfUpdoM.onlyOwner.call({from: accounts[2]});
		const boolY4Db5c = await CryptoSecureBankTokenVfUpdoM.transfer.call(addressGlKf65, uintpHm6QW8, {from: accounts[2]});

		await expect(CryptoSecureBankTokenVfUpdoM.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbUFgHC7 = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressPNWsyrD = accounts[2]
		const uintuOquH2c = BigInt("344")
		const addressPHqNw24 = accounts[1]
		const uintPOjvc4d = await CryptoSecureBankTokenbUFgHC7.balanceOf.call(addressPNWsyrD, {from: accounts[2]});
		const booljWNS908 = await CryptoSecureBankTokenbUFgHC7.approve.call(addressPHqNw24, uintuOquH2c, {from: accounts[1]});
		const uintDSMuEw9 = await CryptoSecureBankTokenbUFgHC7.totalSupply.call({from: accounts[0]});
		await CryptoSecureBankTokenbUFgHC7.whenPaused.call({from: accounts[4]});

		assert.equal(booljWNS908, true)
		assert.equal(uintDSMuEw9, BigInt("100000000000000000000000000"))
		assert.equal(uintPOjvc4d, BigInt("0"))
		await expect(CryptoSecureBankTokenbUFgHC7.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZB51Lu1 = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressKnfQEV = accounts[1]
		const boolq9vUfHx = await CryptoSecureBankTokenZB51Lu1.deprecate.call(addressKnfQEV, {from: accounts[1]});
		await CryptoSecureBankTokenZB51Lu1.whenPaused.call({from: accounts[4]});
		await CryptoSecureBankTokenZB51Lu1.pause.call({from: accounts[0]});

		assert.equal(boolq9vUfHx, true)
		await expect(CryptoSecureBankTokenZB51Lu1.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTVk9Oel = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintJui94p = BigInt("1232")
		const addressqWGcr9S = accounts[1]
		const addresspd8S7dC = accounts[2]
		const uintOp7WkNy = BigInt("304")
		const addressQOISfCi = accounts[2]
		const boolFm8DMOU = await CryptoSecureBankTokenTVk9Oel.transferFrom.call(addresspd8S7dC, addressqWGcr9S, uintJui94p, {from: accounts[1]});
		await CryptoSecureBankTokenTVk9Oel.unpause.call({from: accounts[4]});
		const boolpSOP7xM = await CryptoSecureBankTokenTVk9Oel.transfer.call(addressQOISfCi, uintOp7WkNy, {from: accounts[2]});
		await CryptoSecureBankTokenTVk9Oel.onlyOwner.call({from: accounts[5]});
		await CryptoSecureBankTokenTVk9Oel.onlyOwner.call({from: accounts[1]});

		await expect(CryptoSecureBankTokenTVk9Oel.transferFrom.call(addresspd8S7dC, addressqWGcr9S, uintJui94p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLSAR2XN = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintSrHlgA8 = BigInt("121")
		const addressBbXsgmR = accounts[1]
		const uinta9A5Zse = BigInt("266")
		const addressN60ZWqy = "0x0000000000000000000000000000000000000001"
		const addressU5bQMuS = accounts[4]
		const uintg6rtEdB = BigInt("1811")
		const addresst3EpyJI = "0x0000000000000000000000000000000000000001"
		const boolXY8LFUu = await CryptoSecureBankTokenLSAR2XN.approve.call(addressBbXsgmR, uintSrHlgA8, {from: accounts[0]});
		const booljxq0Rd = await CryptoSecureBankTokenLSAR2XN.transfer.call(addressN60ZWqy, uinta9A5Zse, {from: accounts[3]});
		await CryptoSecureBankTokenLSAR2XN.unpause.call({from: accounts[2]});
		await CryptoSecureBankTokenLSAR2XN.unpause.call({from: accounts[5]});
		const addressy0w9SsI = await CryptoSecureBankTokenLSAR2XN.removeBlackList.call(addressU5bQMuS, {from: accounts[1]});
		await CryptoSecureBankTokenLSAR2XN.whenNotPaused.call({from: accounts[3]});
		const uintYlMOx9p = await CryptoSecureBankTokenLSAR2XN.totalSupply.call({from: accounts[1]});
		const booleiwuhaS = await CryptoSecureBankTokenLSAR2XN.transfer.call(addresst3EpyJI, uintg6rtEdB, {from: accounts[1]});

		assert.equal(boolXY8LFUu, true)
		await expect(CryptoSecureBankTokenLSAR2XN.transfer.call(addressN60ZWqy, uinta9A5Zse, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLSAR2XN = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressNNRKdJd = accounts[2]
		const uintvEswxrr = BigInt("121")
		const addressCGkyX5 = accounts[1]
		const uintDI1qJuo = BigInt("1811")
		const addresstaHkDU = "0x0000000000000000000000000000000000000001"
		const boolibZuqrI = await CryptoSecureBankTokenLSAR2XN.getBlackListStatus.call(addressNNRKdJd, {from: accounts[1]});
		const boolXY8LFUu = await CryptoSecureBankTokenLSAR2XN.approve.call(addressCGkyX5, uintvEswxrr, {from: accounts[0]});
		await CryptoSecureBankTokenLSAR2XN.unpause.call({from: accounts[2]});
		await CryptoSecureBankTokenLSAR2XN.unpause.call({from: accounts[5]});
		await CryptoSecureBankTokenLSAR2XN.whenNotPaused.call({from: accounts[3]});
		const booleiwuhaS = await CryptoSecureBankTokenLSAR2XN.transfer.call(addresstaHkDU, uintDI1qJuo, {from: accounts[1]});

		assert.equal(boolXY8LFUu, true)
		assert.equal(boolibZuqrI, false)
		await expect(CryptoSecureBankTokenLSAR2XN.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbUFgHC7 = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintwSDD41 = BigInt("344")
		const addressJuLIOiP = accounts[1]
		const uinttDw8FQ0 = BigInt("1967")
		const addressl31AzMo = accounts[2]
		const addressCctIkKo = accounts[2]
		const booljWNS908 = await CryptoSecureBankTokenbUFgHC7.approve.call(addressJuLIOiP, uintwSDD41, {from: accounts[1]});
		const addresse88lqh1 = await CryptoSecureBankTokenbUFgHC7.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyvkHYNQ = await CryptoSecureBankTokenbUFgHC7.approve.call(addressl31AzMo, uinttDw8FQ0, {from: accounts[3]});
		const addresslspSwd3 = await CryptoSecureBankTokenbUFgHC7.transferOwnership.call(addressCctIkKo, {from: accounts[2]});
		const uintDSMuEw9 = await CryptoSecureBankTokenbUFgHC7.totalSupply.call({from: accounts[0]});
		await CryptoSecureBankTokenbUFgHC7.whenPaused.call({from: accounts[4]});

		assert.equal(addresse88lqh1, 0x6F9c23988622C5295b5699267be609eA8fF9559f)
		assert.equal(booljWNS908, true)
		assert.equal(boolyvkHYNQ, true)
		await expect(CryptoSecureBankTokenbUFgHC7.transferOwnership.call(addressCctIkKo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbUFgHC7 = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressfBc27Ah = accounts[2]
		const uintlbcoiiO = BigInt("385")
		const addressns7UOdA = accounts[1]
		const uintBJC6V97 = BigInt("344")
		const address4EuHhd = accounts[1]
		const uintPOjvc4d = await CryptoSecureBankTokenbUFgHC7.balanceOf.call(addressfBc27Ah, {from: accounts[2]});
		const boolU9bp6ep = await CryptoSecureBankTokenbUFgHC7.transfer.call(addressns7UOdA, uintlbcoiiO, {from: accounts[5]});
		const booljWNS908 = await CryptoSecureBankTokenbUFgHC7.approve.call(address4EuHhd, uintBJC6V97, {from: accounts[1]});
		const uintDSMuEw9 = await CryptoSecureBankTokenbUFgHC7.totalSupply.call({from: accounts[0]});
		await CryptoSecureBankTokenbUFgHC7.whenPaused.call({from: accounts[4]});

		assert.equal(boolU9bp6ep, true)
		assert.equal(booljWNS908, true)
		assert.equal(uintDSMuEw9, BigInt("100000000000000000000000000"))
		assert.equal(uintPOjvc4d, BigInt("0"))
		await expect(CryptoSecureBankTokenbUFgHC7.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenG1CR981 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintrjifmTo = await CryptoSecureBankTokenG1CR981.totalSupply.call({from: accounts[3]});
		await CryptoSecureBankTokenG1CR981.pause.call({from: accounts[4]});

		assert.equal(uintrjifmTo, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenG1CR981.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbUFgHC7 = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintzn48JPj = BigInt("344")
		const addressVCOTtWg = accounts[1]
		const uintjYWcTk = BigInt("1967")
		const addressfnTSo6D = accounts[2]
		const addressr4JcPfs = accounts[1]
		const addressgi81rPn = accounts[4]
		const addressRJEk32D = accounts[3]
		const addressIu7KypT = accounts[5]
		const booljWNS908 = await CryptoSecureBankTokenbUFgHC7.approve.call(addressVCOTtWg, uintzn48JPj, {from: accounts[1]});
		const addresse88lqh1 = await CryptoSecureBankTokenbUFgHC7.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyvkHYNQ = await CryptoSecureBankTokenbUFgHC7.approve.call(addressfnTSo6D, uintjYWcTk, {from: accounts[3]});
		const uintz3W6XXL = await CryptoSecureBankTokenbUFgHC7.allowance.call(addressgi81rPn, addressr4JcPfs, {from: accounts[0]});
		const addresslspSwd3 = await CryptoSecureBankTokenbUFgHC7.transferOwnership.call(addressRJEk32D, {from: accounts[2]});
		const uintDSMuEw9 = await CryptoSecureBankTokenbUFgHC7.totalSupply.call({from: accounts[0]});
		await CryptoSecureBankTokenbUFgHC7.whenPaused.call({from: accounts[4]});
		const addressgHvpgX5 = await CryptoSecureBankTokenbUFgHC7.removeBlackList.call(addressIu7KypT, {from: accounts[2]});

		assert.equal(addresse88lqh1, 0x6F9c23988622C5295b5699267be609eA8fF9559f)
		assert.equal(booljWNS908, true)
		assert.equal(boolyvkHYNQ, true)
		assert.equal(uintz3W6XXL, BigInt("0"))
		await expect(CryptoSecureBankTokenbUFgHC7.transferOwnership.call(addressRJEk32D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeniugyuM = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintuYHStoB = BigInt("933")
		const addresshAStc9v = "0x0000000000000000000000000000000000000001"
		const uinttpgzq2L = BigInt("1270")
		const addressDzDiGRz = accounts[5]
		const addressw57SFSs = accounts[0]
		const uintCsVGYNp = BigInt("1124")
		const addressJkh6Wxr = accounts[1]
		const addressYxAVRK9 = accounts[2]
		const boolbxm7lx9 = await CryptoSecureBankTokeniugyuM.redeem.call(uintuYHStoB, {from: accounts[0]});
		const uintxYmIKB7 = await CryptoSecureBankTokeniugyuM.balanceOf.call(addresshAStc9v, {from: accounts[1]});
		const boolJ0msQtz = await CryptoSecureBankTokeniugyuM.transferFrom.call(addressw57SFSs, addressDzDiGRz, uinttpgzq2L, {from: accounts[1]});
		await CryptoSecureBankTokeniugyuM.whenNotPaused.call({from: accounts[1]});
		const boolYCntXKJ = await CryptoSecureBankTokeniugyuM.transferFrom.call(addressYxAVRK9, addressJkh6Wxr, uintCsVGYNp, {from: accounts[0]});

		assert.equal(boolbxm7lx9, true)
		assert.equal(uintxYmIKB7, BigInt("0"))
		await expect(CryptoSecureBankTokeniugyuM.transferFrom.call(addressw57SFSs, addressDzDiGRz, uinttpgzq2L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZGruZii = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTSDte8 = accounts[5]
		const addressoDKIoR = accounts[2]
		const addressiP3CNOQ = accounts[3]
		const addressOf7qHk3 = accounts[4]
		const addressKRpy0Qh = accounts[2]
		const uintGAiVsCg = BigInt("457")
		const addressVI0g2hv = "0x0000000000000000000000000000000000000001"
		const uintr39Z1nE = BigInt("791")
		const address7ElEQl = accounts[1]
		const addressZbseQjW = await CryptoSecureBankTokenZGruZii.setOwner2.call(addressTSDte8, {from: accounts[2]});
		const addressYoP1Wa3 = await CryptoSecureBankTokenZGruZii.transferOwnership.call(addressoDKIoR, {from: accounts[2]});
		const addressLMqGmpw = await CryptoSecureBankTokenZGruZii.addBlackList.call(addressiP3CNOQ, {from: accounts[1]});
		const uintrT4Wtj3 = await CryptoSecureBankTokenZGruZii.allowance.call(addressKRpy0Qh, addressOf7qHk3, {from: accounts[1]});
		const boolLdzw5A1 = await CryptoSecureBankTokenZGruZii.transfer.call(addressVI0g2hv, uintGAiVsCg, {from: accounts[5]});
		const boolFoOiqMP = await CryptoSecureBankTokenZGruZii.approve.call(address7ElEQl, uintr39Z1nE, {from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeni1KunlQ = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressqzaFia6 = accounts[4]
		const uintpT6emty = BigInt("274")
		const addressDsRWh3w = accounts[2]
		const uintSPVoUwK = BigInt("1957")
		const addressEcY5WBE = accounts[3]
		const addressUxdmxWP = accounts[3]
		const addressnF1vvyN = accounts[0]
		const addresswZki6JH = await CryptoSecureBankTokeni1KunlQ.removeBlackList.call(addressqzaFia6, {from: accounts[0]});
		const bool195amb = await CryptoSecureBankTokeni1KunlQ.approve.call(addressDsRWh3w, uintpT6emty, {from: accounts[0]});
		const boollVpqB08 = await CryptoSecureBankTokeni1KunlQ.transferFrom.call(addressUxdmxWP, addressEcY5WBE, uintSPVoUwK, {from: accounts[3]});
		const boolTnemggH = await CryptoSecureBankTokeni1KunlQ.deprecate.call(addressnF1vvyN, {from: accounts[4]});
		await CryptoSecureBankTokeni1KunlQ.pause.call({from: accounts[3]});

		assert.equal(bool195amb, true)
		await expect(CryptoSecureBankTokeni1KunlQ.transferFrom.call(addressUxdmxWP, addressEcY5WBE, uintSPVoUwK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeniugyuM = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintV0LHKNC = BigInt("163")
		const addressjRDfVi9 = accounts[3]
		const addresswYenLdo = accounts[0]
		const addressQCoaIuy = "0x0000000000000000000000000000000000000002"
		const boolil8RmnN = await CryptoSecureBankTokeniugyuM.approve.call(addressjRDfVi9, uintV0LHKNC, {from: "0x0000000000000000000000000000000000000001"});
		const addressVcMZFb = await CryptoSecureBankTokeniugyuM.getOwner.call({from: accounts[2]});
		const addresssX4ohP = await CryptoSecureBankTokeniugyuM.addBlackList.call(addresswYenLdo, {from: accounts[0]});
		const uintxYmIKB7 = await CryptoSecureBankTokeniugyuM.balanceOf.call(addressQCoaIuy, {from: accounts[1]});

		assert.equal(addressVcMZFb, 0x4C7F4c3047e4FfD1b6B37d8b16235de38Fb9591a)
		assert.equal(boolil8RmnN, true)
		assert.equal(uintxYmIKB7, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeniugyuM = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressNvi1QZ = "0x0000000000000000000000000000000000000000"
		const addressSWPfWhx = accounts[4]
		const uintgGaZgMl = BigInt("1938")
		const addressbAchx2D = accounts[1]
		const uintxYmIKB7 = await CryptoSecureBankTokeniugyuM.balanceOf.call(addressNvi1QZ, {from: accounts[1]});
		const addressXsje0A = await CryptoSecureBankTokeniugyuM.destroyBlackFunds.call(addressSWPfWhx, {from: accounts[0]});
		const boolkmu4GiM = await CryptoSecureBankTokeniugyuM.transfer.call(addressbAchx2D, uintgGaZgMl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintxYmIKB7, BigInt("0"))
		await expect(CryptoSecureBankTokeniugyuM.destroyBlackFunds.call(addressSWPfWhx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbUFgHC7 = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintliHL9PS = BigInt("0")
		const addressgGteRJm = accounts[1]
		const boolU9bp6ep = await CryptoSecureBankTokenbUFgHC7.transfer.call(addressgGteRJm, uintliHL9PS, {from: accounts[5]});

		assert.equal(boolU9bp6ep, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenf2Skv0b = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressyXkpmtS = accounts[0]
		const addressapxEzqH = accounts[1]
		const uintDttbiTR = BigInt("415")
		const addressjeCvIja = "0x0000000000000000000000000000000000000001"
		const addressO52ISi9 = accounts[1]
		const addressOqeFQ2i = accounts[3]
		const uintVwTKtng = BigInt("208")
		const addressADWfgUX = accounts[3]
		const addressGmoDxrf = accounts[4]
		const addressXa6jxm6 = await CryptoSecureBankTokenf2Skv0b.transferOwnership.call(addressyXkpmtS, {from: accounts[4]});
		const addressvK4lG4T = await CryptoSecureBankTokenf2Skv0b.addBlackList.call(addressapxEzqH, {from: "0x0000000000000000000000000000000000000001"});
		const boolGfrKAtS = await CryptoSecureBankTokenf2Skv0b.transferFrom.call(addressO52ISi9, addressjeCvIja, uintDttbiTR, {from: accounts[0]});
		const addresseGfNOZZ = await CryptoSecureBankTokenf2Skv0b.transferOwnership.call(addressOqeFQ2i, {from: accounts[1]});
		const uintwCQBlRr = await CryptoSecureBankTokenf2Skv0b.totalSupply.call({from: accounts[0]});
		const boolY6AZcKf = await CryptoSecureBankTokenf2Skv0b.transferFrom.call(addressGmoDxrf, addressADWfgUX, uintVwTKtng, {from: accounts[3]});

		await expect(CryptoSecureBankTokenf2Skv0b.addBlackList.call(addressapxEzqH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})