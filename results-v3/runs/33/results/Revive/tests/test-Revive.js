const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveLCLNjM0 = await Revive.new({from: accounts[5]});
		const uintu8qo8Q = BigInt("110")
		const uintHFqVukK = BigInt("686")
		const byteH5w34eu = "0x0e1b09150c0d181d081117200e1a1f0b032014090d160816071f131e20171a14"
		const addressOm8krNq = accounts[0]
		const addressdEhJWsa = await ReviveLCLNjM0.owner.call({from: accounts[4]});
		const boolXUTr1Dy = await ReviveLCLNjM0.transferWithLock.call(addressOm8krNq, byteH5w34eu, uintHFqVukK, uintu8qo8Q, {from: accounts[4]});
		const addressv7Jm2g8 = await ReviveLCLNjM0.owner.call({from: accounts[0]});

		assert.equal(addressdEhJWsa, 0x44b1994af5Bab27841189730Bcb74ACc8c820c04)
		await expect(ReviveLCLNjM0.transferWithLock.call(addressOm8krNq, byteH5w34eu, uintHFqVukK, uintu8qo8Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqRvXsfj = await Revive.new({from: accounts[3]});
		const uintUy7pOq6 = BigInt("1268")
		const addressUh3eg24 = accounts[5]
		const uintCsLiYr0 = BigInt("1245")
		const addressbGEFJY0 = accounts[4]
		const uintfXAeJ72 = BigInt("1637")
		const address82SV3l = accounts[1]
		const uintt6oc8TZ = BigInt("433")
		const addressCccm2JS = accounts[0]
		const uint256KwDLuny = await ReviveqRvXsfj.recoverERC20.call(uintUy7pOq6, {from: accounts[2]});
		const uint256IEH8uul = await ReviveqRvXsfj.getUnlockableTokens.call(addressUh3eg24, {from: accounts[5]});
		const boolpmvhZ7 = await ReviveqRvXsfj.isOwner.call({from: accounts[2]});
		const boolhBAOuRm = await ReviveqRvXsfj.approve.call(addressbGEFJY0, uintCsLiYr0, {from: accounts[3]});
		const boolhJoXfp0 = await ReviveqRvXsfj.increaseAllowance.call(address82SV3l, uintfXAeJ72, {from: accounts[0]});
		const boolZyip5pb = await ReviveqRvXsfj.decreaseAllowance.call(addressCccm2JS, uintt6oc8TZ, {from: accounts[2]});

		await expect(ReviveqRvXsfj.recoverERC20.call(uintUy7pOq6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uinthHrfktA = BigInt("1388")
		const addressufqcDLs = accounts[5]
		const boolxnkTRPU = await RevivezCBpWhA.approve.call(addressufqcDLs, uinthHrfktA, {from: accounts[0]});
		const uint256roZGulf = await RevivezCBpWhA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxnkTRPU, true)
		assert.equal(uint256roZGulf, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const RevivexCZSVHF = await Revive.new({from: accounts[4]});
		const addressYnUjOPQ = accounts[2]
		const bytecjPDWPN = "0x02111204160d0b001013191a071b1d041f0f17180a141c08030e0a1a05061b07"
		const addressODVMF9M = accounts[2]
		const address4XKxgW = await RevivexCZSVHF.transferOwnership.call(addressYnUjOPQ, {from: accounts[1]});
		const boolnyRtJvr = await RevivexCZSVHF.isOwner.call({from: accounts[4]});
		const uint256Bng3C5s = await RevivexCZSVHF.tokensUnlockable.call(addressODVMF9M, bytecjPDWPN, {from: accounts[4]});

		await expect(RevivexCZSVHF.transferOwnership.call(addressYnUjOPQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexGMqxKH = await Revive.new({from: accounts[1]});
		const addressse8SaWj = accounts[1]
		const uint256thTdGe9 = await RevivexGMqxKH.getUnlockableTokens.call(addressse8SaWj, {from: accounts[0]});
		const uint256VifoXvV = await RevivexGMqxKH.totalSupply.call({from: accounts[3]});
		const addressAj7nykP = await RevivexGMqxKH.owner.call({from: accounts[0]});

		assert.equal(addressAj7nykP, 0x9496e47c52ae77856413A82Ce590AD4987a81eac)
		assert.equal(uint256VifoXvV, BigInt("3000000000000000000000000000"))
		assert.equal(uint256thTdGe9, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveK5IGYmi = await Revive.new({from: accounts[0]});
		const addressFqV10GM = accounts[5]
		const addressDlovMVD = accounts[5]
		const addressoRk0j9N = "0x0000000000000000000000000000000000000001"
		const uintuVLaPf = BigInt("222")
		const byteFPZUB5K = "0x1817011f1c10080a071315021d0104171f070e0e12080614041007031e0d001e"
		const byteusCM6Ox = "0x13120c1c0c1d1419050a12081e151c181e011c1a1817051c130400191d1b1908"
		const addressgVgmpgs = accounts[1]
		const uintJe0rLGX = BigInt("1159")
		const uintLIWySF9 = BigInt("1196")
		const addressrGzifPY = accounts[2]
		const addressF3F2lQt = accounts[2]
		const uint256d6F1nw = await ReviveK5IGYmi.totalBalanceOf.call(addressFqV10GM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BBfuVK = await ReviveK5IGYmi.allowance.call(addressoRk0j9N, addressDlovMVD, {from: accounts[3]});
		const boolz3mghZ5 = await ReviveK5IGYmi.extendLock.call(byteFPZUB5K, uintuVLaPf, {from: accounts[0]});
		const uint256Dj2Wfve = await ReviveK5IGYmi.tokensUnlockable.call(addressgVgmpgs, byteusCM6Ox, {from: accounts[5]});
		const uint256Yf207Cw = await ReviveK5IGYmi.recoverERC20.call(uintJe0rLGX, {from: accounts[2]});
		const boolUK1HsTH = await ReviveK5IGYmi.transferFrom.call(addressF3F2lQt, addressrGzifPY, uintLIWySF9, {from: accounts[1]});

		assert.equal(uint256BBfuVK, BigInt("0"))
		assert.equal(uint256d6F1nw, BigInt("0"))
		await expect(ReviveK5IGYmi.extendLock.call(byteFPZUB5K, uintuVLaPf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEOnVncG = await Revive.new({from: accounts[2]});
		const uintKzm3gg = BigInt("1923")
		const addressuaTgazI = "0x0000000000000000000000000000000000000001"
		const uintKRfPK9R = BigInt("552")
		const bytemF1Xzbj = "0x06131d021611110414171c1d0d1717060f0b1e110c0c0809070e080c15011e07"
		const addressQiEdESR = accounts[0]
		const addressPThhyLe = accounts[0]
		const boolOHP9FjZ = await ReviveEOnVncG.approve.call(addressuaTgazI, uintKzm3gg, {from: accounts[3]});
		const boolkn2SGVE = await ReviveEOnVncG.increaseLockAmount.call(bytemF1Xzbj, uintKRfPK9R, {from: accounts[3]});
		await ReviveEOnVncG.onlyOwner.call({from: accounts[3]});
		const address0qOQUh = await ReviveEOnVncG.transferOwnership.call(addressQiEdESR, {from: accounts[2]});
		const uint256fDYXExn = await ReviveEOnVncG.unlock.call(addressPThhyLe, {from: accounts[3]});

		assert.equal(boolOHP9FjZ, true)
		await expect(ReviveEOnVncG.increaseLockAmount.call(bytemF1Xzbj, uintKRfPK9R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const addresspRoEuDX = accounts[1]
		const uintywbXNWD = BigInt("1222")
		const addressVSu0zTW = accounts[1]
		const uint256Vs9no97 = await ReviveDjDh770.unlock.call(addresspRoEuDX, {from: accounts[2]});
		const addresszeNICD0 = await ReviveDjDh770.recoverERC20.call(addressVSu0zTW, uintywbXNWD, {from: accounts[3]});
		const boolaqn1egr = await ReviveDjDh770.isOwner.call({from: accounts[3]});

		assert.equal(uint256Vs9no97, BigInt("0"))
		await expect(ReviveDjDh770.recoverERC20.call(addressVSu0zTW, uintywbXNWD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQXF7Hdx = await Revive.new({from: accounts[5]});
		const uintKP4O1lU = BigInt("1944")
		const addressmsPMWy0 = "0x0000000000000000000000000000000000000001"
		const uintVhzKiku = BigInt("712")
		const addressoLqAAch = accounts[1]
		const boolQA8UoyX = await ReviveQXF7Hdx.increaseAllowance.call(addressmsPMWy0, uintKP4O1lU, {from: accounts[0]});
		const uint256BVJyCMg = await ReviveQXF7Hdx.recoverERC20.call(uintVhzKiku, {from: accounts[0]});
		await ReviveQXF7Hdx.onlyOwner.call({from: accounts[0]});
		await ReviveQXF7Hdx.onlyOwner.call({from: accounts[0]});
		const uint256uHCEMIQ = await ReviveQXF7Hdx.totalBalanceOf.call(addressoLqAAch, {from: accounts[2]});

		assert.equal(boolQA8UoyX, true)
		await expect(ReviveQXF7Hdx.recoverERC20.call(uintVhzKiku, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveK5IGYmi = await Revive.new({from: accounts[0]});
		const addressPB3ocdt = accounts[6]
		const uintJeVx5r = BigInt("952")
		const addresseLULsLw = accounts[3]
		const addresso1lqiL = accounts[5]
		const addressU89FrUw = "0x0000000000000000000000000000000000000001"
		const uintKRu9xm = BigInt("222")
		const byteOig8TNP = "0x1817011f1c10080a071315021d0104171f070e0e12080614041007031e0d001e"
		const byteRhcSKaQ = "0x13120c1c0c1d1419050a12081e151c181e011c1a1817051c130400191d1b1908"
		const addressGHVFCY4 = accounts[1]
		const addressmISK37F = accounts[1]
		const uintt8jfoJZ = BigInt("1159")
		const uintoQCkJgJ = BigInt("1196")
		const addressp2SjK9h = accounts[2]
		const addressaaBeSTP = accounts[2]
		const uint256d6F1nw = await ReviveK5IGYmi.totalBalanceOf.call(addressPB3ocdt, {from: "0x0000000000000000000000000000000000000001"});
		const boolZPUvtew = await ReviveK5IGYmi.increaseAllowance.call(addresseLULsLw, uintJeVx5r, {from: accounts[2]});
		await ReviveK5IGYmi.onlyOwner.call({from: accounts[4]});
		const uint256BBfuVK = await ReviveK5IGYmi.allowance.call(addressU89FrUw, addresso1lqiL, {from: accounts[3]});
		const boolz3mghZ5 = await ReviveK5IGYmi.extendLock.call(byteOig8TNP, uintKRu9xm, {from: accounts[0]});
		const uint256Dj2Wfve = await ReviveK5IGYmi.tokensUnlockable.call(addressGHVFCY4, byteRhcSKaQ, {from: accounts[5]});
		const uint256OWdUMqn = await ReviveK5IGYmi.balanceOf.call(addressmISK37F, {from: accounts[0]});
		const uint256Yf207Cw = await ReviveK5IGYmi.recoverERC20.call(uintt8jfoJZ, {from: accounts[2]});
		const boolUK1HsTH = await ReviveK5IGYmi.transferFrom.call(addressaaBeSTP, addressp2SjK9h, uintoQCkJgJ, {from: accounts[1]});

		assert.equal(boolZPUvtew, true)
		assert.equal(uint256d6F1nw, BigInt("0"))
		await expect(ReviveK5IGYmi.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEOnVncG = await Revive.new({from: accounts[2]});
		const uintHYuHZOj = BigInt("1923")
		const addressWZfBYX = "0x0000000000000000000000000000000000000001"
		const byteuFvUTv = "0x0217150e1404180e1c081d07190211031516121e1217080d1814120d1a090a18"
		const addressddoLVZs = accounts[5]
		const uintGV5Zt4p = BigInt("497")
		const byteLghF63R = "0x06131d021611110414171c1d0d1717060f0b1e110c0c0809070e080c15011e07"
		const addressMJML67C = accounts[0]
		const addressNZMkaab = accounts[0]
		const uintEk0JaCP = BigInt("1286")
		const addresskZEQ83 = accounts[0]
		const boolOHP9FjZ = await ReviveEOnVncG.approve.call(addressWZfBYX, uintHYuHZOj, {from: accounts[3]});
		const uint256LIbJ4A = await ReviveEOnVncG.tokensUnlockable.call(addressddoLVZs, byteuFvUTv, {from: accounts[2]});
		const boolkn2SGVE = await ReviveEOnVncG.increaseLockAmount.call(byteLghF63R, uintGV5Zt4p, {from: accounts[3]});
		await ReviveEOnVncG.onlyOwner.call({from: accounts[3]});
		const address0qOQUh = await ReviveEOnVncG.transferOwnership.call(addressMJML67C, {from: accounts[2]});
		const uint256fDYXExn = await ReviveEOnVncG.unlock.call(addressNZMkaab, {from: accounts[3]});
		const boolmmJI9k9 = await ReviveEOnVncG.increaseAllowance.call(addresskZEQ83, uintEk0JaCP, {from: accounts[1]});

		assert.equal(boolOHP9FjZ, true)
		assert.equal(uint256LIbJ4A, BigInt("0"))
		await expect(ReviveEOnVncG.increaseLockAmount.call(byteLghF63R, uintGV5Zt4p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexGMqxKH = await Revive.new({from: accounts[1]});
		const uintim1OBcY = BigInt("887")
		const addressYlFBwhk = "0x0000000000000000000000000000000000000001"
		const uintzdqCei0 = BigInt("1097")
		const byteMG1PR41 = "0x05010606090e14011f120c0b0d0a041915151e041a121b10091619101f091e1e"
		const byteuIcW0VF = "0x17060f1e1c1f140c02041d0f0e0b1b0618190d0a0e0b110f111c07090a170c0d"
		const addressuIYAYGt = accounts[0]
		const uint256VifoXvV = await RevivexGMqxKH.totalSupply.call({from: accounts[3]});
		const addressAj7nykP = await RevivexGMqxKH.owner.call({from: accounts[0]});
		const addresspmTEl1O = await RevivexGMqxKH.recoverERC20.call(addressYlFBwhk, uintim1OBcY, {from: accounts[1]});
		const boolbT3z91I = await RevivexGMqxKH.increaseLockAmount.call(byteMG1PR41, uintzdqCei0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pr3qrP0 = await RevivexGMqxKH.tokensUnlockable.call(addressuIYAYGt, byteuIcW0VF, {from: accounts[5]});

		assert.equal(addressAj7nykP, 0x9496e47c52ae77856413A82Ce590AD4987a81eac)
		assert.equal(uint256VifoXvV, BigInt("3000000000000000000000000000"))
		await expect(RevivexGMqxKH.recoverERC20.call(addressYlFBwhk, uintim1OBcY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewfF7nNB = await Revive.new({from: accounts[4]});
		const byteD2wXmXr = "0x1811080c11071601150d17051002121201191e201408171c020711180b0a0e0a"
		const addressnOSxpb = accounts[3]
		const uintscX4Jc2 = BigInt("1200")
		const addresseTjs3ot = accounts[0]
		const uintizD7MY = BigInt("187")
		const byteTXW8Ss = "0x1c13051d021b1909071f041f0d11040712001e07021e0c1806181b161f1d040c"
		const uint256n3XeVmG = await RevivewfF7nNB.tokensLocked.call(addressnOSxpb, byteD2wXmXr, {from: accounts[3]});
		const boolG4ilZPX = await RevivewfF7nNB.decreaseAllowance.call(addresseTjs3ot, uintscX4Jc2, {from: accounts[0]});
		const boolod7E6WF = await RevivewfF7nNB.increaseLockAmount.call(byteTXW8Ss, uintizD7MY, {from: accounts[2]});

		assert.equal(uint256n3XeVmG, BigInt("0"))
		await expect(RevivewfF7nNB.decreaseAllowance.call(addresseTjs3ot, uintscX4Jc2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexGMqxKH = await Revive.new({from: accounts[1]});
		const addressRdiMQQl = accounts[1]
		const uintRS5C7C4 = BigInt("746")
		const addresspN8y5R = accounts[0]
		const addressSPk7Q5 = accounts[0]
		const uint256thTdGe9 = await RevivexGMqxKH.getUnlockableTokens.call(addressRdiMQQl, {from: accounts[0]});
		const boolGKiha40 = await RevivexGMqxKH.transferFrom.call(addressSPk7Q5, addresspN8y5R, uintRS5C7C4, {from: accounts[3]});
		const addressAj7nykP = await RevivexGMqxKH.owner.call({from: accounts[0]});

		assert.equal(uint256thTdGe9, BigInt("0"))
		await expect(RevivexGMqxKH.transferFrom.call(addressSPk7Q5, addresspN8y5R, uintRS5C7C4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintY45SPlC = BigInt("1618")
		const byteU9WyEI0 = "0x17110d1120080a09131a180708121718071a08110b1f1d1a120f09171b07110c"
		const addressrc4GXx2 = accounts[0]
		const uintI6lUdm7 = BigInt("1388")
		const addressURidnLg = accounts[5]
		const addressZN8VuOA = accounts[3]
		const uint256l0vuah6 = await RevivezCBpWhA.tokensLockedAtTime.call(addressrc4GXx2, byteU9WyEI0, uintY45SPlC, {from: accounts[4]});
		const boolxnkTRPU = await RevivezCBpWhA.approve.call(addressURidnLg, uintI6lUdm7, {from: accounts[0]});
		const uint256BrBOZz9 = await RevivezCBpWhA.totalBalanceOf.call(addressZN8VuOA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxnkTRPU, true)
		assert.equal(uint256BrBOZz9, BigInt("0"))
		assert.equal(uint256l0vuah6, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveLCLNjM0 = await Revive.new({from: accounts[5]});
		const addressWBCMlbn = accounts[2]
		const uintoXFoLWX = BigInt("82")
		const uintWLqFszB = BigInt("686")
		const byteAbOZTp6 = "0x0e1b09150c0d181d081117200e1a1f0b032014090d160816071f131e20171a14"
		const addresscy7Ja3C = accounts[0]
		const addressyUxTEyM = accounts[1]
		const addressZTZrzZc = await ReviveLCLNjM0.transferOwnership.call(addressWBCMlbn, {from: accounts[5]});
		const addressdEhJWsa = await ReviveLCLNjM0.owner.call({from: accounts[4]});
		const boolmmwyJGR = await ReviveLCLNjM0.isOwner.call({from: accounts[5]});
		const boolXUTr1Dy = await ReviveLCLNjM0.transferWithLock.call(addresscy7Ja3C, byteAbOZTp6, uintWLqFszB, uintoXFoLWX, {from: accounts[4]});
		const addressv7Jm2g8 = await ReviveLCLNjM0.owner.call({from: accounts[0]});
		const uint256FaAAR0s = await ReviveLCLNjM0.balanceOf.call(addressyUxTEyM, {from: accounts[3]});

		assert.equal(addressdEhJWsa, 0x44b1994af5Bab27841189730Bcb74ACc8c820c04)
		assert.equal(boolmmwyJGR, true)
		await expect(ReviveLCLNjM0.transferWithLock.call(addresscy7Ja3C, byteAbOZTp6, uintWLqFszB, uintoXFoLWX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintKekGi4x = BigInt("1618")
		const byteplMxxZr = "0x17110d1120080a09131a180708121718071a08110b1f1d1a120f09171b07110c"
		const addresswO7Tr6 = accounts[0]
		const uintdv46ppv = BigInt("1388")
		const addressUrFvUn1 = accounts[6]
		const addresskt3r11Y = accounts[3]
		const uintJdyKm7r = BigInt("973")
		const uintdZgySy = BigInt("1238")
		const byteqVGkOcQ = "0x0e1b19131b1c181d1204110512191808010c07031f161d14171f0b1c1f050206"
		const uint256l0vuah6 = await RevivezCBpWhA.tokensLockedAtTime.call(addresswO7Tr6, byteplMxxZr, uintKekGi4x, {from: accounts[4]});
		const boolxnkTRPU = await RevivezCBpWhA.approve.call(addressUrFvUn1, uintdv46ppv, {from: accounts[0]});
		const uint256BrBOZz9 = await RevivezCBpWhA.totalBalanceOf.call(addresskt3r11Y, {from: "0x0000000000000000000000000000000000000001"});
		const boolKgmdOds = await RevivezCBpWhA.lock.call(byteqVGkOcQ, uintdZgySy, uintJdyKm7r, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxnkTRPU, true)
		assert.equal(uint256BrBOZz9, BigInt("0"))
		assert.equal(uint256l0vuah6, BigInt("0"))
		await expect(RevivezCBpWhA.lock.call(byteqVGkOcQ, uintdZgySy, uintJdyKm7r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const addressLGwxSUY = accounts[2]
		const uintzRuiX47 = BigInt("2012")
		const byteWym1nTA = "0x19171a0c1e0202060f170e12111617160b15101c1300000a1d1c021714081808"
		const addressdVlAa5H = accounts[0]
		const uintBqvOLMP = BigInt("481")
		const uint256Vs9no97 = await ReviveDjDh770.unlock.call(addressLGwxSUY, {from: accounts[2]});
		const uint256rLkg5C1 = await ReviveDjDh770.tokensLockedAtTime.call(addressdVlAa5H, byteWym1nTA, uintzRuiX47, {from: accounts[3]});
		const addressWCuciw9 = await ReviveDjDh770.owner.call({from: accounts[0]});
		const uint256Geh34W = await ReviveDjDh770.recoverERC20.call(uintBqvOLMP, {from: accounts[4]});
		const boolaqn1egr = await ReviveDjDh770.isOwner.call({from: accounts[3]});

		assert.equal(addressWCuciw9, 0x83164080452709dC0a873b21bE50714A0407AD37)
		assert.equal(uint256Vs9no97, BigInt("0"))
		assert.equal(uint256rLkg5C1, BigInt("0"))
		await expect(ReviveDjDh770.recoverERC20.call(uintBqvOLMP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintdzlxsW4 = BigInt("1618")
		const bytevYfPHua = "0x17110d111e080a09131a180708121718071a08110b1f1d1a120f09171b07110c"
		const addressbKHJgb = accounts[0]
		const uintKNYiNO = BigInt("1388")
		const addressAVgHMG = accounts[5]
		const uintwoYyWG9 = BigInt("1739")
		const addresssQ2MGy = accounts[3]
		const addressTDPgRZF = accounts[3]
		const uint256l0vuah6 = await RevivezCBpWhA.tokensLockedAtTime.call(addressbKHJgb, bytevYfPHua, uintdzlxsW4, {from: accounts[4]});
		const boolxnkTRPU = await RevivezCBpWhA.approve.call(addressAVgHMG, uintKNYiNO, {from: accounts[0]});
		const uint256KdaLWPm = await RevivezCBpWhA.totalSupply.call({from: accounts[5]});
		const boolIcC5lIT = await RevivezCBpWhA.transfer.call(addresssQ2MGy, uintwoYyWG9, {from: accounts[4]});
		const uint256BrBOZz9 = await RevivezCBpWhA.totalBalanceOf.call(addressTDPgRZF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIcC5lIT, true)
		assert.equal(boolxnkTRPU, true)
		assert.equal(uint256BrBOZz9, BigInt("0"))
		assert.equal(uint256KdaLWPm, BigInt("3000000000000000000000000000"))
		assert.equal(uint256l0vuah6, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintnctYWO3 = BigInt("1618")
		const bytejC5aXvT = "0x17110d1120080a09131a180708121718071a08110b1f1d1a120f09171b07110c"
		const addressGi8D3TW = accounts[0]
		const uintLsgOCQk = BigInt("1388")
		const addressKafvyIy = accounts[5]
		const uintcvwmDYJ = BigInt("897")
		const addressMv2oKv = accounts[4]
		const uint256l0vuah6 = await RevivezCBpWhA.tokensLockedAtTime.call(addressGi8D3TW, bytejC5aXvT, uintnctYWO3, {from: accounts[4]});
		const boolxnkTRPU = await RevivezCBpWhA.approve.call(addressKafvyIy, uintLsgOCQk, {from: accounts[0]});
		const uint256xAe1mrs = await RevivezCBpWhA.recoverERC20.call(uintcvwmDYJ, {from: accounts[2]});
		const uint256BrBOZz9 = await RevivezCBpWhA.totalBalanceOf.call(addressMv2oKv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxnkTRPU, true)
		assert.equal(uint256l0vuah6, BigInt("0"))
		await expect(RevivezCBpWhA.recoverERC20.call(uintcvwmDYJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintEGJsl4K = BigInt("718")
		const uintvmPHGvt = BigInt("694")
		const uintiyrr6CK = BigInt("1148")
		const byteYfJOrdl = "0x131d131c1e030308180b1e1e160b0f010c020c16180a1f0c110201200a071116"
		const uint256roZGulf = await RevivezCBpWhA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolX7LMKJG = await RevivezCBpWhA.isOwner.call({from: accounts[5]});
		const uint256lwBKUoj = await RevivezCBpWhA.recoverERC20.call(uintEGJsl4K, {from: accounts[3]});
		const boolhyXFvL1 = await RevivezCBpWhA.lock.call(byteYfJOrdl, uintiyrr6CK, uintvmPHGvt, {from: accounts[1]});

		assert.equal(boolX7LMKJG, false)
		assert.equal(uint256roZGulf, BigInt("3000000000000000000000000000"))
		await expect(RevivezCBpWhA.recoverERC20.call(uintEGJsl4K, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewfF7nNB = await Revive.new({from: accounts[4]});
		const byteIfoneck = "0x1811080c11071601150d19051002121201191e201408171c020711180b0a0e0a"
		const addressv9td1J = accounts[3]
		const uintqfePe1U = BigInt("187")
		const byten2bEXrp = "0x1c13051d021b1909071f041f0d11040712001e07021e0c1806181b161f1d040c"
		const uint256n3XeVmG = await RevivewfF7nNB.tokensLocked.call(addressv9td1J, byteIfoneck, {from: accounts[3]});
		await RevivewfF7nNB.renounceOwnership.call({from: accounts[4]});
		const boolod7E6WF = await RevivewfF7nNB.increaseLockAmount.call(byten2bEXrp, uintqfePe1U, {from: accounts[2]});

		assert.equal(uint256n3XeVmG, BigInt("0"))
		await expect(RevivewfF7nNB.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const uintYMt6bnI = BigInt("1410")
		const addressRv9ZKj = accounts[2]
		const byteJMpM9fp = "0x0d04080f0e051a180d0505140d181f0614071a07030502180c101b1807131508"
		const addressXSFAol0 = accounts[2]
		const uint256znvdiDY = await ReviveDjDh770.recoverERC20.call(uintYMt6bnI, {from: accounts[1]});
		const uint256Vs9no97 = await ReviveDjDh770.unlock.call(addressRv9ZKj, {from: accounts[2]});
		const uint256quW9Vj = await ReviveDjDh770.tokensLocked.call(addressXSFAol0, byteJMpM9fp, {from: accounts[2]});
		const boolaqn1egr = await ReviveDjDh770.isOwner.call({from: accounts[3]});

		await expect(ReviveDjDh770.recoverERC20.call(uintYMt6bnI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const uintnpWQ5xZ = BigInt("2015")
		const addresswfvsdW2 = accounts[2]
		const uintleXdQwd = BigInt("820")
		const bytePK85Ww1 = "0x19171a0c1e0202060f170e12111617160b15101c1300000a1d1c021714081808"
		const addressT671Ill = accounts[0]
		const uint256QX2IgaD = await ReviveDjDh770.recoverERC20.call(uintnpWQ5xZ, {from: accounts[1]});
		const uint256Vs9no97 = await ReviveDjDh770.unlock.call(addresswfvsdW2, {from: accounts[2]});
		const uint256rLkg5C1 = await ReviveDjDh770.tokensLockedAtTime.call(addressT671Ill, bytePK85Ww1, uintleXdQwd, {from: accounts[3]});
		const boolaqn1egr = await ReviveDjDh770.isOwner.call({from: accounts[3]});

		await expect(ReviveDjDh770.recoverERC20.call(uintnpWQ5xZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintZaCbK2f = BigInt("1995")
		const uintmNHXrBM = BigInt("1109")
		const uintSQA20t = BigInt("995")
		const bytetehp3ez = "0x0714010e1206060305031a1d0e0514040210040b07070e04141a1f150f0b101d"
		const addressNmfycw = accounts[3]
		const uint256wsig2oM = await RevivezCBpWhA.recoverERC20.call(uintZaCbK2f, {from: accounts[3]});
		const boolU2JJJny = await RevivezCBpWhA.transferWithLock.call(addressNmfycw, bytetehp3ez, uintSQA20t, uintmNHXrBM, {from: accounts[1]});

		await expect(RevivezCBpWhA.recoverERC20.call(uintZaCbK2f, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexGMqxKH = await Revive.new({from: accounts[1]});
		const addressZzxTc3A = accounts[2]
		const uintKtfBA1w = BigInt("254")
		const addressnDkVdC = accounts[3]
		const uint256thTdGe9 = await RevivexGMqxKH.getUnlockableTokens.call(addressZzxTc3A, {from: accounts[0]});
		const uint256v2V4faf = await RevivexGMqxKH.recoverERC20.call(uintKtfBA1w, {from: accounts[0]});
		const addressFXzA2FN = await RevivexGMqxKH.owner.call({from: accounts[3]});
		const addressxT1qkMP = await RevivexGMqxKH.transferOwnership.call(addressnDkVdC, {from: accounts[0]});

		assert.equal(uint256thTdGe9, BigInt("0"))
		await expect(RevivexGMqxKH.recoverERC20.call(uintKtfBA1w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const addressPuwjhIy = accounts[2]
		const uintq2BHmO0 = BigInt("1099")
		const uintjsCtUKs = BigInt("1106")
		const bytezLrnWz = "0x100a00060e0f1a1d05170d021c020005160f1601141205000c141301051e1505"
		const uint256SAj9Bzk = await RevivezCBpWhA.balanceOf.call(addressPuwjhIy, {from: accounts[4]});
		const uint256EdKylI = await RevivezCBpWhA.recoverERC20.call(uintq2BHmO0, {from: accounts[2]});
		const boolYW3reS = await RevivezCBpWhA.extendLock.call(bytezLrnWz, uintjsCtUKs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256SAj9Bzk, BigInt("0"))
		await expect(RevivezCBpWhA.recoverERC20.call(uintq2BHmO0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uinthuKKWlf = BigInt("377")
		const uintNQzpT2 = BigInt("1388")
		const addresswwZ9Kff = accounts[6]
		const addressBrgSbSD = accounts[3]
		const uint256qxnlV3 = await RevivezCBpWhA.recoverERC20.call(uinthuKKWlf, {from: accounts[2]});
		const addresslmAcBS = await RevivezCBpWhA.owner.call({from: accounts[1]});
		const boolxnkTRPU = await RevivezCBpWhA.approve.call(addresswwZ9Kff, uintNQzpT2, {from: accounts[0]});
		const uint256BrBOZz9 = await RevivezCBpWhA.totalBalanceOf.call(addressBrgSbSD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivezCBpWhA.recoverERC20.call(uinthuKKWlf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const addressT96QSm9 = accounts[2]
		const uintIDy4Kxd = BigInt("820")
		const byteGO2L3WB = "0x19171a0c1e0202060f170e12111617160b15101c13fffffffd000a1d1c021714081808"
		const addressqSEnhU9 = accounts[0]
		const uint256Vs9no97 = await ReviveDjDh770.unlock.call(addressT96QSm9, {from: accounts[2]});
		const uint256rLkg5C1 = await ReviveDjDh770.tokensLockedAtTime.call(addressqSEnhU9, byteGO2L3WB, uintIDy4Kxd, {from: accounts[3]});

		assert.equal(uint256Vs9no97, BigInt("0"))
		await expect(ReviveDjDh770.tokensLockedAtTime.call(addressqSEnhU9, byteGO2L3WB, uintIDy4Kxd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivextiuvmJ = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkcQhibM = BigInt("1817")
		const uintUf4Ohu = BigInt("1792")
		const byteQ66KFFr = "0x0a0b151d041a1f0a05090103031b1f1f13101d0618040b1409021e130b1e1312"
		const addresshF0anQ = accounts[1]
		const uintrejgKAh = BigInt("1388")
		const addresspkkhgBh = accounts[1]
		const uintlJJf4zt = BigInt("1363")
		const addresslxdRqGs = accounts[4]
		const boolF0oRXas = await RevivextiuvmJ.transferWithLock.call(addresshF0anQ, byteQ66KFFr, uintUf4Ohu, uintkcQhibM, {from: accounts[3]});
		const addresstLRGCXj = await RevivextiuvmJ.recoverERC20.call(addresspkkhgBh, uintrejgKAh, {from: accounts[5]});
		const addressfcsfVPA = await RevivextiuvmJ.recoverERC20.call(addresslxdRqGs, uintlJJf4zt, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintqBxuh8V = BigInt("725")
		const addressOrgGnuE = accounts[2]
		const uintfwOXuEn = BigInt("1441")
		const uint256roZGulf = await RevivezCBpWhA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const booltcIcl63 = await RevivezCBpWhA.increaseAllowance.call(addressOrgGnuE, uintqBxuh8V, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SUfcfta = await RevivezCBpWhA.recoverERC20.call(uintfwOXuEn, {from: accounts[0]});

		assert.equal(booltcIcl63, true)
		assert.equal(uint256roZGulf, BigInt("3000000000000000000000000000"))
		await expect(RevivezCBpWhA.recoverERC20.call(uintfwOXuEn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintWnJAlTL = BigInt("934")
		const uintHrC6ZLg = BigInt("685")
		const uintTBQyFTF = BigInt("1148")
		const byteNzeUufi = "0x131d151c1e030308180b1e1e160b0f010c020c16180a1f0c110201200a071116"
		const uint256pKQhmAt = await RevivezCBpWhA.recoverERC20.call(uintWnJAlTL, {from: accounts[3]});
		const boolhyXFvL1 = await RevivezCBpWhA.lock.call(byteNzeUufi, uintTBQyFTF, uintHrC6ZLg, {from: accounts[1]});

		await expect(RevivezCBpWhA.recoverERC20.call(uintWnJAlTL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintX7rCdTs = BigInt("1155")
		const uintvx0kst = BigInt("1109")
		const uintdwzuJgx = BigInt("963")
		const byteBrJPxQE = "0x0714010e1206060305031a1d0e0514040210040b07070e04141a1f150f0b101d"
		const addresswGDUodr = accounts[3]
		const uint256pMlFeI = await RevivezCBpWhA.recoverERC20.call(uintX7rCdTs, {from: accounts[4]});
		const boolU2JJJny = await RevivezCBpWhA.transferWithLock.call(addresswGDUodr, byteBrJPxQE, uintdwzuJgx, uintvx0kst, {from: accounts[1]});

		await expect(RevivezCBpWhA.recoverERC20.call(uintX7rCdTs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveaztHfda = await Revive.new({from: accounts[2]});
		const byteUd7Tvax = "0x131d19040d111202170e021719082011140a12030319120a131c021f16060513"
		const addressk0vPQp6 = accounts[5]
		const uintKgjAV3U = BigInt("822")
		const addressKweclL6 = "0x0000000000000000000000000000000000000001"
		const uintxnK5wR = BigInt("1328")
		const addressMpyHcga = accounts[5]
		const uinthEV0qX1 = BigInt("407")
		const uintWth2JAp = BigInt("1217")
		const byteRw1E78E = "0x0b07100706051b1205190f071c1a1d051417111a1c1413021c1b1402090a0f13"
		const addressA6rhP6a = accounts[4]
		const addressH8d9rGK = accounts[3]
		const uint256u711uhn = await ReviveaztHfda.tokensUnlockable.call(addressk0vPQp6, byteUd7Tvax, {from: accounts[1]});
		const boolqBIt743 = await ReviveaztHfda.approve.call(addressKweclL6, uintKgjAV3U, {from: accounts[4]});
		const boolbylduAz = await ReviveaztHfda.approve.call(addressMpyHcga, uintxnK5wR, {from: accounts[4]});
		const uint256VBaaoEG = await ReviveaztHfda.recoverERC20.call(uinthEV0qX1, {from: accounts[1]});
		const boolYJS2S76 = await ReviveaztHfda.increaseLockAmount.call(byteRw1E78E, uintWth2JAp, {from: accounts[2]});
		const uint256XHByTa = await ReviveaztHfda.allowance.call(addressH8d9rGK, addressA6rhP6a, {from: accounts[1]});

		assert.equal(boolbylduAz, true)
		assert.equal(boolqBIt743, true)
		assert.equal(uint256u711uhn, BigInt("0"))
		await expect(ReviveaztHfda.recoverERC20.call(uinthEV0qX1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const addressP3FpOzF = accounts[0]
		const addressFfC53b = accounts[4]
		const uintuPLVjpX = BigInt("844")
		const uintonjhaUt = BigInt("1109")
		const uintzENBTbN = BigInt("963")
		const byteAe7xi6 = "0x0714010e1206060308031a1d0e0514040210040b07070e04141a1f150f0b101d"
		const addressopHyB5 = accounts[3]
		const uint2569WkkkR = await RevivezCBpWhA.allowance.call(addressFfC53b, addressP3FpOzF, {from: accounts[2]});
		const uint256QXlG2mi = await RevivezCBpWhA.recoverERC20.call(uintuPLVjpX, {from: accounts[4]});
		const boolU2JJJny = await RevivezCBpWhA.transferWithLock.call(addressopHyB5, byteAe7xi6, uintzENBTbN, uintonjhaUt, {from: accounts[1]});

		assert.equal(uint2569WkkkR, BigInt("0"))
		await expect(RevivezCBpWhA.recoverERC20.call(uintuPLVjpX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const addressZLsOHGJ = accounts[5]
		const addresspSe7nEx = accounts[2]
		const uintnnmDEGJ = BigInt("1012")
		const uint256lIPNwO1 = await ReviveDjDh770.getUnlockableTokens.call(addressZLsOHGJ, {from: accounts[5]});
		const uint256Vs9no97 = await ReviveDjDh770.unlock.call(addresspSe7nEx, {from: accounts[2]});
		const uint256upplmQe = await ReviveDjDh770.recoverERC20.call(uintnnmDEGJ, {from: accounts[4]});

		assert.equal(uint256Vs9no97, BigInt("0"))
		assert.equal(uint256lIPNwO1, BigInt("0"))
		await expect(ReviveDjDh770.recoverERC20.call(uintnnmDEGJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintWlXdjw8 = BigInt("1790")
		const uintULhWVst = BigInt("1135")
		const byteByk7u1 = "0x100a00060e0f1a1d05170d021c020005160f1601141205000c141301051e1505"
		const uint256BrQAFej = await RevivezCBpWhA.recoverERC20.call(uintWlXdjw8, {from: accounts[5]});
		const boolYW3reS = await RevivezCBpWhA.extendLock.call(byteByk7u1, uintULhWVst, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivezCBpWhA.recoverERC20.call(uintWlXdjw8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUzBkBzb = await Revive.new({from: accounts[0]});
		const uintI3VN4Ez = BigInt("1949")
		const uintTQJ8vlk = BigInt("985")
		const addressURGVIEZ = "0x0000000000000000000000000000000000000001"
		const addressG8qMixg = accounts[3]
		const addressa6r8RRN = accounts[5]
		const uint256it91SIl = await ReviveUzBkBzb.recoverERC20.call(uintI3VN4Ez, {from: accounts[4]});
		const boolqyzVN2x = await ReviveUzBkBzb.transfer.call(addressURGVIEZ, uintTQJ8vlk, {from: accounts[0]});
		const uint256zZj6Xc8 = await ReviveUzBkBzb.allowance.call(addressa6r8RRN, addressG8qMixg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveUzBkBzb.recoverERC20.call(uintI3VN4Ez, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const bytermrZUvh = "0x030a1b17011c18061c1510180f141a1a130107101604071b0f18010f1a15101b"
		const addressKUdxOoD = accounts[1]
		const uintNNJYukt = BigInt("1130")
		const byteLMCXiQR = "0x100afffffffd060e0f1a1d05170d021c020005160f1601141205000c141301051e1505"
		const addressdwgWJx = accounts[2]
		const uint256GotRzT = await RevivezCBpWhA.tokensLocked.call(addressKUdxOoD, bytermrZUvh, {from: accounts[1]});
		const boolYW3reS = await RevivezCBpWhA.extendLock.call(byteLMCXiQR, uintNNJYukt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sTK8Nfn = await RevivezCBpWhA.totalBalanceOf.call(addressdwgWJx, {from: accounts[2]});

		assert.equal(uint256GotRzT, BigInt("0"))
		await expect(RevivezCBpWhA.extendLock.call(byteLMCXiQR, uintNNJYukt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexGMqxKH = await Revive.new({from: accounts[1]});
		const addressawjt3JA = accounts[3]
		const uintd4NGqF = BigInt("544")
		const uint256thTdGe9 = await RevivexGMqxKH.getUnlockableTokens.call(addressawjt3JA, {from: accounts[0]});
		const uint256FX2NRgY = await RevivexGMqxKH.recoverERC20.call(uintd4NGqF, {from: accounts[4]});

		assert.equal(uint256thTdGe9, BigInt("0"))
		await expect(RevivexGMqxKH.recoverERC20.call(uintd4NGqF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewfF7nNB = await Revive.new({from: accounts[4]});
		const uintkPez7P4 = BigInt("357")
		const addressAQbUTl4 = "0x0000000000000000000000000000000000000001"
		const uintKVh4AKq = BigInt("1175")
		const byteY29V7oP = "0x1c13051d021b1909071f041f0d11040712fffffffa1e07021e0c1806181b161f1d040c"
		const uint256BiMqMjH = await RevivewfF7nNB.recoverERC20.call(uintkPez7P4, {from: accounts[4]});
		const uint256wVNM7d = await RevivewfF7nNB.balanceOf.call(addressAQbUTl4, {from: "0x0000000000000000000000000000000000000001"});
		const boolod7E6WF = await RevivewfF7nNB.increaseLockAmount.call(byteY29V7oP, uintKVh4AKq, {from: accounts[2]});

		await expect(RevivewfF7nNB.recoverERC20.call(uintkPez7P4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexGMqxKH = await Revive.new({from: accounts[1]});
		const addresshUq4TQI = accounts[3]
		const uintPw3ACJP = BigInt("1411")
		const addressQvKGvZS = accounts[2]
		const uint25652mmJI = await RevivexGMqxKH.getUnlockableTokens.call(addresshUq4TQI, {from: accounts[4]});
		const uint256e2OFe7J = await RevivexGMqxKH.recoverERC20.call(uintPw3ACJP, {from: accounts[5]});
		const uint256thTdGe9 = await RevivexGMqxKH.getUnlockableTokens.call(addressQvKGvZS, {from: accounts[0]});

		assert.equal(uint25652mmJI, BigInt("0"))
		await expect(RevivexGMqxKH.recoverERC20.call(uintPw3ACJP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const uinthiPw2r = BigInt("34")
		const bytef64rywP = "0x17030c0e0b160a1f20180f0704051b0c171b130c161f060b11070a1b0f110c0a"
		const addresslO1yQUH = accounts[1]
		const uintdVhqyfY = BigInt("676")
		const uint256r90lp3g = await ReviveDjDh770.tokensLockedAtTime.call(addresslO1yQUH, bytef64rywP, uinthiPw2r, {from: accounts[4]});
		const boolK3Y8WZ = await ReviveDjDh770.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zy72WJa = await ReviveDjDh770.recoverERC20.call(uintdVhqyfY, {from: accounts[2]});
		await ReviveDjDh770.onlyOwner.call({from: accounts[3]});

		assert.equal(boolK3Y8WZ, false)
		assert.equal(uint256r90lp3g, BigInt("0"))
		await expect(ReviveDjDh770.recoverERC20.call(uintdVhqyfY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const uintYUWYj67 = BigInt("34")
		const bytevNCgXl = "0x17030c0e0b160b1f20180f0704051b0c171b130c161f060b11070a1b0f110c0a"
		const addressWkeVUE = accounts[1]
		const uinto9dUBwY = BigInt("746")
		const addressX4AHOKS = accounts[1]
		const uint256r90lp3g = await ReviveDjDh770.tokensLockedAtTime.call(addressWkeVUE, bytevNCgXl, uintYUWYj67, {from: accounts[4]});
		const uint256e1oSFHB = await ReviveDjDh770.recoverERC20.call(uinto9dUBwY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IwSM1in = await ReviveDjDh770.getUnlockableTokens.call(addressX4AHOKS, {from: accounts[4]});

		assert.equal(uint256r90lp3g, BigInt("0"))
		await expect(ReviveDjDh770.recoverERC20.call(uinto9dUBwY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezCBpWhA = await Revive.new({from: accounts[4]});
		const uintMaGsw1g = BigInt("1261")
		const uinttuiIfQx = BigInt("406")
		const uintW3sPlAP = BigInt("1733")
		const byteSfr2Akh = "0x061f0503130d02021f0c0801151c1f1e150605080f1f07111b17181b1c031205"
		const addressftgOadC = accounts[0]
		const addressG8cWna = accounts[5]
		const uint256QP4cgIC = await RevivezCBpWhA.recoverERC20.call(uintMaGsw1g, {from: accounts[4]});
		await RevivezCBpWhA.onlyOwner.call({from: accounts[5]});
		const boolvJZRb3Q = await RevivezCBpWhA.transferWithLock.call(addressftgOadC, byteSfr2Akh, uintW3sPlAP, uinttuiIfQx, {from: accounts[1]});
		const uint256BrBOZz9 = await RevivezCBpWhA.totalBalanceOf.call(addressG8cWna, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivezCBpWhA.recoverERC20.call(uintMaGsw1g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewfF7nNB = await Revive.new({from: accounts[4]});
		const uintNDQSbvU = BigInt("1175")
		const bytetU5Yzg2 = "0x1c13051d021b1909071f041f0d11040712fffffffe1e07021e0c1806181b161f1d040c"
		const byteRkswsS6 = "0x1d060a1812121606150117180f181d15171e14111e0312041c06101e17131002"
		const addressKBH36d = accounts[2]
		const boolod7E6WF = await RevivewfF7nNB.increaseLockAmount.call(bytetU5Yzg2, uintNDQSbvU, {from: accounts[2]});
		const uint256qRNleU = await RevivewfF7nNB.tokensUnlockable.call(addressKBH36d, byteRkswsS6, {from: accounts[1]});

		await expect(RevivewfF7nNB.increaseLockAmount.call(bytetU5Yzg2, uintNDQSbvU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjDh770 = await Revive.new({from: accounts[2]});
		const addressx3JLMf = accounts[4]
		const uintXwzHCsb = BigInt("169")
		const uintlecWO6D = BigInt("595")
		const addressl7TQ5t = "0x0000000000000000000000000000000000000001"
		const addressUVK2ImC = "0x0000000000000000000000000000000000000001"
		const uint256S58EkMa = await ReviveDjDh770.balanceOf.call(addressx3JLMf, {from: accounts[2]});
		const uint256LBnrCpC = await ReviveDjDh770.recoverERC20.call(uintXwzHCsb, {from: accounts[4]});
		const booldSU2Fg7 = await ReviveDjDh770.transferFrom.call(addressUVK2ImC, addressl7TQ5t, uintlecWO6D, {from: accounts[3]});

		assert.equal(uint256S58EkMa, BigInt("0"))
		await expect(ReviveDjDh770.recoverERC20.call(uintXwzHCsb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})