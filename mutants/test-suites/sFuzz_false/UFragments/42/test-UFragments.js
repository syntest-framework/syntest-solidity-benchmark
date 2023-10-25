const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsRbuCmgz = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEEDf02j = accounts[2]
		const addressbjBuhrm = accounts[4]
		const uintYTT1YPW = BigInt("89")
		const stringmZgf03q = "7Xz1ImVU4EazCDATdxz2CR8iTR4QLUgikySeU5axdkXfSee"
		const stringJ0PDZfZ = "Uus"
		const inteAyU5dg = BigInt("804")
		const intAkfXMxa = BigInt("431")
		const addressAw2iLSf = await UFragmentsRbuCmgz.initialize.call(addressEEDf02j, {from: accounts[3]});
		const addressslEFrO = await UFragmentsRbuCmgz.initialize.call(addressbjBuhrm, {from: accounts[2]});
		const uint256q1pPCuq = await UFragmentsRbuCmgz.totalSupply.call({from: accounts[1]});
		const stringkhv6Z69 = await UFragmentsRbuCmgz.initialize.call(stringJ0PDZfZ, stringmZgf03q, uintYTT1YPW, {from: accounts[5]});
		await UFragmentsRbuCmgz.renounceOwnership.call({from: accounts[2]});
		const int256dOKBQ64 = await UFragmentsRbuCmgz.add.call(intAkfXMxa, inteAyU5dg, {from: accounts[0]});
	});

	it('test for UFragments', async () => {
		const UFragmentsMsCCCFr = await UFragments.new({from: accounts[2]});
		const intHg2Y4qS = BigInt("1693")
		const intGr7SSmY = BigInt("1860")
		const intlZi1gLd = BigInt("-330")
		const intnvLChL = BigInt("680")
		const ints1DSMe8 = BigInt("-641")
		const intVFVI1kq = BigInt("391")
//		const uint256Ur5E8PF = await UFragmentsMsCCCFr.calRebase.call({from: accounts[3]});
//		const int256ujC9t5V = await UFragmentsMsCCCFr.div.call(intGr7SSmY, intHg2Y4qS, {from: accounts[4]});
//		const int256a3XnDhJ = await UFragmentsMsCCCFr.mul.call(intnvLChL, intlZi1gLd, {from: accounts[2]});
//		const int256eB891xV = await UFragmentsMsCCCFr.add.call(intVFVI1kq, ints1DSMe8, {from: accounts[5]});

		await expect(UFragmentsMsCCCFr.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswsDfRlL = await UFragments.new({from: accounts[3]});
		const uintZZTUMZU = BigInt("1872")
		const addressft4QSeT = accounts[2]
		const intOjt0XXz = BigInt("1875")
		const intXEnfjgh = BigInt("-1989")
		const addressv3NPZnW = accounts[5]
//		const addresszhue30q = await UFragmentswsDfRlL.initRebase.call(addressft4QSeT, uintZZTUMZU, {from: accounts[3]});
//		const int256R9WZOTO = await UFragmentswsDfRlL.sub.call(intXEnfjgh, intOjt0XXz, {from: accounts[0]});
//		const addressDwUFo3l = await UFragmentswsDfRlL.transferOwnership.call(addressv3NPZnW, {from: accounts[4]});
//		await UFragmentswsDfRlL.initializer.call({from: accounts[0]});

		await expect(UFragmentswsDfRlL.initRebase.call(addressft4QSeT, uintZZTUMZU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentslovAvZ8 = await UFragments.new({from: accounts[0]});
		const addressxVxY1W = accounts[3]
		const addressxiTVCIO = accounts[4]
//		await UFragmentslovAvZ8.onlyOwner.call({from: accounts[2]});
//		const uint256EzyULxw = await UFragmentslovAvZ8.balanceOf.call(addressxVxY1W, {from: accounts[2]});
//		const addressEMJ1MF = await UFragmentslovAvZ8.transferOwnership.call(addressxiTVCIO, {from: accounts[2]});
//		const boolRRSCkwS = await UFragmentslovAvZ8.rebaseTimeInfo.call({from: accounts[0]});

		await expect(UFragmentslovAvZ8.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const boolh5FRJYC = await UFragmentsdp1QO49.rebaseTimeInfo.call({from: accounts[4]});
		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});
		const stringz7UMWmz = await UFragmentsdp1QO49.name.call({from: accounts[2]});

		assert.equal(stringWybuyf8, "")
		assert.equal(stringz7UMWmz, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsMMswdes = await UFragments.new({from: accounts[3]});
		const uintie0tRty = BigInt("927")
		const addressBBBzpng = accounts[3]
		const addressHm5Ucc = accounts[0]
		const addressCyKA4Lt = accounts[4]
//		const boolCpOJ89d = await UFragmentsMMswdes.transfer.call(addressBBBzpng, uintie0tRty, {from: "0x0000000000000000000000000000000000000001"});
//		await UFragmentsMMswdes.initializer.call({from: accounts[4]});
//		const uint256oOBp7ed = await UFragmentsMMswdes.allowance.call(addressCyKA4Lt, addressHm5Ucc, {from: "0x0000000000000000000000000000000000000001"});
//		await UFragmentsMMswdes.renounceOwnership.call({from: accounts[5]});
//		const uint256YyWYL0u = await UFragmentsMMswdes.calRebase.call({from: accounts[4]});

		await expect(UFragmentsMMswdes.transfer.call(addressBBBzpng, uintie0tRty, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const addressqXicsI = accounts[1]
		const addressbLzXM7S = accounts[2]
		const uint256jPOBOJ = await UFragmentsdp1QO49.allowance.call(addressbLzXM7S, addressqXicsI, {from: accounts[3]});
		const boolh5FRJYC = await UFragmentsdp1QO49.rebaseTimeInfo.call({from: accounts[4]});
		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});
		const stringz7UMWmz = await UFragmentsdp1QO49.name.call({from: accounts[2]});

		assert.equal(stringWybuyf8, "")
		assert.equal(stringz7UMWmz, "")
		assert.equal(uint256jPOBOJ, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const uintF4mD7Vs = BigInt("404")
		const addressB5krAZH = accounts[1]
		const addressqACC1Bv = accounts[3]
		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});
//		const boolindOtZV = await UFragmentsdp1QO49.transferFrom.call(addressqACC1Bv, addressB5krAZH, uintF4mD7Vs, {from: "0x0000000000000000000000000000000000000001"});
//		const stringz7UMWmz = await UFragmentsdp1QO49.name.call({from: accounts[2]});

		assert.equal(stringWybuyf8, "")
		await expect(UFragmentsdp1QO49.transferFrom.call(addressqACC1Bv, addressB5krAZH, uintF4mD7Vs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});
		const uint256VoSEDV = await UFragmentsdp1QO49.totalSupply.call({from: accounts[0]});
		const stringz7UMWmz = await UFragmentsdp1QO49.name.call({from: accounts[2]});

		assert.equal(stringWybuyf8, "")
		assert.equal(stringz7UMWmz, "")
		assert.equal(uint256VoSEDV, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsLMp4Xt9 = await UFragments.new({from: accounts[0]});
		const addressMtUg3yO = accounts[3]
		const uintfhTpZvF = BigInt("68")
		const addressHhjaCf = accounts[2]
//		const addressmfkFWMp = await UFragmentsLMp4Xt9.initialize.call(addressMtUg3yO, {from: accounts[3]});
//		const booljKgOUCh = await UFragmentsLMp4Xt9.approve.call(addressHhjaCf, uintfhTpZvF, {from: accounts[0]});
//		const stringgIDYrjv = await UFragmentsLMp4Xt9.name.call({from: accounts[1]});
//		const uint8h6lANht = await UFragmentsLMp4Xt9.decimals.call({from: accounts[3]});

		await expect(UFragmentsLMp4Xt9.initialize.call(addressMtUg3yO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const uint8MQdRzTl = await UFragmentsdp1QO49.decimals.call({from: accounts[0]});
		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});

		assert.equal(stringWybuyf8, "")
		assert.equal(uint8MQdRzTl, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const uintvp49S2 = BigInt("25")
		const string7x9ObS = "7kSncEPYNyE6Ar3n0q1Krb3cdvW"
		const stringMLsdF8r = "MzdaSBVxcPww2lhMV70g8JDS6K1XgQdVlcTeMFwt7NpAOG92s4QPCEd3hrA80ZJ"
		const addressv11ut1F = accounts[2]
		const stringZ4E6da1 = await UFragmentsdp1QO49.initialize.call(stringMLsdF8r, string7x9ObS, uintvp49S2, {from: accounts[2]});
//		const addressSN3NZBu = await UFragmentsdp1QO49.transferOwnership.call(addressv11ut1F, {from: accounts[1]});
//		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});

		await expect(UFragmentsdp1QO49.transferOwnership.call(addressv11ut1F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});
		const stringGZdsvUc = await UFragmentsdp1QO49.symbol.call({from: accounts[4]});

		assert.equal(stringGZdsvUc, "")
		assert.equal(stringWybuyf8, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const uintHi0r7Q = BigInt("2001")
		const addresstHQWwPk = accounts[3]
		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});
		const boolGtPJ1X4 = await UFragmentsdp1QO49.approve.call(addresstHQWwPk, uintHi0r7Q, {from: accounts[0]});

		assert.equal(boolGtPJ1X4, true)
		assert.equal(stringWybuyf8, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsdp1QO49 = await UFragments.new({from: accounts[0]});
		const uintjT6uPhH = BigInt("94")
		const stringdIdjkau = "ieMSSK"
		const stringuJnfCep = "djleejvUgwpwnP45EADUCrAOQqXncjD6UrkVEL24jjNBDdaNpg9Yrq1DOkWiL48Hz5"
		const stringWybuyf8 = await UFragmentsdp1QO49.name.call({from: accounts[1]});
		const addressBbYpKqi = await UFragmentsdp1QO49.owner.call({from: accounts[4]});
		const stringLyGYxk1 = await UFragmentsdp1QO49.initialize.call(stringuJnfCep, stringdIdjkau, uintjT6uPhH, {from: accounts[1]});

		assert.equal(addressBbYpKqi, 0x0000000000000000000000000000000000000000)
		assert.equal(stringWybuyf8, "")
	});
})