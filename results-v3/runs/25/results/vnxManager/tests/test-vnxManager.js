const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerqlsNarv = await vnxManager.new({from: accounts[4]});
		const stringtNVk6u = "YkLnRkO7NBkjBgCaoisMapbhGKRvzrWqM26aqTHB8vR1dMuAXyXOfGX55YaNlcazCfuHiZmHJeYXc2JC1w7abh101Q2u"
		await vnxManagerqlsNarv.onlyOwner.call({from: accounts[1]});
		const uint256Q9CYeEK = await vnxManagerqlsNarv.addRootRole.call(stringtNVk6u, {from: accounts[5]});
		await vnxManagerqlsNarv.renounceOwnership.call({from: accounts[0]});

		await expect(vnxManagerqlsNarv.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWoItpeG = await vnxManager.new({from: accounts[4]});
		const stringEBT2sLg = "xebPPlcj1ql9hPsRg0aTByHNn"
		const addressTInE2Y = await vnxManagerWoItpeG.owner.call({from: accounts[1]});
		const boolpebZoOY = await vnxManagerWoItpeG.isOwner.call({from: accounts[1]});
		const uint256d6vjUK = await vnxManagerWoItpeG.addRootRole.call(stringEBT2sLg, {from: accounts[3]});
		await vnxManagerWoItpeG.onlyOwner.call({from: accounts[1]});

		assert.equal(addressTInE2Y, 0x11B1771ee8D9cEd18a94F61C90C345e105C4C14c)
		assert.equal(boolpebZoOY, false)
		assert.equal(uint256d6vjUK, BigInt("0"))
		await expect(vnxManagerWoItpeG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagere0beVji = await vnxManager.new({from: accounts[1]});
		const stringzdW1Vr4 = "5MzngcdxDEGMAHeGDwLddHHJbTKRrbBUolVsUlNjkbytpWhKcgqEjTiCrJsvPcQPVAGmIWoEenoTVHSonuCwwBHjFM2VBiAzM5"
		const stringJNoP3Q = "OdQFYbr6dmfJ0Ijg6US2Yl0mRsdOvYoeijkKfC9x9EUqL65Mso4KBmTkhqSwR5REjMeu0CNygQHSN5APcAKNaOn90WFn"
		const addresse3PXItp = await vnxManagere0beVji.owner.call({from: accounts[4]});
		const booljukbi7M = await vnxManagere0beVji.isAdmin.call({from: accounts[1]});
		const uint256QA1PdUb = await vnxManagere0beVji.addRootRole.call(stringzdW1Vr4, {from: accounts[2]});
		const uint256QzckKfm = await vnxManagere0beVji.addRootRole.call(stringJNoP3Q, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresse3PXItp, 0xd137f59E9E064Caa1902c61B2F2aa80EB5BBfc3e)
		assert.equal(booljukbi7M, true)
		assert.equal(uint256QA1PdUb, BigInt("0"))
		assert.equal(uint256QzckKfm, BigInt("0"))
	});

	it('test for vnxManager', async () => {
		const vnxManager4ye7la = await vnxManager.new({from: accounts[5]});
		const addressO01CO8 = accounts[3]
		const addressxIRVeHw = accounts[4]
		const addresskKodhK7 = accounts[1]
		await vnxManager4ye7la.renounceOwnership.call({from: accounts[2]});
		const addressFYMDhZT = await vnxManager4ye7la.transferOwnership.call(addressO01CO8, {from: accounts[1]});
		const boolJ71Hg9S = await vnxManager4ye7la.transferContractOwnership.call(addresskKodhK7, addressxIRVeHw, {from: accounts[2]});

		await expect(vnxManager4ye7la.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerx69Dgwh = await vnxManager.new({from: accounts[3]});
		const uinttEPJs2C = BigInt("1403")
		const addressVQHtXvJ = accounts[5]
		await vnxManagerx69Dgwh.renounceOwnership.call({from: accounts[3]});
		const boolJMau3U = await vnxManagerx69Dgwh.hasRole.call(addressVQHtXvJ, uinttEPJs2C, {from: accounts[5]});
		await vnxManagerx69Dgwh.renounceOwnership.call({from: accounts[4]});
		await vnxManagerx69Dgwh.onlyAdmin.call({from: accounts[2]});

		await expect(vnxManagerx69Dgwh.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerKHtLRIx = await vnxManager.new({from: accounts[3]});
		const uintogkCDsR = BigInt("1016")
		const stringAA3rZGa = "3f0PC9N23zsztpQvD1baDVBwf9"
		const uintBedQ3Fg = BigInt("541")
		const stringWXEMYQx = "afIowrNHNDjlF2SdESE8tKjaDqlr"
		const addressnWXFZeu = await vnxManagerKHtLRIx.owner.call({from: accounts[3]});
		const uint256COjoUJL = await vnxManagerKHtLRIx.totalRoles.call({from: accounts[0]});
		const uint256GUkxeG1 = await vnxManagerKHtLRIx.addRole.call(stringAA3rZGa, uintogkCDsR, {from: accounts[3]});
		const uint256i6zr3Gu = await vnxManagerKHtLRIx.addRole.call(stringWXEMYQx, uintBedQ3Fg, {from: accounts[0]});

		assert.equal(addressnWXFZeu, 0x09F690675aD837Db37619bC267a33dF1857e7C5d)
		assert.equal(uint256COjoUJL, BigInt("1"))
		await expect(vnxManagerKHtLRIx.addRole.call(stringAA3rZGa, uintogkCDsR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerqlsNarv = await vnxManager.new({from: accounts[4]});
		const address9PZd4Q = accounts[1]
		const addresseT88wqQ = accounts[4]
		const uintSwUgUFo = BigInt("726")
		const stringnNHY1mX = "cEQgirBP8SODYwkyzs8IukgntCS87TqD5bEdDLepq"
		const stringtNVk6u = "YkLnRkO7NBkjBgCaoisMapbhGKRvzrWqM26aqTHB8vR1dMuAXyXOfGX55YaNlcazCfuHuZmHJeYXc2JC1w7abh101Q2u"
		const boolLx5KcKa = await vnxManagerqlsNarv.transferContractOwnership.call(addresseT88wqQ, address9PZd4Q, {from: accounts[2]});
		const uint256zDrXU8P = await vnxManagerqlsNarv.addRole.call(stringnNHY1mX, uintSwUgUFo, {from: accounts[3]});
		const uint256Q9CYeEK = await vnxManagerqlsNarv.addRootRole.call(stringtNVk6u, {from: accounts[5]});
		await vnxManagerqlsNarv.renounceOwnership.call({from: accounts[0]});

		await expect(vnxManagerqlsNarv.transferContractOwnership.call(addresseT88wqQ, address9PZd4Q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerqlsNarv = await vnxManager.new({from: accounts[4]});
		const stringtNVk6u = "YkLnRkO7NBkjBgCaoisMapbhGKRvzrWqM26aqlHB8vR1dMuAXyXOfGX55YaNlcazCfuHuZmHJeYXc2JC1w7abh101Q2u"
		const uintouVgTK4 = BigInt("132")
		const addressreWTwa2 = accounts[4]
		const uint256Q9CYeEK = await vnxManagerqlsNarv.addRootRole.call(stringtNVk6u, {from: accounts[5]});
		const addressAmXcams = await vnxManagerqlsNarv.addBearer.call(addressreWTwa2, uintouVgTK4, {from: accounts[3]});

		assert.equal(uint256Q9CYeEK, BigInt("0"))
		await expect(vnxManagerqlsNarv.addBearer.call(addressreWTwa2, uintouVgTK4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerqlsNarv = await vnxManager.new({from: accounts[4]});
		const uintqZu6C7 = BigInt("239")
		const addressNKuaOKl = accounts[2]
		const stringtNVk6u = "YkLnRkO7NBjBgCaoisMapbhGKRvzrWqM26aqTHB8vR1dMuAXyXOfGX55YaNlcazCfuHuZmHJeYXc2JC1w7abh101Q2u"
		const boolbSyyMr6 = await vnxManagerqlsNarv.isAdmin.call({from: accounts[3]});
		const addressmSzQSGG = await vnxManagerqlsNarv.removeBearer.call(addressNKuaOKl, uintqZu6C7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Q9CYeEK = await vnxManagerqlsNarv.addRootRole.call(stringtNVk6u, {from: accounts[5]});

		assert.equal(boolbSyyMr6, false)
		await expect(vnxManagerqlsNarv.removeBearer.call(addressNKuaOKl, uintqZu6C7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerqlsNarv = await vnxManager.new({from: accounts[4]});
		const addresszQItU03 = accounts[3]
		const stringtNVk6u = "YkLnRkO7NBjBgCaoisMapbhGKRvzrWqM26aqTHB8vR1dMuAXyXOfGX55YaNlcazCfuHuZmHJeYXc2JC1w7abh101Q2u"
		const addressiWDbWI = await vnxManagerqlsNarv.transferOwnership.call(addresszQItU03, {from: accounts[4]});
		const boolbSyyMr6 = await vnxManagerqlsNarv.isAdmin.call({from: accounts[3]});
		const boolX0Yo6ye = await vnxManagerqlsNarv.isOwner.call({from: accounts[2]});
		const uint256Q9CYeEK = await vnxManagerqlsNarv.addRootRole.call(stringtNVk6u, {from: accounts[5]});

		assert.equal(boolX0Yo6ye, false)
		assert.equal(boolbSyyMr6, false)
		assert.equal(uint256Q9CYeEK, BigInt("0"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerjj8DmjV = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintz78MJYH = BigInt("1359")
		const addressnl3SM0l = accounts[2]
		const addressQOB1wJ5 = accounts[3]
		const uintCoaLm2j = BigInt("140")
		const addresse921DZJ = accounts[1]
		const boolzVrL0go = await vnxManagerjj8DmjV.isAdmin.call({from: accounts[4]});
		await vnxManagerjj8DmjV.onlyAdmin.call({from: accounts[3]});
		const boolTmUNtp = await vnxManagerjj8DmjV.hasRole.call(addressnl3SM0l, uintz78MJYH, {from: "0x0000000000000000000000000000000000000001"});
		const addresswcFvj5T = await vnxManagerjj8DmjV.transferOwnership.call(addressQOB1wJ5, {from: accounts[1]});
		await vnxManagerjj8DmjV.onlyOwner.call({from: accounts[0]});
		const addressBT9MWd7 = await vnxManagerjj8DmjV.removeBearer.call(addresse921DZJ, uintCoaLm2j, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for vnxManager', async () => {
		const vnxManagerqlsNarv = await vnxManager.new({from: accounts[4]});
		const addressAGc3Sa3 = accounts[0]
		const addressb5OU8jR = accounts[1]
		const stringtNVk6u = "YkLnRkO7NBkjBgCaoisMapbhGKRvzrWqM26aqTHB8vR1dMuAXyXOfGX55YaNlcazCfuHuZmJeYXc2JC1w7abh101Q2u"
		const boolFvwzRZF = await vnxManagerqlsNarv.isAdmin.call({from: accounts[0]});
		const boolqLKcFH = await vnxManagerqlsNarv.transferContractOwnership.call(addressb5OU8jR, addressAGc3Sa3, {from: accounts[4]});
		const uint256Q9CYeEK = await vnxManagerqlsNarv.addRootRole.call(stringtNVk6u, {from: accounts[5]});

		assert.equal(boolFvwzRZF, false)
		await expect(vnxManagerqlsNarv.transferContractOwnership.call(addressb5OU8jR, addressAGc3Sa3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})