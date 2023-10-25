const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTW5wxta = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressPR1y7i2 = accounts[4]
		const addresslDtZSRU = await CryptoSecureBankTokenTW5wxta.setOwner2.call(addressPR1y7i2, {from: accounts[4]});
		const uintcZ97Gg = await CryptoSecureBankTokenTW5wxta.totalSupply.call({from: accounts[0]});

		assert.equal(uintcZ97Gg, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeno8KAZgx = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintTHiKmHs = BigInt("1419")
		const uintQjxT1v6 = BigInt("1787")
		const addresssGQ0Mv4 = accounts[1]
		const addressPj1ERXo = accounts[1]
		const addressf4yLTKH = accounts[2]
//		const uintoXxC9uT = await CryptoSecureBankTokeno8KAZgx.onlyPayloadSize.call(uintTHiKmHs, {from: accounts[2]});
//		const boolUofyjJz = await CryptoSecureBankTokeno8KAZgx.approve.call(addresssGQ0Mv4, uintQjxT1v6, {from: "0x0000000000000000000000000000000000000001"});
//		const uintCpqZdYR = await CryptoSecureBankTokeno8KAZgx.allowance.call(addressf4yLTKH, addressPj1ERXo, {from: accounts[5]});

		await expect(CryptoSecureBankTokeno8KAZgx.onlyPayloadSize.call(uintTHiKmHs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhIpS3jJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintWPi4jbY = BigInt("938")
		const addressMYqH03 = accounts[1]
		const uinth81AJSh = BigInt("1614")
		const addressx5gOEzs = accounts[0]
		const addressCL4GhZJ = accounts[1]
		const addressHPU1hOa = accounts[3]
//		const boolVvU6I6r = await CryptoSecureBankTokenhIpS3jJ.redeem.call(uintWPi4jbY, {from: accounts[2]});
//		await CryptoSecureBankTokenhIpS3jJ.unpause.call({from: accounts[4]});
//		const addressr0ujQjy = await CryptoSecureBankTokenhIpS3jJ.addBlackList.call(addressMYqH03, {from: accounts[2]});
//		const boolhbsYmQ = await CryptoSecureBankTokenhIpS3jJ.transferFrom.call(addressCL4GhZJ, addressx5gOEzs, uinth81AJSh, {from: accounts[3]});
//		const uintwnWHuqP = await CryptoSecureBankTokenhIpS3jJ.balanceOf.call(addressHPU1hOa, {from: accounts[4]});

		await expect(CryptoSecureBankTokenhIpS3jJ.redeem.call(uintWPi4jbY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKY6NZbY = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintaYAO9xN = BigInt("439")
		const addressAg528mf = accounts[3]
		const address3jsDpQ = "0x0000000000000000000000000000000000000001"
		const uintjvJRpUr = BigInt("218")
		const addresskknjnM6 = accounts[1]
		const addresshZzrUH = accounts[5]
		const addressybVdT54 = accounts[0]
		const booldxhy4xx = await CryptoSecureBankTokenKY6NZbY.transfer.call(addressAg528mf, uintaYAO9xN, {from: accounts[3]});
		const uintl4NsZWb = await CryptoSecureBankTokenKY6NZbY.balanceOf.call(address3jsDpQ, {from: accounts[2]});
//		const boold7zDTV = await CryptoSecureBankTokenKY6NZbY.transferFrom.call(addresshZzrUH, addresskknjnM6, uintjvJRpUr, {from: accounts[1]});
//		await CryptoSecureBankTokenKY6NZbY.whenPaused.call({from: accounts[0]});
//		const addresspHK9NoI = await CryptoSecureBankTokenKY6NZbY.transferOwnership.call(addressybVdT54, {from: accounts[2]});

		assert.equal(booldxhy4xx, true)
		assert.equal(uintl4NsZWb, BigInt("0"))
		await expect(CryptoSecureBankTokenKY6NZbY.transferFrom.call(addresshZzrUH, addresskknjnM6, uintjvJRpUr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBIzRKMU = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintoWRyOcW = BigInt("541")
		const addressONDfEYL = accounts[4]
		const addressd3npngi = accounts[4]
		const boolqGanFnP = await CryptoSecureBankTokenBIzRKMU.approve.call(addressONDfEYL, uintoWRyOcW, {from: accounts[2]});
//		await CryptoSecureBankTokenBIzRKMU.unpause.call({from: accounts[2]});
//		const addressIGEsxR = await CryptoSecureBankTokenBIzRKMU.addBlackList.call(addressd3npngi, {from: accounts[0]});
//		await CryptoSecureBankTokenBIzRKMU.pause.call({from: accounts[2]});
//		const uintVsWL68V = await CryptoSecureBankTokenBIzRKMU.totalSupply.call({from: accounts[1]});

		assert.equal(boolqGanFnP, true)
		await expect(CryptoSecureBankTokenBIzRKMU.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenQLS985M = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressGhAzNS = accounts[3]
		const uintIbnmzh4 = BigInt("1639")
		const addresshytrQl1 = accounts[4]
		const addressx6yfUk = await CryptoSecureBankTokenQLS985M.getOwner.call({from: accounts[3]});
		const addressriBwY9F = await CryptoSecureBankTokenQLS985M.getOwner.call({from: accounts[2]});
//		const addressUh1kzoB = await CryptoSecureBankTokenQLS985M.addBlackList.call(addressGhAzNS, {from: accounts[4]});
//		const boolv3JTlyz = await CryptoSecureBankTokenQLS985M.approve.call(addresshytrQl1, uintIbnmzh4, {from: accounts[1]});

		assert.equal(addressriBwY9F, 0xAd1043744ceeC4E201436E35A8b2A80925D6Ee57)
		assert.equal(addressx6yfUk, 0xAd1043744ceeC4E201436E35A8b2A80925D6Ee57)
		await expect(CryptoSecureBankTokenQLS985M.addBlackList.call(addressGhAzNS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKBtHDH1 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressNpEK0lJ = accounts[1]
		const uintIz4wX76 = BigInt("1625")
		const booln2pnJ6y = await CryptoSecureBankTokenKBtHDH1.getBlackListStatus.call(addressNpEK0lJ, {from: accounts[4]});
//		const bool0QzaaC = await CryptoSecureBankTokenKBtHDH1.redeem.call(uintIz4wX76, {from: accounts[2]});

		assert.equal(booln2pnJ6y, false)
		await expect(CryptoSecureBankTokenKBtHDH1.redeem.call(uintIz4wX76, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPnioPw0 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressZYoLTBd = accounts[3]
		const address6itW3d = accounts[3]
		const addressfiVCwL = "0x0000000000000000000000000000000000000001"
		const uint49TO7w = BigInt("281")
		const addressG4njJ1 = accounts[3]
		const uintCEUX18c = await CryptoSecureBankTokenPnioPw0.totalSupply.call({from: accounts[2]});
		const uintbVn3xtU = await CryptoSecureBankTokenPnioPw0.balanceOf.call(addressZYoLTBd, {from: accounts[1]});
//		const addressaMLtcL0 = await CryptoSecureBankTokenPnioPw0.transferOwnership.call(address6itW3d, {from: accounts[3]});
//		const addressgQc9AU = await CryptoSecureBankTokenPnioPw0.destroyBlackFunds.call(addressfiVCwL, {from: "0x0000000000000000000000000000000000000001"});
//		const booljqultZz = await CryptoSecureBankTokenPnioPw0.transfer.call(addressG4njJ1, uint49TO7w, {from: accounts[0]});

		assert.equal(uintCEUX18c, BigInt("100000000000000000000000000"))
		assert.equal(uintbVn3xtU, BigInt("0"))
		await expect(CryptoSecureBankTokenPnioPw0.transferOwnership.call(address6itW3d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTW5wxta = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressihwnGUR = accounts[2]
		const addressadx25aQ = accounts[4]
		const addresse2yLDNj = accounts[0]
		const uintR6MRynw = await CryptoSecureBankTokenTW5wxta.allowance.call(addressadx25aQ, addressihwnGUR, {from: accounts[3]});
		const uintcZ97Gg = await CryptoSecureBankTokenTW5wxta.totalSupply.call({from: accounts[0]});
//		const addressenjtoLz = await CryptoSecureBankTokenTW5wxta.setOwner2.call(addresse2yLDNj, {from: accounts[0]});

		assert.equal(uintR6MRynw, BigInt("0"))
		assert.equal(uintcZ97Gg, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenTW5wxta.setOwner2.call(addresse2yLDNj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenG1Yh0K = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressE1SfOAZ = accounts[1]
		const uintbVpITLo = BigInt("1636")
		const addressgGvl9g = accounts[2]
		const addressM2GQ1PK = await CryptoSecureBankTokenG1Yh0K.removeBlackList.call(addressE1SfOAZ, {from: accounts[2]});
//		await CryptoSecureBankTokenG1Yh0K.whenPaused.call({from: accounts[1]});
//		const boolkN5ShR3 = await CryptoSecureBankTokenG1Yh0K.approve.call(addressgGvl9g, uintbVpITLo, {from: accounts[2]});

		await expect(CryptoSecureBankTokenG1Yh0K.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenesmYH1D = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUjiHHH2 = BigInt("9")
		const addressV9iZGMn = accounts[4]
		const addressvkBMt5 = accounts[2]
		await CryptoSecureBankTokenesmYH1D.pause.call({from: accounts[0]});
		const booltMFUaBK = await CryptoSecureBankTokenesmYH1D.transferFrom.call(addressvkBMt5, addressV9iZGMn, uintUjiHHH2, {from: accounts[4]});
		const addresshiertH = await CryptoSecureBankTokenesmYH1D.getOwner.call({from: accounts[3]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTW5wxta = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressEUwN1EY = accounts[4]
		const addresslHSG6Us = accounts[4]
		const addresszTQmaFq = accounts[0]
		const addressYJ3zce = "0x0000000000000000000000000000000000000001"
		const uintvCoia37 = BigInt("784")
		const addressFb8lCnM = accounts[0]
		const addressI1LiXHs = accounts[3]
		const addressll167q = accounts[1]
		const addresslDtZSRU = await CryptoSecureBankTokenTW5wxta.setOwner2.call(addressEUwN1EY, {from: accounts[4]});
		const addressanumP4 = await CryptoSecureBankTokenTW5wxta.addBlackList.call(addresslHSG6Us, {from: accounts[4]});
		const uintHiLZJn = await CryptoSecureBankTokenTW5wxta.allowance.call(addressYJ3zce, addresszTQmaFq, {from: accounts[2]});
		const boolPeHEuw9 = await CryptoSecureBankTokenTW5wxta.approve.call(addressFb8lCnM, uintvCoia37, {from: accounts[2]});
//		const address9hp3A1 = await CryptoSecureBankTokenTW5wxta.setOwner2.call(addressI1LiXHs, {from: accounts[5]});
//		const uintZzOob29 = await CryptoSecureBankTokenTW5wxta.balanceOf.call(addressll167q, {from: accounts[4]});

		assert.equal(boolPeHEuw9, true)
		assert.equal(uintHiLZJn, BigInt("0"))
		await expect(CryptoSecureBankTokenTW5wxta.setOwner2.call(addressI1LiXHs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTW5wxta = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresskOBhxSS = accounts[4]
		const uinttshdI2N = BigInt("1507")
		const addresslJsPa6L = accounts[3]
		const addressCmikWf0 = "0x0000000000000000000000000000000000000001"
		const addressJe68WZF = await CryptoSecureBankTokenTW5wxta.getOwner.call({from: accounts[3]});
//		const addressaMn0lk7 = await CryptoSecureBankTokenTW5wxta.destroyBlackFunds.call(addresskOBhxSS, {from: accounts[4]});
//		const booldcp0nL = await CryptoSecureBankTokenTW5wxta.transferFrom.call(addressCmikWf0, addresslJsPa6L, uinttshdI2N, {from: accounts[4]});

		assert.equal(addressJe68WZF, 0xB632Ba7B825900c487e5f719cc0B74B3f331Aea1)
		await expect(CryptoSecureBankTokenTW5wxta.destroyBlackFunds.call(addresskOBhxSS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTW5wxta = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresspCQPSxV = accounts[6]
		const uintFYgzO11 = BigInt("1656")
		const uintJFWDgKG = BigInt("55")
		const addresshukrX0X = accounts[5]
		const addressASKC3xa = accounts[5]
//		await CryptoSecureBankTokenTW5wxta.pause.call({from: accounts[4]});
//		const addresslDtZSRU = await CryptoSecureBankTokenTW5wxta.setOwner2.call(addresspCQPSxV, {from: accounts[4]});
//		const uintp5iWVGs = await CryptoSecureBankTokenTW5wxta.onlyPayloadSize.call(uintFYgzO11, {from: accounts[3]});
//		const boolcgft86 = await CryptoSecureBankTokenTW5wxta.transferFrom.call(addressASKC3xa, addresshukrX0X, uintJFWDgKG, {from: accounts[5]});

		await expect(CryptoSecureBankTokenTW5wxta.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTW5wxta = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintAzkyi9U = BigInt("452")
		const addressGE7MQYI = accounts[4]
		const addressJBMg7PP = accounts[2]
		const uintoRnxByf = BigInt("1975")
		const addressrd3Y93 = accounts[1]
		const boolAPzOtWG = await CryptoSecureBankTokenTW5wxta.redeem.call(uintAzkyi9U, {from: accounts[4]});
//		const addressdHa0QVB = await CryptoSecureBankTokenTW5wxta.destroyBlackFunds.call(addressGE7MQYI, {from: accounts[2]});
//		const uintZzOob29 = await CryptoSecureBankTokenTW5wxta.balanceOf.call(addressJBMg7PP, {from: accounts[4]});
//		const boolU2ccswt = await CryptoSecureBankTokenTW5wxta.transfer.call(addressrd3Y93, uintoRnxByf, {from: accounts[0]});

		assert.equal(boolAPzOtWG, true)
		await expect(CryptoSecureBankTokenTW5wxta.destroyBlackFunds.call(addressGE7MQYI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeni6poRgB = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressjXrtVmQ = accounts[3]
		const uintWvOMwee = BigInt("1354")
		const addressF0JmQU1 = accounts[2]
		const addressD8fNYAt = accounts[4]
		const uintZoeZ7ma = BigInt("1754")
		const addresssGNvEWV = await CryptoSecureBankTokeni6poRgB.transferOwnership.call(addressjXrtVmQ, {from: accounts[0]});
//		await CryptoSecureBankTokeni6poRgB.pause.call({from: accounts[1]});
//		const boolO3u5wTv = await CryptoSecureBankTokeni6poRgB.transferFrom.call(addressD8fNYAt, addressF0JmQU1, uintWvOMwee, {from: accounts[0]});
//		const uintXXArwRd = await CryptoSecureBankTokeni6poRgB.onlyPayloadSize.call(uintZoeZ7ma, {from: accounts[2]});

		await expect(CryptoSecureBankTokeni6poRgB.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTW5wxta = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintmmoCKKj = BigInt("0")
		const addresskxTrMtS = accounts[1]
		const addressj0OLREb = await CryptoSecureBankTokenTW5wxta.getOwner.call({from: accounts[1]});
		const boolMLGlb7h = await CryptoSecureBankTokenTW5wxta.transfer.call(addresskxTrMtS, uintmmoCKKj, {from: accounts[4]});

		assert.equal(addressj0OLREb, 0xB632Ba7B825900c487e5f719cc0B74B3f331Aea1)
		assert.equal(boolMLGlb7h, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTW5wxta = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintjygKygb = BigInt("1911")
		const uintEcYTxYS = BigInt("342")
		const addressv2KQvPu = accounts[2]
//		const uint1KCMvJ = await CryptoSecureBankTokenTW5wxta.setParams.call(uintEcYTxYS, uintjygKygb, {from: accounts[4]});
//		const uintZzOob29 = await CryptoSecureBankTokenTW5wxta.balanceOf.call(addressv2KQvPu, {from: accounts[4]});

		await expect(CryptoSecureBankTokenTW5wxta.setParams.call(uintEcYTxYS, uintjygKygb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})