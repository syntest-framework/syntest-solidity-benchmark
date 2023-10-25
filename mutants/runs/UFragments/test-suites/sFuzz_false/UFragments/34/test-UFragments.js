const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsvMGbK4a = await UFragments.new({from: accounts[1]});
		const addressI1r0Bke = "0x0000000000000000000000000000000000000001"
		const stringR59zmAb = await UFragmentsvMGbK4a.name.call({from: accounts[0]});
		const boolfxTwJE6 = await UFragmentsvMGbK4a.isOwner.call({from: accounts[0]});
		const addressCM9z2wl = await UFragmentsvMGbK4a.initialize.call(addressI1r0Bke, {from: accounts[3]});
		const uint8iJsco7X = await UFragmentsvMGbK4a.decimals.call({from: accounts[4]});
		const stringk9O73kV = await UFragmentsvMGbK4a.symbol.call({from: accounts[2]});

		assert.equal(boolfxTwJE6, false)
		assert.equal(stringR59zmAb, "")
		await expect(UFragmentsvMGbK4a.initialize.call(addressI1r0Bke, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKpHde5T = await UFragments.new({from: accounts[2]});
		const uintoYNqR83 = BigInt("1921")
		const addressg1zTZwn = accounts[2]
		const intKogjIO = BigInt("-1310")
		const intQ3qmeK9 = BigInt("-1140")
		const uintNOqcLhb = BigInt("143")
		const stringeVfoQzo = "2Vm15QEkLFJDz0IyYta36mQQAmFKgmOyEJAOt4oODat8KOvRvbAdsaqPPq43Y7GVg0D461D61QgI3jsUahkBeggzSC7dzQ"
		const stringXseQTvT = "JCHhyxP8Vk6hUxUnGVTSxJNiToAkSkq8QctdCfJlNHPwevfwf"
		const addressdDomxE = accounts[4]
		const boolxJ32roj = await UFragmentsKpHde5T.approve.call(addressg1zTZwn, uintoYNqR83, {from: accounts[2]});
		await UFragmentsKpHde5T.renounceOwnership.call({from: accounts[1]});
		const int256coGk8cj = await UFragmentsKpHde5T.mul.call(intQ3qmeK9, intKogjIO, {from: accounts[2]});
		const stringo7ni8z6 = await UFragmentsKpHde5T.initialize.call(stringXseQTvT, stringeVfoQzo, uintNOqcLhb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BKYhCuI = await UFragmentsKpHde5T.balanceOf.call(addressdDomxE, {from: accounts[5]});

		assert.equal(boolxJ32roj, true)
		await expect(UFragmentsKpHde5T.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsiCFKBfZ = await UFragments.new({from: accounts[5]});
		const stringBjnGGer = await UFragmentsiCFKBfZ.name.call({from: accounts[0]});
		const stringts48Z1d = await UFragmentsiCFKBfZ.symbol.call({from: accounts[0]});
		const boolh4ftax8 = await UFragmentsiCFKBfZ.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const stringZimI7a0 = await UFragmentsiCFKBfZ.name.call({from: accounts[4]});
		const boolb0EEaF = await UFragmentsiCFKBfZ.rebaseTimeInfo.call({from: accounts[1]});

		assert.equal(boolh4ftax8, false)
		assert.equal(stringBjnGGer, "")
		assert.equal(stringZimI7a0, "")
		assert.equal(stringts48Z1d, "")
	});

	it('test for UFragments', async () => {
		const UFragmentslibu8e = await UFragments.new({from: accounts[2]});
		const intkTzHLm2 = BigInt("1966")
		const intXnHYkGz = BigInt("228")
		const intCnYwUnx = BigInt("1597")
		const intJEhMuBN = BigInt("1126")
		const intB0ffq8l = BigInt("-558")
		const intrNrBIb = BigInt("-848")
		const int256Tyl0NXR = await UFragmentslibu8e.div.call(intXnHYkGz, intkTzHLm2, {from: accounts[3]});
		const int256KPqilra = await UFragmentslibu8e.div.call(intJEhMuBN, intCnYwUnx, {from: accounts[1]});
		const int256JpeErkB = await UFragmentslibu8e.div.call(intrNrBIb, intB0ffq8l, {from: accounts[4]});
		const addressfokRkPM = await UFragmentslibu8e.owner.call({from: accounts[4]});

		await expect(UFragmentslibu8e.div.call(intXnHYkGz, intkTzHLm2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsskTB19 = await UFragments.new({from: accounts[5]});
		const addresskvci39s = accounts[1]
		const addressdsEvxNe = accounts[1]
		const uint256t758yzG = await UFragmentsskTB19.allowance.call(addressdsEvxNe, addresskvci39s, {from: accounts[1]});
		const addressBg9AZdR = await UFragmentsskTB19.owner.call({from: accounts[2]});
		const string3szjSW = await UFragmentsskTB19.symbol.call({from: accounts[1]});
		const addressacrpqGF = await UFragmentsskTB19.owner.call({from: accounts[1]});
		const stringSLemuj8 = await UFragmentsskTB19.symbol.call({from: accounts[4]});

		assert.equal(addressBg9AZdR, 0x0000000000000000000000000000000000000000)
		assert.equal(addressacrpqGF, 0x0000000000000000000000000000000000000000)
		assert.equal(string3szjSW, "")
		assert.equal(stringSLemuj8, "")
		assert.equal(uint256t758yzG, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsQ4hBWJi = await UFragments.new({from: accounts[4]});
		const addresszrHCMx = accounts[0]
		const intG5V5hsF = BigInt("-243")
		const addressvYzC2OC = accounts[1]
		const addressniZxjnq = accounts[4]
		const addressvDx813 = accounts[4]
		const uint256TkdqVYW = await UFragmentsQ4hBWJi.balanceOf.call(addresszrHCMx, {from: accounts[2]});
		const int256A8h2hw7 = await UFragmentsQ4hBWJi.abs.call(intG5V5hsF, {from: accounts[4]});
		const addressrclo1bJ = await UFragmentsQ4hBWJi.initialize.call(addressvYzC2OC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PcpwLm7 = await UFragmentsQ4hBWJi.allowance.call(addressvDx813, addressniZxjnq, {from: accounts[2]});

		assert.equal(uint256TkdqVYW, BigInt("0"))
		await expect(UFragmentsQ4hBWJi.abs.call(intG5V5hsF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQ4hBWJi = await UFragments.new({from: accounts[4]});
		const uintgyVtw2n = BigInt("1882")
		const addressqaCsIy = accounts[4]
		const addressa5rx5tx = accounts[0]
		const intXnt0aO = BigInt("-243")
		const addressZJAoZPF = accounts[1]
		const address9a2i9S = accounts[4]
		const addressvyeerWy = accounts[4]
		const booluwjKG2L = await UFragmentsQ4hBWJi.transfer.call(addressqaCsIy, uintgyVtw2n, {from: accounts[4]});
		const uint256TkdqVYW = await UFragmentsQ4hBWJi.balanceOf.call(addressa5rx5tx, {from: accounts[2]});
		const int256A8h2hw7 = await UFragmentsQ4hBWJi.abs.call(intXnt0aO, {from: accounts[4]});
		const addressrclo1bJ = await UFragmentsQ4hBWJi.initialize.call(addressZJAoZPF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PcpwLm7 = await UFragmentsQ4hBWJi.allowance.call(addressvyeerWy, address9a2i9S, {from: accounts[2]});

		await expect(UFragmentsQ4hBWJi.transfer.call(addressqaCsIy, uintgyVtw2n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentszyomT6K = await UFragments.new({from: accounts[2]});
		const uintaXanNSY = BigInt("133")
		const string4ualdH = "EWEuR45KDEbbMDsYwgHlePG5MnDkp5Op5sXTBiixUnvG2LXoltEA6yk36k87H0FiY4q4NGQvAF5R5OUXd9SfdPplRvFbk2H1"
		const stringr4Ky6Td = "WgchB17fA8bB50x94SRJdDwJSGv2joG9WzjucB6YsQivgrXtEa6KmIdmI7I8ZpodVqVEPHmfrAd1lSMIIxC4ZZErNe1AVtoBN"
		const addresshKI0yJ = accounts[5]
		const stringzluqF9w = await UFragmentszyomT6K.initialize.call(stringr4Ky6Td, string4ualdH, uintaXanNSY, {from: accounts[4]});
		const uint256aAkSWsc = await UFragmentszyomT6K.totalSupply.call({from: accounts[1]});
		const addressIAWI7s5 = await UFragmentszyomT6K.transferOwnership.call(addresshKI0yJ, {from: accounts[0]});

		assert.equal(uint256aAkSWsc, BigInt("0"))
		await expect(UFragmentszyomT6K.transferOwnership.call(addresshKI0yJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskpWbXaz = await UFragments.new({from: accounts[3]});
		const addressVJKIhPb = accounts[1]
		const uint8qdLe0wB = await UFragmentskpWbXaz.decimals.call({from: accounts[0]});
		const addressI0hh1X9 = await UFragmentskpWbXaz.transferOwnership.call(addressVJKIhPb, {from: accounts[4]});

		assert.equal(uint8qdLe0wB, BigInt("0"))
		await expect(UFragmentskpWbXaz.transferOwnership.call(addressVJKIhPb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsebvd3As = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const uintElBYEyC = BigInt("246")
		const addressMgS2a0t = accounts[3]
		const uintXctcZb = BigInt("1295")
		const addressb9FUsUt = accounts[2]
		const boolzv9WMnC = await UFragmentsebvd3As.approve.call(addressMgS2a0t, uintElBYEyC, {from: accounts[1]});
		const boolzgpIfku = await UFragmentsebvd3As.transfer.call(addressb9FUsUt, uintXctcZb, {from: accounts[0]});
	});

	it('test for UFragments', async () => {
		const UFragmentsQ4hBWJi = await UFragments.new({from: accounts[4]});
		const addressuG6GpzZ = accounts[4]
		const addresszSIoR8 = accounts[4]
		const uint256PcpwLm7 = await UFragmentsQ4hBWJi.allowance.call(addresszSIoR8, addressuG6GpzZ, {from: accounts[2]});
		const uint256iBitwOf = await UFragmentsQ4hBWJi.calRebase.call({from: accounts[1]});

		assert.equal(uint256PcpwLm7, BigInt("0"))
		await expect(UFragmentsQ4hBWJi.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQ4hBWJi = await UFragments.new({from: accounts[4]});
		const uintmNQNYFm = BigInt("1623")
		const address0gwbvv = accounts[1]
		const addressNV0hitL = accounts[1]
		const addressohze2yV = await UFragmentsQ4hBWJi.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLnhraae = await UFragmentsQ4hBWJi.transferFrom.call(addressNV0hitL, address0gwbvv, uintmNQNYFm, {from: accounts[2]});

		assert.equal(addressohze2yV, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsQ4hBWJi.transferFrom.call(addressNV0hitL, address0gwbvv, uintmNQNYFm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})