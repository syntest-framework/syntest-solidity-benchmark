const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveT99LVYV = await Revive.new({from: accounts[1]});
		const byteIwPFaP = "0x1814101d0705060817191b09001b0f1b1b020a1905090b0c20191a1503091705"
		const addressV6dmDO3 = accounts[3]
		const uintcK6D6B = BigInt("1497")
		const byteH2clh0J = "0x071f140714081f1c0f0910010c091a0a0719111c08160d061f0706071312051e"
		const addressjAuKUxp = "0x0000000000000000000000000000000000000001"
		const addressj2fuLrm = accounts[4]
		const uint256BrotbTV = await ReviveT99LVYV.tokensLocked.call(addressV6dmDO3, byteIwPFaP, {from: accounts[3]});
		const boollQOkerz = await ReviveT99LVYV.increaseLockAmount.call(byteH2clh0J, uintcK6D6B, {from: accounts[1]});
		const addressdvuE2o0 = await ReviveT99LVYV.transferOwnership.call(addressjAuKUxp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hiRthOO = await ReviveT99LVYV.unlock.call(addressj2fuLrm, {from: accounts[3]});
		const addressHQNhUG3 = await ReviveT99LVYV.owner.call({from: accounts[4]});

		assert.equal(uint256BrotbTV, BigInt("0"))
		await expect(ReviveT99LVYV.increaseLockAmount.call(byteH2clh0J, uintcK6D6B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const addressQ0Fq1Pu = accounts[5]
		const addressZZEvvua = "0x0000000000000000000000000000000000000001"
		const addressRIbxtIG = await ReviveOetIPeS.transferOwnership.call(addressQ0Fq1Pu, {from: accounts[2]});
		await ReviveOetIPeS.renounceOwnership.call({from: accounts[2]});
		const uint256FFUf5x = await ReviveOetIPeS.unlock.call(addressZZEvvua, {from: accounts[3]});

		await expect(ReviveOetIPeS.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveassl0wg = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTjpUo8I = BigInt("1125")
		const addressfrnUA3T = accounts[4]
		const addressM3AlAxf = accounts[3]
		const addresspcBersw = accounts[5]
		const addressGmnk5Qu = await Reviveassl0wg.owner.call({from: accounts[5]});
		const boolTuoVxZt = await Reviveassl0wg.transfer.call(addressfrnUA3T, uintTjpUo8I, {from: accounts[1]});
		const uint256T6Ubgj3 = await Reviveassl0wg.allowance.call(addresspcBersw, addressM3AlAxf, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Revive', async () => {
		const ReviveoyPlg1E = await Revive.new({from: accounts[1]});
		const addressLdjmQFU = accounts[2]
		const addressjFu1IU = accounts[3]
		const addressph7paLp = accounts[0]
		const uintDboMad = BigInt("209")
		const addressyTOjqAb = accounts[2]
		const addressSOWcllX = accounts[5]
		const uint256ldsvO2 = await ReviveoyPlg1E.balanceOf.call(addressLdjmQFU, {from: accounts[0]});
		await ReviveoyPlg1E.onlyOwner.call({from: accounts[0]});
		const uint256Q6fJxCI = await ReviveoyPlg1E.allowance.call(addressph7paLp, addressjFu1IU, {from: accounts[1]});
		const boolvrHoIrV = await ReviveoyPlg1E.increaseAllowance.call(addressyTOjqAb, uintDboMad, {from: accounts[4]});
		const uint256bvXDEGc = await ReviveoyPlg1E.getUnlockableTokens.call(addressSOWcllX, {from: accounts[1]});

		assert.equal(uint256ldsvO2, BigInt("0"))
		await expect(ReviveoyPlg1E.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezYr6pLg = await Revive.new({from: accounts[1]});
		const addresstedLlCf = accounts[2]
		const byteoGmDQmy = "0x191c1b09060c1d1d1e07140a0f15081f071b1f0a1709041a1b000b0f1a000803"
		const addresshHeT6C = accounts[3]
		const uintUHlzZWo = BigInt("1058")
		const addressyJnqxkx = accounts[4]
		const addressXfhWtle = accounts[4]
		const uintqY3R0f1 = BigInt("1105")
		const addressJ07o2gp = accounts[2]
		const addressp2JdRuL = await RevivezYr6pLg.transferOwnership.call(addresstedLlCf, {from: "0x0000000000000000000000000000000000000001"});
		await RevivezYr6pLg.renounceOwnership.call({from: accounts[0]});
		const uint256yHZ9K7z = await RevivezYr6pLg.tokensLocked.call(addresshHeT6C, byteoGmDQmy, {from: accounts[0]});
		const boolSdZVfwh = await RevivezYr6pLg.approve.call(addressyJnqxkx, uintUHlzZWo, {from: accounts[0]});
		const uint256CB0cvR = await RevivezYr6pLg.balanceOf.call(addressXfhWtle, {from: accounts[4]});
		const boolzTMPGLM = await RevivezYr6pLg.approve.call(addressJ07o2gp, uintqY3R0f1, {from: accounts[1]});

		await expect(RevivezYr6pLg.transferOwnership.call(addresstedLlCf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive6Tj7jX = await Revive.new({from: accounts[4]});
		const uintTlOJP5d = BigInt("1124")
		const uintbIaF0Zq = BigInt("1242")
		const byteDsCsdp = "0x0f00081c03031b101d0218181f0a0307111a1e1f031301061911180310180e06"
		const addressnhqLDNj = accounts[4]
		const uintDuFtav = BigInt("1708")
		const bytenLav0rf = "0x09111d1e0019020601171506121e17170f15171c111b10201d150d0a1e1d0704"
		const addressUxsiUWj = "0x0000000000000000000000000000000000000001"
		const uintE9lweaJ = BigInt("1911")
		const addressXL3DjLS = accounts[5]
		const addressEwI4v52 = accounts[2]
		const uinta6Xhee = BigInt("1040")
		const byteJqMHPUN = "0x110412180f01200b0c1c131308160e111311140810010c1b091e200c1914031d"
		const boolUoFCVa = await Revive6Tj7jX.transferWithLock.call(addressnhqLDNj, byteDsCsdp, uintbIaF0Zq, uintTlOJP5d, {from: accounts[4]});
		const uint256XFUEHy = await Revive6Tj7jX.tokensLockedAtTime.call(addressUxsiUWj, bytenLav0rf, uintDuFtav, {from: accounts[0]});
		const boolK0PRCE = await Revive6Tj7jX.decreaseAllowance.call(addressXL3DjLS, uintE9lweaJ, {from: accounts[4]});
		const uint256E4EXgqh = await Revive6Tj7jX.totalBalanceOf.call(addressEwI4v52, {from: accounts[0]});
		const boolXdxygMa = await Revive6Tj7jX.increaseLockAmount.call(byteJqMHPUN, uinta6Xhee, {from: accounts[1]});

		assert.equal(boolUoFCVa, true)
		assert.equal(uint256XFUEHy, BigInt("0"))
		await expect(Revive6Tj7jX.decreaseAllowance.call(addressXL3DjLS, uintE9lweaJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhK768l = await Revive.new({from: accounts[0]});
		const addressZOITIFe = accounts[0]
		const uintZC42Csb = BigInt("1422")
		const addresseQH4Mlo = accounts[1]
		const uint256NrPBFd3 = await ReviveLhK768l.balanceOf.call(addressZOITIFe, {from: accounts[0]});
		const boolUGryiEI = await ReviveLhK768l.isOwner.call({from: accounts[4]});
		const boolHXm1rpy = await ReviveLhK768l.increaseAllowance.call(addresseQH4Mlo, uintZC42Csb, {from: accounts[3]});

		assert.equal(boolHXm1rpy, true)
		assert.equal(boolUGryiEI, false)
		assert.equal(uint256NrPBFd3, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveGkDoaEJ = await Revive.new({from: accounts[2]});
		const addressW3wwAW7 = accounts[3]
		const addressDBRYm0L = accounts[4]
		const uintSg2d3QP = BigInt("1137")
		const bytecCr5OOQ = "0x081a141415000d190e16011507051e041c1f040b080d190f0620120711130f06"
		const addressFZw0BGV = accounts[0]
		const addresspEpGqVX = accounts[4]
		const uintZa5yQG = BigInt("1809")
		const bytevSCiSc5 = "0x021d07190f0a061c170b101014061a02101c09030f0f0c190e1b041709120406"
		const addressyQNGkEV = accounts[3]
		const uint256JqXQb2l = await ReviveGkDoaEJ.allowance.call(addressDBRYm0L, addressW3wwAW7, {from: accounts[1]});
		const boolSulJPM = await ReviveGkDoaEJ.increaseLockAmount.call(bytecCr5OOQ, uintSg2d3QP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EjEr41O = await ReviveGkDoaEJ.allowance.call(addresspEpGqVX, addressFZw0BGV, {from: accounts[4]});
		const uint256LJAzYOu = await ReviveGkDoaEJ.tokensLockedAtTime.call(addressyQNGkEV, bytevSCiSc5, uintZa5yQG, {from: accounts[3]});

		assert.equal(uint256JqXQb2l, BigInt("0"))
		await expect(ReviveGkDoaEJ.increaseLockAmount.call(bytecCr5OOQ, uintSg2d3QP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetWuyQs = await Revive.new({from: accounts[4]});
		const addressiBkG05B = accounts[2]
		const addressSaDrwa = accounts[0]
		const byteM6ScPd = "0x1c110805191f1e1d0f08011910130c170a151c0a050a1e0f0c0c061c0f07060e"
		const addressSSckyrp = accounts[0]
		const uint256nPBL3sD = await RevivetWuyQs.balanceOf.call(addressiBkG05B, {from: accounts[5]});
		const addressD4x3k35 = await RevivetWuyQs.owner.call({from: accounts[2]});
		const booloJHfenI = await RevivetWuyQs.isOwner.call({from: accounts[1]});
		const uint256E3o6r0Z = await RevivetWuyQs.totalBalanceOf.call(addressSaDrwa, {from: accounts[4]});
		const uint256RJGnbXt = await RevivetWuyQs.tokensLocked.call(addressSSckyrp, byteM6ScPd, {from: accounts[4]});

		assert.equal(addressD4x3k35, 0x9f8ED1d554fE0e1Cb58C5851094f9385e60725cc)
		assert.equal(booloJHfenI, false)
		assert.equal(uint256E3o6r0Z, BigInt("0"))
		assert.equal(uint256RJGnbXt, BigInt("0"))
		assert.equal(uint256nPBL3sD, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivenfoaT1y = await Revive.new({from: accounts[0]});
		const uintId22amb = BigInt("544")
		const addressakEDG9p = accounts[2]
		const addressmlLxGkb = accounts[1]
		const addressScitvw = accounts[2]
		const boolmG3a0lv = await RevivenfoaT1y.transferFrom.call(addressmlLxGkb, addressakEDG9p, uintId22amb, {from: accounts[4]});
		const uint256qAnc6Wx = await RevivenfoaT1y.balanceOf.call(addressScitvw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivenfoaT1y.transferFrom.call(addressmlLxGkb, addressakEDG9p, uintId22amb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetWuyQs = await Revive.new({from: accounts[4]});
		const uintFNCwYop = BigInt("444")
		const bytePRLaN8K = "0x1d0c0c03121a031404131a17140008090a1a1c0b1a161106121b1209061a0e18"
		const addresstufS5W = accounts[2]
		const addressp29zv2z = accounts[0]
		const addressbB1vQg0 = accounts[0]
		const byteWC2Da64 = "0x1c110805191f1e1d0f08011910130c170a151c0a050a1e0f0c0c061c0f07060e"
		const addressRPUx66l = accounts[0]
		const boolCggR7pH = await RevivetWuyQs.extendLock.call(bytePRLaN8K, uintFNCwYop, {from: accounts[4]});
		const uint256nPBL3sD = await RevivetWuyQs.balanceOf.call(addresstufS5W, {from: accounts[5]});
		const addressD4x3k35 = await RevivetWuyQs.owner.call({from: accounts[2]});
		const booloJHfenI = await RevivetWuyQs.isOwner.call({from: accounts[1]});
		const uint256E3o6r0Z = await RevivetWuyQs.totalBalanceOf.call(addressp29zv2z, {from: accounts[4]});
		const addressAig2Y1u = await RevivetWuyQs.transferOwnership.call(addressbB1vQg0, {from: accounts[5]});
		const uint256RJGnbXt = await RevivetWuyQs.tokensLocked.call(addressRPUx66l, byteWC2Da64, {from: accounts[4]});

		await expect(RevivetWuyQs.extendLock.call(bytePRLaN8K, uintFNCwYop, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveT99LVYV = await Revive.new({from: accounts[1]});
		const bytefDVbohI = "0x1814101d0705060817191b09001b0f1b1b020a1905090b0c20191a1503091705"
		const addressvokxSeA = accounts[3]
		const addressVML42oO = accounts[0]
		const addressE0ZwTK = accounts[4]
		const addressvX7FK9g = accounts[4]
		const addressZq9pWdo = "0x0000000000000000000000000000000000000002"
		const addressX3NBKqy = accounts[4]
		const uintAWtiVbf = BigInt("1554")
		const addressfT3EZyO = "0x0000000000000000000000000000000000000001"
		const addressLNnFhnf = accounts[3]
		const uintN8fvHpI = BigInt("1826")
		const byteCNjojR9 = "0x1e170f10061e0912151e030d0e1a0d0c141500171a07011e160502050d011c13"
		const uint256BrotbTV = await ReviveT99LVYV.tokensLocked.call(addressvokxSeA, bytefDVbohI, {from: accounts[3]});
		const uint256RkVINB = await ReviveT99LVYV.allowance.call(addressE0ZwTK, addressVML42oO, {from: accounts[3]});
		const uint256G5yGgRe = await ReviveT99LVYV.totalSupply.call({from: accounts[1]});
		const uint256YMGFclc = await ReviveT99LVYV.totalBalanceOf.call(addressvX7FK9g, {from: accounts[2]});
		const addressdvuE2o0 = await ReviveT99LVYV.transferOwnership.call(addressZq9pWdo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hiRthOO = await ReviveT99LVYV.unlock.call(addressX3NBKqy, {from: accounts[3]});
		const boolvUSi4Xo = await ReviveT99LVYV.transferFrom.call(addressLNnFhnf, addressfT3EZyO, uintAWtiVbf, {from: accounts[4]});
		const boolAyFgSs = await ReviveT99LVYV.increaseLockAmount.call(byteCNjojR9, uintN8fvHpI, {from: accounts[0]});
		const addressHQNhUG3 = await ReviveT99LVYV.owner.call({from: accounts[4]});

		assert.equal(uint256BrotbTV, BigInt("0"))
		assert.equal(uint256G5yGgRe, BigInt("3000000000000000000000000000"))
		assert.equal(uint256RkVINB, BigInt("0"))
		assert.equal(uint256YMGFclc, BigInt("0"))
		await expect(ReviveT99LVYV.transferOwnership.call(addressZq9pWdo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const uintTE3KgCc = BigInt("479")
		const addressUyBwwLf = accounts[3]
		const addressg7xQSp = "0x0000000000000000000000000000000000000000"
		const boolKkTE3FG = await ReviveOetIPeS.approve.call(addressUyBwwLf, uintTE3KgCc, {from: accounts[3]});
		const uint256FFUf5x = await ReviveOetIPeS.unlock.call(addressg7xQSp, {from: accounts[3]});

		assert.equal(boolKkTE3FG, true)
		assert.equal(uint256FFUf5x, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveGRXKBJq = await Revive.new({from: accounts[2]});
		const uinthi7P6dC = BigInt("1096")
		const bytey5bRPM = "0x10070f1e1c1f1a0b190b161516151c050d061a11130e1810031a0d0a10191010"
		const addressoAPtiG = accounts[4]
		const uint256o3yzTiV = await ReviveGRXKBJq.recoverERC20.call(uinthi7P6dC, {from: accounts[0]});
		const uint256OFDfuez = await ReviveGRXKBJq.tokensLocked.call(addressoAPtiG, bytey5bRPM, {from: accounts[4]});
		const addressfLUtfDM = await ReviveGRXKBJq.owner.call({from: accounts[4]});

		await expect(ReviveGRXKBJq.recoverERC20.call(uinthi7P6dC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const address59quTB = accounts[4]
		const addressopqQlZm = "0x00000000000000000000000000000000000000-1"
		const uint256D0i0WP = await ReviveOetIPeS.totalBalanceOf.call(address59quTB, {from: accounts[2]});
		await ReviveOetIPeS.renounceOwnership.call({from: accounts[2]});
		const uint256FFUf5x = await ReviveOetIPeS.unlock.call(addressopqQlZm, {from: accounts[3]});

		assert.equal(uint256D0i0WP, BigInt("0"))
		await expect(ReviveOetIPeS.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const addressO0LWPl = accounts[5]
		const addressUoCrwyY = accounts[5]
		const addressk0etC28 = "0x0000000000000000000000000000000000000000"
		const uintkzfcTWc = BigInt("1851")
		const uinttbVfV2L = BigInt("343")
		const bytenCpDdEg = "0x1014130d080c0e181c121816161f05171d0d0d1d00150015041e001a061e071c"
		const addressRIbxtIG = await ReviveOetIPeS.transferOwnership.call(addressO0LWPl, {from: accounts[2]});
		const uint256D0i0WP = await ReviveOetIPeS.totalBalanceOf.call(addressUoCrwyY, {from: accounts[2]});
		await ReviveOetIPeS.renounceOwnership.call({from: accounts[2]});
		const uint256FFUf5x = await ReviveOetIPeS.unlock.call(addressk0etC28, {from: accounts[3]});
		const boolxKPGhs = await ReviveOetIPeS.lock.call(bytenCpDdEg, uinttbVfV2L, uintkzfcTWc, {from: accounts[2]});

		assert.equal(uint256D0i0WP, BigInt("0"))
		await expect(ReviveOetIPeS.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const addressv6LMlt9 = accounts[0]
		const addressfM1HP2S = "0x00000000000000000000000000000000000000-1"
		const uint256sbJkNr1 = await ReviveOetIPeS.getUnlockableTokens.call(addressv6LMlt9, {from: accounts[0]});
		const addressFohAmr = await ReviveOetIPeS.owner.call({from: accounts[2]});
		const uint256FFUf5x = await ReviveOetIPeS.unlock.call(addressfM1HP2S, {from: accounts[3]});

		assert.equal(addressFohAmr, 0x101270fE74A561fD197f47E46D038F27Ae3B2655)
		assert.equal(uint256sbJkNr1, BigInt("0"))
		await expect(ReviveOetIPeS.unlock.call(addressfM1HP2S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWgdnI8Y = await Revive.new({from: accounts[3]});
		const address1urVw0 = accounts[2]
		const byterJq9tXj = "0x0816070a10160c201c001f0f111312011710121e151c0a081614131910091015"
		const addressBh94V9n = accounts[5]
		const addressjZkt8v1 = accounts[3]
		const addressmoI3MxJ = accounts[4]
		const uint256vWVGsjl = await ReviveWgdnI8Y.totalBalanceOf.call(address1urVw0, {from: accounts[3]});
		const boolVxUd5sk = await ReviveWgdnI8Y.isOwner.call({from: accounts[3]});
		const uint256BTKnoIO = await ReviveWgdnI8Y.tokensUnlockable.call(addressBh94V9n, byterJq9tXj, {from: accounts[3]});
		const uint256C7GQqlL = await ReviveWgdnI8Y.balanceOf.call(addressjZkt8v1, {from: accounts[5]});
		const uint256NI7qsA9 = await ReviveWgdnI8Y.balanceOf.call(addressmoI3MxJ, {from: accounts[2]});

		assert.equal(boolVxUd5sk, true)
		assert.equal(uint256BTKnoIO, BigInt("0"))
		assert.equal(uint256C7GQqlL, BigInt("3000000000000000000000000000"))
		assert.equal(uint256NI7qsA9, BigInt("0"))
		assert.equal(uint256vWVGsjl, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const byteQbH97Qw = "0x1011080e0f0203021b1110091a190a151002151e0a14191f0a091c1818161611"
		const addressvoRLsaK = accounts[0]
		const addressjwZR8sL = accounts[3]
		const uintkgtmEJv = BigInt("37")
		const uintfSHCW6v = BigInt("290")
		const uintUkp9uah = BigInt("480")
		const byteQbOzEz2 = "0x160b0502071c09141a0d1618040a1e161d0d0e121509151f010f0b0c1f161609"
		const uint256UVZ1gRT = await ReviveOetIPeS.tokensLocked.call(addressvoRLsaK, byteQbH97Qw, {from: accounts[0]});
		const uint256v7Pm1Vd = await ReviveOetIPeS.unlock.call(addressjwZR8sL, {from: accounts[3]});
		const uint256nQgATgD = await ReviveOetIPeS.recoverERC20.call(uintkgtmEJv, {from: accounts[3]});
		const boolN9M1Kml = await ReviveOetIPeS.lock.call(byteQbOzEz2, uintUkp9uah, uintfSHCW6v, {from: accounts[1]});

		assert.equal(uint256UVZ1gRT, BigInt("0"))
		assert.equal(uint256v7Pm1Vd, BigInt("0"))
		await expect(ReviveOetIPeS.recoverERC20.call(uintkgtmEJv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesrgekUE = await Revive.new({from: accounts[1]});
		const uintaq5LUay = BigInt("1291")
		const addressQu7Fubs = accounts[2]
		const uint256M4nbTTI = await RevivesrgekUE.recoverERC20.call(uintaq5LUay, {from: accounts[1]});
		const uint256j6ct3Af = await RevivesrgekUE.unlock.call(addressQu7Fubs, {from: accounts[3]});
		const addressAEOv4d = await RevivesrgekUE.owner.call({from: accounts[3]});

		await expect(RevivesrgekUE.recoverERC20.call(uintaq5LUay, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const addresswWeQJUc = "0x0000000000000000000000000000000000000000"
		const addressBqn5O8t = accounts[2]
		const uintWoQsWuv = BigInt("1971")
		const addressAIOQd7S = accounts[1]
		const addressbMHXcW0 = accounts[4]
		const uint256FFUf5x = await ReviveOetIPeS.unlock.call(addresswWeQJUc, {from: accounts[3]});
		const uint256QF9zVy8 = await ReviveOetIPeS.balanceOf.call(addressBqn5O8t, {from: accounts[3]});
		const uint256KzG9mVi = await ReviveOetIPeS.recoverERC20.call(uintWoQsWuv, {from: accounts[0]});
		const uint256z7Ybb6D = await ReviveOetIPeS.allowance.call(addressbMHXcW0, addressAIOQd7S, {from: accounts[2]});

		assert.equal(uint256FFUf5x, BigInt("0"))
		assert.equal(uint256QF9zVy8, BigInt("3000000000000000000000000000"))
		await expect(ReviveOetIPeS.recoverERC20.call(uintWoQsWuv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWhBjIPO = await Revive.new({from: accounts[4]});
		const uintlFICjXV = BigInt("455")
		const addressRODDEFU = accounts[2]
		const uintuRSLc5R = BigInt("1588")
		const addressZrjQKnr = accounts[2]
		const uintEl5CQJp = BigInt("207")
		const byteS5fEc3 = "0x060c120803151e0e1713080a120b011018060c160d141a0a01131b040004060a"
		const uintRq8vDWu = BigInt("823")
		const addressU3VGFN4 = accounts[0]
		const byteUuYdM31 = "0x160c101c12110a1514121b151f19090a0610060d092019120b1f0a11160e061c"
		const addressXEU65JW = accounts[0]
		const addresscWlrgcE = await ReviveWhBjIPO.recoverERC20.call(addressRODDEFU, uintlFICjXV, {from: accounts[4]});
		const addressaeEiR87 = await ReviveWhBjIPO.recoverERC20.call(addressZrjQKnr, uintuRSLc5R, {from: accounts[1]});
		const bool53DSxq = await ReviveWhBjIPO.extendLock.call(byteS5fEc3, uintEl5CQJp, {from: accounts[1]});
		const boolKEzsdOo = await ReviveWhBjIPO.approve.call(addressU3VGFN4, uintRq8vDWu, {from: accounts[2]});
		const uint256ficyOwZ = await ReviveWhBjIPO.tokensUnlockable.call(addressXEU65JW, byteUuYdM31, {from: accounts[5]});

		await expect(ReviveWhBjIPO.recoverERC20.call(addressRODDEFU, uintlFICjXV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveW5gTq9D = await Revive.new({from: accounts[3]});
		const addressP4omtBU = accounts[0]
		const uintrPRJyFb = BigInt("1219")
		const uintMpuZAdN = BigInt("555")
		const addressxjHXzFF = accounts[2]
		const bytewi70hRt = "0x1a1414011a121a06100d13121313161a0f021a060b0507161f0f000606110e0e"
		const addressWObx9qW = accounts[3]
		const uint256RL4WwfO = await ReviveW5gTq9D.balanceOf.call(addressP4omtBU, {from: accounts[3]});
		const uint256v6SyA51 = await ReviveW5gTq9D.recoverERC20.call(uintrPRJyFb, {from: accounts[0]});
		const boolvFMSywp = await ReviveW5gTq9D.transfer.call(addressxjHXzFF, uintMpuZAdN, {from: accounts[0]});
		const uint256qHgOAMF = await ReviveW5gTq9D.tokensLocked.call(addressWObx9qW, bytewi70hRt, {from: accounts[3]});

		assert.equal(uint256RL4WwfO, BigInt("0"))
		await expect(ReviveW5gTq9D.recoverERC20.call(uintrPRJyFb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const addressyc2dGGt = accounts[4]
		const addresshLhqAru = accounts[4]
		const uintgv8l8Hv = BigInt("1534")
		const byteRwEAKT8 = "0x120c0f0a021a09191403141c1f05060a0a0d19fffffffe121b1d0e201f0f060c1a1b0c"
		const addressaBoT7g1 = accounts[4]
		const uintDUUUWBo = BigInt("290")
		const uintZ92H77T = BigInt("506")
		const bytepMWm1PS = "0x0d03010c040c131f191f19061208120a1d1e0e0c0a10101f0a0f07050e020b1a"
		const uintLhCFOZ2 = BigInt("1402")
		const uintQu6xXyJ = BigInt("1664")
		const byteYtqjIaO = "0x0809170f05110909030c071f0a0f1e1c16131407041c0e180e191e0e0120020a"
		const addressXcVhcfT = accounts[3]
		const uintamkUL0g = BigInt("675")
		const addressT4quBzL = accounts[4]
		const addressyn5zx2 = accounts[0]
		const uintA26QUx7 = BigInt("1994")
		const uintX8B4OsB = BigInt("1416")
		const byteXyuZE0A = "0x0e010d061112170f1d2014020b0416130d0f10070d131f1e1200061f0a050f1e"
		const uintW5m4cmU = BigInt("186")
		const bytersVvN8C = "0x08121d0e12181a15080f08131a121c0b1c141500110201061b19050b20191e15"
		const addressPkSh7Ow = accounts[2]
		const uintjaYC9cC = BigInt("1432")
		const addressLAZlzoP = accounts[2]
		const uint256eU3otDP = await ReviveOetIPeS.getUnlockableTokens.call(addressyc2dGGt, {from: accounts[1]});
		const uint256FQbp7jD = await ReviveOetIPeS.totalBalanceOf.call(addresshLhqAru, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Ilz4Hrg = await ReviveOetIPeS.tokensLockedAtTime.call(addressaBoT7g1, byteRwEAKT8, uintgv8l8Hv, {from: accounts[2]});
		const boolResqVC9 = await ReviveOetIPeS.isOwner.call({from: accounts[4]});
		const boolN9M1Kml = await ReviveOetIPeS.lock.call(bytepMWm1PS, uintZ92H77T, uintDUUUWBo, {from: accounts[1]});
		const boolcB2JPR9 = await ReviveOetIPeS.transferWithLock.call(addressXcVhcfT, byteYtqjIaO, uintQu6xXyJ, uintLhCFOZ2, {from: accounts[0]});
		const boolcy4r7ky = await ReviveOetIPeS.decreaseAllowance.call(addressT4quBzL, uintamkUL0g, {from: accounts[4]});
		const uint256mP6k0mV = await ReviveOetIPeS.unlock.call(addressyn5zx2, {from: "0x0000000000000000000000000000000000000001"});
		const boolZfCdPeT = await ReviveOetIPeS.lock.call(byteXyuZE0A, uintX8B4OsB, uintA26QUx7, {from: accounts[4]});
		const uint256SyKbIWQ = await ReviveOetIPeS.tokensLockedAtTime.call(addressPkSh7Ow, bytersVvN8C, uintW5m4cmU, {from: accounts[4]});
		const boolsy7JwM6 = await ReviveOetIPeS.transfer.call(addressLAZlzoP, uintjaYC9cC, {from: accounts[2]});

		assert.equal(uint256FQbp7jD, BigInt("0"))
		assert.equal(uint256eU3otDP, BigInt("0"))
		await expect(ReviveOetIPeS.tokensLockedAtTime.call(addressaBoT7g1, byteRwEAKT8, uintgv8l8Hv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const uintDZFjZBo = BigInt("953")
		const uintRYEGe9O = BigInt("290")
		const uintWsl4y03 = BigInt("450")
		const byteCz1MNRC = "0x160b0502071c09141a0d1618040a1e161d0d0e121509151f010f0b0c1f161609"
		const uint256cMyHLqA = await ReviveOetIPeS.recoverERC20.call(uintDZFjZBo, {from: accounts[5]});
		const boolN9M1Kml = await ReviveOetIPeS.lock.call(byteCz1MNRC, uintWsl4y03, uintRYEGe9O, {from: accounts[1]});

		await expect(ReviveOetIPeS.recoverERC20.call(uintDZFjZBo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const addressuHQlMmc = accounts[2]
		const uintvhmBWc2 = BigInt("1050")
		const addresspwWxrxD = accounts[1]
		const uint256sbJkNr1 = await ReviveOetIPeS.getUnlockableTokens.call(addressuHQlMmc, {from: accounts[0]});
		const uint256vnlBazm = await ReviveOetIPeS.recoverERC20.call(uintvhmBWc2, {from: accounts[4]});
		const uint256IGsi2ZK = await ReviveOetIPeS.getUnlockableTokens.call(addresspwWxrxD, {from: "0x0000000000000000000000000000000000000001"});
		const addressHdNkzR = await ReviveOetIPeS.owner.call({from: accounts[2]});

		assert.equal(uint256sbJkNr1, BigInt("0"))
		await expect(ReviveOetIPeS.recoverERC20.call(uintvhmBWc2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const uintZ9LTws6 = BigInt("1594")
		const addressnp4AFL9 = "0x0000000000000000000000000000000000000001"
		const uint256aaAzUzj = await ReviveOetIPeS.recoverERC20.call(uintZ9LTws6, {from: accounts[5]});
		const addressWfHIWWX = await ReviveOetIPeS.owner.call({from: accounts[3]});
		const uint256FFUf5x = await ReviveOetIPeS.unlock.call(addressnp4AFL9, {from: accounts[3]});

		await expect(ReviveOetIPeS.recoverERC20.call(uintZ9LTws6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDRiCla = await Revive.new({from: accounts[4]});
		const uintlHcFvs8 = BigInt("1804")
		const uintwcwXmAX = BigInt("877")
		const addressKSvThAe = accounts[0]
		const byter0apUoo = "0x191e1413041002171d0a1c1a0c1b11021c1719111f14010413191017041e1718"
		const addressHK97t1i = accounts[5]
		const uint256R5DHeBa = await ReviveDRiCla.recoverERC20.call(uintlHcFvs8, {from: accounts[3]});
		const addressYkL9Qzi = await ReviveDRiCla.recoverERC20.call(addressKSvThAe, uintwcwXmAX, {from: accounts[1]});
		const uint256Ajgc4hu = await ReviveDRiCla.tokensLocked.call(addressHK97t1i, byter0apUoo, {from: accounts[4]});

		await expect(ReviveDRiCla.recoverERC20.call(uintlHcFvs8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOetIPeS = await Revive.new({from: accounts[2]});
		const uintApJknE3 = BigInt("1021")
		const addressglr5HE6 = accounts[1]
		const addressgta2zDF = accounts[4]
		const uint256LDQWezD = await ReviveOetIPeS.recoverERC20.call(uintApJknE3, {from: accounts[4]});
		const booluyuNbM3 = await ReviveOetIPeS.isOwner.call({from: accounts[5]});
		const uint256Xbbf10V = await ReviveOetIPeS.allowance.call(addressgta2zDF, addressglr5HE6, {from: accounts[3]});

		await expect(ReviveOetIPeS.recoverERC20.call(uintApJknE3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})