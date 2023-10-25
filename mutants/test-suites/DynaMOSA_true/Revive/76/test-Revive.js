const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveQdXch4e = await Revive.new({from: accounts[0]});
		const uintHfo6Eoj = BigInt("1569")
		const addressT1zVOeI = "0x0000000000000000000000000000000000000001"
		const uintBMyoEnz = BigInt("1673")
		const uintYE1l1DO = BigInt("1677")
		const byteZO5xo2M = "0x100b060d16030e0b1310190719180b101c0a091c140105091e051f180f010215"
		const uintVYd2M4r = BigInt("842")
		const addressk5xhuHX = accounts[0]
//		await ReviveQdXch4e.renounceOwnership.call({from: accounts[3]});
//		const boolUG37dC = await ReviveQdXch4e.increaseAllowance.call(addressT1zVOeI, uintHfo6Eoj, {from: accounts[3]});
//		const boolEnVjoYE = await ReviveQdXch4e.lock.call(byteZO5xo2M, uintYE1l1DO, uintBMyoEnz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSrUeBr = await ReviveQdXch4e.increaseAllowance.call(addressk5xhuHX, uintVYd2M4r, {from: accounts[5]});

		await expect(ReviveQdXch4e.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivei7Frf1o = await Revive.new({from: accounts[3]});
		const addressst9RTs = accounts[3]
		const uintazy4VRy = BigInt("1033")
		const addressVL2X3BH = "0x0000000000000000000000000000000000000001"
		const addressogbCeLc = accounts[4]
		const addresszHQ7muO = accounts[4]
		const uintB7VxLcx = BigInt("1970")
		const addressIWhCVdn = accounts[0]
		const uint256x9Bs1Se = await Revivei7Frf1o.getUnlockableTokens.call(addressst9RTs, {from: accounts[3]});
		const boolFBcBRGq = await Revivei7Frf1o.isOwner.call({from: accounts[0]});
//		const boolpC9xUTj = await Revivei7Frf1o.decreaseAllowance.call(addressVL2X3BH, uintazy4VRy, {from: accounts[3]});
//		const addressHHbcC9B = await Revivei7Frf1o.transferOwnership.call(addressogbCeLc, {from: accounts[3]});
//		const addressztfPdYa = await Revivei7Frf1o.transferOwnership.call(addresszHQ7muO, {from: accounts[1]});
//		const addressNWDHbak = await Revivei7Frf1o.recoverERC20.call(addressIWhCVdn, uintB7VxLcx, {from: accounts[0]});

		assert.equal(boolFBcBRGq, false)
		assert.equal(uint256x9Bs1Se, BigInt("0"))
		await expect(Revivei7Frf1o.decreaseAllowance.call(addressVL2X3BH, uintazy4VRy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenvuNkLe = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHtdN8ya = BigInt("2045")
		const byteDc2Lxz = "0x0902100d161906120519171b03010d1506040f15120f0d0c131f1a15040d141b"
		const byteX7VVRuM = "0x020116121f170c040f0a0d150c15030e02171f0a0f1a13051e081b120707161c"
		const addressJwBcGVt = accounts[1]
		const uintBNwNJzW = BigInt("1241")
		const bytenHaKxdh = "0x1002131b1b1508080218091e0b131713101d1218031c06150219131d1d0e0a16"
		await RevivenvuNkLe.renounceOwnership.call({from: accounts[2]});
		const boolUhleEBa = await RevivenvuNkLe.increaseLockAmount.call(byteDc2Lxz, uintHtdN8ya, {from: accounts[5]});
		const uint256lKj9RIg = await RevivenvuNkLe.tokensUnlockable.call(addressJwBcGVt, byteX7VVRuM, {from: accounts[1]});
		const boolyZ8ZgFV = await RevivenvuNkLe.increaseLockAmount.call(bytenHaKxdh, uintBNwNJzW, {from: accounts[0]});
		await RevivenvuNkLe.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Revive', async () => {
		const ReviveuCd1JAf = await Revive.new({from: accounts[1]});
		const byteQcQHtSK = "0x070c1d03130319071e1e130e151a19090d0b19160304181000180b030315001d"
		const addressImidJZQ = accounts[3]
		const addressTiPnwI = accounts[4]
		const uint256Op7l8sp = await ReviveuCd1JAf.tokensLocked.call(addressImidJZQ, byteQcQHtSK, {from: accounts[1]});
//		await ReviveuCd1JAf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await ReviveuCd1JAf.renounceOwnership.call({from: accounts[0]});
//		const addressCL6c6WX = await ReviveuCd1JAf.transferOwnership.call(addressTiPnwI, {from: accounts[0]});
//		const addressaIDxFHd = await ReviveuCd1JAf.owner.call({from: accounts[2]});
//		await ReviveuCd1JAf.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256Op7l8sp, BigInt("0"))
		await expect(ReviveuCd1JAf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJ9A38pZ = await Revive.new({from: accounts[1]});
		const uintzHZRUU = BigInt("1870")
		const uintaRZ5vi = BigInt("1578")
		const bytek9OQR8w = "0x1810091f10101100152004050c180a09190f050310120109140219090117140a"
		const uintqpfICkh = BigInt("1145")
		const addressbIOxKV = accounts[5]
		const uintex64oMi = BigInt("1421")
		const byteW1kdf4j = "0x040c16151d09041a081f111a0d1d1c04090309030611010a091b0e0f10070d07"
//		const boolLKshB5t = await ReviveJ9A38pZ.lock.call(bytek9OQR8w, uintaRZ5vi, uintzHZRUU, {from: accounts[0]});
//		const boolnBR3VJg = await ReviveJ9A38pZ.transfer.call(addressbIOxKV, uintqpfICkh, {from: accounts[1]});
//		const boolx11T00H = await ReviveJ9A38pZ.extendLock.call(byteW1kdf4j, uintex64oMi, {from: accounts[4]});

		await expect(ReviveJ9A38pZ.lock.call(bytek9OQR8w, uintaRZ5vi, uintzHZRUU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const addressNBINXvH = accounts[1]
		const boolbcLVDqG = await ReviveDhfFXFk.isOwner.call({from: accounts[2]});
		const addresslxrwRL = await ReviveDhfFXFk.owner.call({from: accounts[0]});
		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressNBINXvH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresslxrwRL, 0x6D29c0d4fA679342f4d589B0C502819F346E306A)
		assert.equal(boolbcLVDqG, false)
		assert.equal(uint256VBQsbqr, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressbVqltf = accounts[0]
		const uintY042RR3 = BigInt("1195")
		const byteQ8ey90o = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressPN2ySDN = accounts[0]
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addressbVqltf, {from: accounts[4]});
//		const uint256KWSAYF = await ReviveYCiPfPQ.recoverERC20.call(uintY042RR3, {from: accounts[3]});
//		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressPN2ySDN, byteQ8ey90o, {from: accounts[4]});
//		await ReviveYCiPfPQ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256wVPIG7J, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintY042RR3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivei7Frf1o = await Revive.new({from: accounts[3]});
		const addressGZIuzq3 = accounts[3]
		const uintpWeZ13 = BigInt("126")
		const byteL0CZGQ = "0x1712151b190f0e010d041d0c0806061507121f1604041d07060e050206180c01"
		const uintEnMehhP = BigInt("1033")
		const addressJ7rInyd = "0x0000000000000000000000000000000000000001"
		const addressGQjFQMe = accounts[5]
		const uint4xrtNo = BigInt("1346")
		const byteFKVzWmz = "0x011e1e1f071f1a0e0405150c080d1d060f0100071a091b0f0719201118090b17"
		const addressNyf1vay = accounts[4]
		const uintHHmeYsG = BigInt("1970")
		const addressOk1ImL = accounts[0]
		const uint256x9Bs1Se = await Revivei7Frf1o.getUnlockableTokens.call(addressGZIuzq3, {from: accounts[3]});
//		const boolnRadhz5 = await Revivei7Frf1o.increaseLockAmount.call(byteL0CZGQ, uintpWeZ13, {from: accounts[0]});
//		const boolFBcBRGq = await Revivei7Frf1o.isOwner.call({from: accounts[0]});
//		const boolpC9xUTj = await Revivei7Frf1o.decreaseAllowance.call(addressJ7rInyd, uintEnMehhP, {from: accounts[3]});
//		const addressHHbcC9B = await Revivei7Frf1o.transferOwnership.call(addressGQjFQMe, {from: accounts[3]});
//		const boolCFyHpLl = await Revivei7Frf1o.extendLock.call(byteFKVzWmz, uint4xrtNo, {from: accounts[4]});
//		const addressztfPdYa = await Revivei7Frf1o.transferOwnership.call(addressNyf1vay, {from: accounts[1]});
//		const addressNWDHbak = await Revivei7Frf1o.recoverERC20.call(addressOk1ImL, uintHHmeYsG, {from: accounts[0]});

		assert.equal(uint256x9Bs1Se, BigInt("0"))
		await expect(Revivei7Frf1o.increaseLockAmount.call(byteL0CZGQ, uintpWeZ13, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const uintK6ktGI = BigInt("1197")
		const bytefoFjJtS = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressSoATEwH = accounts[0]
		const uintmW5CvMJ = BigInt("1044")
		const uintlST8Kne = BigInt("271")
		const byteE1xh9km = "0x05101311011614040f1a000317111e1b1e020f05030d16150e1b171917180c06"
		const uintsNxezHR = BigInt("460")
		const uintXD3dofi = BigInt("1281")
		const byteBBGMRv = "0x1d0215051d131f1f1f1a031a170f0c151f1e081f0f03121c031b161e0b0e0512"
//		const uint256KWSAYF = await ReviveYCiPfPQ.recoverERC20.call(uintK6ktGI, {from: accounts[3]});
//		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressSoATEwH, bytefoFjJtS, {from: accounts[4]});
//		const boolNf1OwIV = await ReviveYCiPfPQ.lock.call(byteE1xh9km, uintlST8Kne, uintmW5CvMJ, {from: accounts[0]});
//		const boolwTyD26M = await ReviveYCiPfPQ.lock.call(byteBBGMRv, uintXD3dofi, uintsNxezHR, {from: accounts[1]});
//		await ReviveYCiPfPQ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveYCiPfPQ.recoverERC20.call(uintK6ktGI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWu3lZPH = await Revive.new({from: accounts[3]});
		const addressKSHDz1b = accounts[2]
		const addressSs1RY8L = accounts[0]
		const uintU4FVOta = BigInt("501")
		const addressIm0pJke = accounts[5]
		const uintuhfF4H = BigInt("1081")
		const byteNwDjeWx = "0x1c061900110e091219120813061b0e1415170c1b190616170f0513091f190909"
		const byteBMZlFXV = "0x090e061a101a0b110a0d091311170c030519091a091d09171d1002070317190f"
		const addressCZftNg8 = accounts[3]
		const uint256WBDPOB = await ReviveWu3lZPH.allowance.call(addressSs1RY8L, addressKSHDz1b, {from: accounts[0]});
//		const addresshQ8Zqbt = await ReviveWu3lZPH.recoverERC20.call(addressIm0pJke, uintU4FVOta, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZjYzUEo = await ReviveWu3lZPH.extendLock.call(byteNwDjeWx, uintuhfF4H, {from: accounts[1]});
//		const uint256OLqI9Kn = await ReviveWu3lZPH.tokensLocked.call(addressCZftNg8, byteBMZlFXV, {from: accounts[4]});

		assert.equal(uint256WBDPOB, BigInt("0"))
		await expect(ReviveWu3lZPH.recoverERC20.call(addressIm0pJke, uintU4FVOta, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const uintOkVNWEQ = BigInt("742")
		const byteN7YH8Pq = "0x0a1d13080c1c1a0a0c090a1508040a09171310141c14020a13030908141f0506"
		const addressqNkESHy = accounts[1]
		const uintpup80H = BigInt("1343")
		const bytefOaWPmV = "0x0f191a10120604101d101c19021e1b1d000c0e1f0b191f0615191e1e0c06061f"
		const addressfcmZC6Z = accounts[1]
		const boolbcLVDqG = await ReviveDhfFXFk.isOwner.call({from: accounts[2]});
//		const bool3xU1vB = await ReviveDhfFXFk.extendLock.call(byteN7YH8Pq, uintOkVNWEQ, {from: accounts[4]});
//		const addresslxrwRL = await ReviveDhfFXFk.owner.call({from: accounts[0]});
//		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressqNkESHy, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256U7yfU59 = await ReviveDhfFXFk.tokensLockedAtTime.call(addressfcmZC6Z, bytefOaWPmV, uintpup80H, {from: accounts[5]});

		assert.equal(boolbcLVDqG, false)
		await expect(ReviveDhfFXFk.extendLock.call(byteN7YH8Pq, uintOkVNWEQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressxuwqgdO = accounts[0]
		const uintkgmJN0 = BigInt("1220")
		const bytef0uBhEn = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressMRKy6xM = accounts[0]
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addressxuwqgdO, {from: accounts[4]});
//		const uint256KWSAYF = await ReviveYCiPfPQ.recoverERC20.call(uintkgmJN0, {from: accounts[3]});
//		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressMRKy6xM, bytef0uBhEn, {from: accounts[4]});
//		await ReviveYCiPfPQ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256wVPIG7J, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintkgmJN0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveK9xGWi7 = await Revive.new({from: accounts[0]});
		const bytedVA5xJu = "0x02170b1207181a0c0a151b11010d1a1b19160d0e1c0712161c0e0503110c1c0b"
		const addressfuKPUxz = accounts[3]
		const addresszlbXIT = accounts[4]
		const uintATidUkY = BigInt("1927")
		const addresshVnUgBw = accounts[1]
		const addressDtcGWIv = "0x0000000000000000000000000000000000000001"
		const addressTNy2BcY = accounts[5]
		const uint256R3uzx37 = await ReviveK9xGWi7.tokensLocked.call(addressfuKPUxz, bytedVA5xJu, {from: accounts[4]});
		const uint256b2qxYs = await ReviveK9xGWi7.unlock.call(addresszlbXIT, {from: accounts[2]});
		const boolorfHWGD = await ReviveK9xGWi7.approve.call(addresshVnUgBw, uintATidUkY, {from: accounts[0]});
		const uint256P6S5YSw = await ReviveK9xGWi7.unlock.call(addressDtcGWIv, {from: accounts[1]});
		const uint256hntcSSY = await ReviveK9xGWi7.getUnlockableTokens.call(addressTNy2BcY, {from: accounts[1]});
		const addresswoSgcb = await ReviveK9xGWi7.owner.call({from: accounts[5]});

		assert.equal(addresswoSgcb, 0x7e006d44365ab43d9352DEC49e21Cba1975e28A6)
		assert.equal(boolorfHWGD, true)
		assert.equal(uint256P6S5YSw, BigInt("0"))
		assert.equal(uint256R3uzx37, BigInt("0"))
		assert.equal(uint256b2qxYs, BigInt("0"))
		assert.equal(uint256hntcSSY, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveK9xGWi7 = await Revive.new({from: accounts[0]});
		const bytexxOeDZB = "0x02170b1207181a0c0a151b11010d1a1b19160d0e1c0712161c0e0503110c1c0b"
		const addressw3m8Qor = accounts[3]
		const uintfHBGcIS = BigInt("667")
		const addressiVvxaRn = accounts[1]
		const addressZWWbkt8 = accounts[3]
		const uintyxI9Io8 = BigInt("1927")
		const addressKyVqpzV = accounts[1]
		const addressi16Flv = "0x0000000000000000000000000000000000000001"
		const addressVeIUr5r = accounts[5]
		const uint256R3uzx37 = await ReviveK9xGWi7.tokensLocked.call(addressw3m8Qor, bytexxOeDZB, {from: accounts[4]});
//		const boolgRlCdMO = await ReviveK9xGWi7.transferFrom.call(addressZWWbkt8, addressiVvxaRn, uintfHBGcIS, {from: accounts[4]});
//		const boolorfHWGD = await ReviveK9xGWi7.approve.call(addressKyVqpzV, uintyxI9Io8, {from: accounts[0]});
//		const uint256P6S5YSw = await ReviveK9xGWi7.unlock.call(addressi16Flv, {from: accounts[1]});
//		const uint256hntcSSY = await ReviveK9xGWi7.getUnlockableTokens.call(addressVeIUr5r, {from: accounts[1]});
//		const addresswoSgcb = await ReviveK9xGWi7.owner.call({from: accounts[5]});

		assert.equal(uint256R3uzx37, BigInt("0"))
		await expect(ReviveK9xGWi7.transferFrom.call(addressZWWbkt8, addressiVvxaRn, uintfHBGcIS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const byteZ1SeKtl = "0x1e0f070805052006160217041b060e0103100911111b00001616181b0c011211"
		const addressfIOO3J = accounts[4]
		const addressPFY9MTN = accounts[2]
		const addresslxrwRL = await ReviveDhfFXFk.owner.call({from: accounts[0]});
		const uint256RrSXp9T = await ReviveDhfFXFk.tokensUnlockable.call(addressfIOO3J, byteZ1SeKtl, {from: accounts[3]});
		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressPFY9MTN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresslxrwRL, 0x6D29c0d4fA679342f4d589B0C502819F346E306A)
		assert.equal(uint256RrSXp9T, BigInt("0"))
		assert.equal(uint256VBQsbqr, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveJ9A38pZ = await Revive.new({from: accounts[1]});
		const uintqGXD5Wj = BigInt("343")
		const bytejB6KdZE = "0x1f1c040d170a1601130603091313061906031112030a0a11130119150c1e051c"
		const addressbOEodNe = "0x0000000000000000000000000000000000000001"
		const uinti9ooOQz = BigInt("1870")
		const uintmReCFbl = BigInt("1578")
		const byteVxbV5Iv = "0x1810091f10101100152004050c180a09190f050310120109140219090117140a"
		const uintPhI3bdc = BigInt("1785")
		const uintE4CDxwl = BigInt("241")
		const byteVdy4fY6 = "0x0d0c09030d0107111b1f050a15070f150e121b0e030e190712081e0f1218180a"
		const addressEzdqdnz = accounts[0]
		const uintW6Nu2rC = BigInt("725")
		const addressQlEfiDg = accounts[1]
		const uintuTrZPbC = BigInt("1145")
		const addresskphTD8A = accounts[5]
		const uintvz2lwMM = BigInt("1421")
		const byteqkwmXg = "0x040c16151d09041a081f111a0d1d1c04090309030611010a091b0e0f10070d07"
		const uint256SITkUc = await ReviveJ9A38pZ.tokensLockedAtTime.call(addressbOEodNe, bytejB6KdZE, uintqGXD5Wj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLKshB5t = await ReviveJ9A38pZ.lock.call(byteVxbV5Iv, uintmReCFbl, uinti9ooOQz, {from: accounts[0]});
//		const boolf6JTcHb = await ReviveJ9A38pZ.transferWithLock.call(addressEzdqdnz, byteVdy4fY6, uintE4CDxwl, uintPhI3bdc, {from: accounts[2]});
//		const boolTObTsbh = await ReviveJ9A38pZ.increaseAllowance.call(addressQlEfiDg, uintW6Nu2rC, {from: accounts[1]});
//		const boolnBR3VJg = await ReviveJ9A38pZ.transfer.call(addresskphTD8A, uintuTrZPbC, {from: accounts[1]});
//		const boolx11T00H = await ReviveJ9A38pZ.extendLock.call(byteqkwmXg, uintvz2lwMM, {from: accounts[4]});

		assert.equal(uint256SITkUc, BigInt("0"))
		await expect(ReviveJ9A38pZ.lock.call(byteVxbV5Iv, uintmReCFbl, uinti9ooOQz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const addressk8z2mST = accounts[1]
		const addresszDORTAf = accounts[5]
		const addressLQdxYUr = accounts[2]
		const addresslxrwRL = await ReviveDhfFXFk.owner.call({from: accounts[0]});
		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressk8z2mST, {from: "0x0000000000000000000000000000000000000001"});
		const uint256E6X0iJG = await ReviveDhfFXFk.balanceOf.call(addresszDORTAf, {from: accounts[2]});
		const uint256Iw7cvcL = await ReviveDhfFXFk.totalBalanceOf.call(addressLQdxYUr, {from: accounts[2]});

		assert.equal(addresslxrwRL, 0x6D29c0d4fA679342f4d589B0C502819F346E306A)
		assert.equal(uint256E6X0iJG, BigInt("0"))
		assert.equal(uint256Iw7cvcL, BigInt("0"))
		assert.equal(uint256VBQsbqr, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveJ9A38pZ = await Revive.new({from: accounts[1]});
		const uintsyRWjc7 = BigInt("1145")
		const addresslp5leK0 = accounts[5]
		const uintD7vYhs = BigInt("1421")
		const bytel9swyHb = "0x040c16181d09041a081f111a0d1d1c04090309030611010a091b0e0f10070d07"
		const boolnBR3VJg = await ReviveJ9A38pZ.transfer.call(addresslp5leK0, uintsyRWjc7, {from: accounts[1]});
//		const boolx11T00H = await ReviveJ9A38pZ.extendLock.call(bytel9swyHb, uintD7vYhs, {from: accounts[4]});

		assert.equal(boolnBR3VJg, true)
		await expect(ReviveJ9A38pZ.extendLock.call(bytel9swyHb, uintD7vYhs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefriXRwp = await Revive.new({from: accounts[1]});
		const uintaaXQxD2 = BigInt("1749")
		const uintEg5TEE5 = BigInt("914")
		const byteb7gQVku = "0x1c061d0f0819161a13180c0803181e151a1b071a16011a0a00031d1f01160c10"
		const addresst5zxYzx = accounts[2]
		const uintTn96SS = BigInt("1476")
		const bytejqA6u04 = "0x0d0b0301121f08071d05080e1003051d1d15181f0f1a08180002091801161e1f"
		const addressse4juXr = accounts[1]
		const addressB1bwGMW = accounts[2]
		const byteW9ncENt = "0x200c02101211090c0602100f010b0017171a0f0909091704110b110b0c0d1f1c"
		const addresspBf2wbj = accounts[2]
		const byteqNooktC = "0x2018201a1119000c1e0d0e20021001110d160f080c0b15091f070e12030d011f"
		const addresspEbCdhb = accounts[1]
//		const boolWLUFYQj = await RevivefriXRwp.transferWithLock.call(addresst5zxYzx, byteb7gQVku, uintEg5TEE5, uintaaXQxD2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tRbaUlC = await RevivefriXRwp.tokensLockedAtTime.call(addressse4juXr, bytejqA6u04, uintTn96SS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyXGJ62 = await RevivefriXRwp.isOwner.call({from: accounts[5]});
//		const uint256ZdFkFEl = await RevivefriXRwp.balanceOf.call(addressB1bwGMW, {from: accounts[4]});
//		const uint256bSIZJPA = await RevivefriXRwp.tokensUnlockable.call(addresspBf2wbj, byteW9ncENt, {from: accounts[2]});
//		const uint256FGuPIcJ = await RevivefriXRwp.tokensLocked.call(addresspEbCdhb, byteqNooktC, {from: accounts[0]});

		await expect(RevivefriXRwp.transferWithLock.call(addresst5zxYzx, byteb7gQVku, uintEg5TEE5, uintaaXQxD2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const uintsKYeGQP = BigInt("381")
		const addresss0oQzfv = accounts[3]
		const uintBlc3JkT = BigInt("320")
		const byteAH2DOwl = "0x08161c0f1e09060d1801131710150304110f20130e090d1409190d04200a0311"
		const addressMfqwgZY = accounts[5]
		const addressIiheGuY = accounts[1]
		const addresslxrwRL = await ReviveDhfFXFk.owner.call({from: accounts[0]});
		const boolOVZnRWm = await ReviveDhfFXFk.increaseAllowance.call(addresss0oQzfv, uintsKYeGQP, {from: accounts[3]});
		const uint256LhsYgHo = await ReviveDhfFXFk.tokensLockedAtTime.call(addressMfqwgZY, byteAH2DOwl, uintBlc3JkT, {from: accounts[3]});
		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressIiheGuY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresslxrwRL, 0x6D29c0d4fA679342f4d589B0C502819F346E306A)
		assert.equal(boolOVZnRWm, true)
		assert.equal(uint256LhsYgHo, BigInt("0"))
		assert.equal(uint256VBQsbqr, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressA2POUKc = accounts[0]
		const uintZUp3Ji = BigInt("1196")
		const bytee1rzwHL = "0x1e0a1503041b182017111d03190b070b092006131a091c0210141612160c180d"
		const addressrwaofNj = accounts[3]
		const uintlSboSEy = BigInt("165")
		const byteK57Ga17 = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressOFcV7FF = accounts[0]
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addressA2POUKc, {from: accounts[4]});
		const uint256sFQVO5Q = await ReviveYCiPfPQ.tokensLockedAtTime.call(addressrwaofNj, bytee1rzwHL, uintZUp3Ji, {from: accounts[4]});
//		const uint256KWSAYF = await ReviveYCiPfPQ.recoverERC20.call(uintlSboSEy, {from: accounts[3]});
//		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressOFcV7FF, byteK57Ga17, {from: accounts[4]});

		assert.equal(uint256sFQVO5Q, BigInt("0"))
		assert.equal(uint256wVPIG7J, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintlSboSEy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressoFLbQgr = accounts[0]
		const uintTqkTtc = BigInt("1471")
		const bytevLJg0bD = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressu2tffIi = accounts[0]
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addressoFLbQgr, {from: accounts[4]});
//		const uint256KWSAYF = await ReviveYCiPfPQ.recoverERC20.call(uintTqkTtc, {from: accounts[3]});
//		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressu2tffIi, bytevLJg0bD, {from: accounts[4]});

		assert.equal(uint256wVPIG7J, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintTqkTtc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addresseScEI2f = accounts[0]
		const uintZTKOqfI = BigInt("1225")
		const byteGivZKUS = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressMxE3mc5 = accounts[0]
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addresseScEI2f, {from: accounts[4]});
//		const uint256KWSAYF = await ReviveYCiPfPQ.recoverERC20.call(uintZTKOqfI, {from: accounts[3]});
//		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressMxE3mc5, byteGivZKUS, {from: accounts[4]});

		assert.equal(uint256wVPIG7J, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintZTKOqfI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addresswWNTo6F = accounts[0]
		const uintlW4yq6W = BigInt("1187")
		const byteTz1aanJ = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressdueQ7Xf = accounts[0]
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addresswWNTo6F, {from: accounts[4]});
//		const uint256KWSAYF = await ReviveYCiPfPQ.recoverERC20.call(uintlW4yq6W, {from: accounts[3]});
//		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressdueQ7Xf, byteTz1aanJ, {from: accounts[4]});

		assert.equal(uint256wVPIG7J, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintlW4yq6W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressCkbMg8z = accounts[0]
		const addressxJTu7K = accounts[0]
		const uinthZFzYS = BigInt("1214")
		const bytezktQWW2 = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressstKpZT = accounts[0]
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addressCkbMg8z, {from: accounts[4]});
		const uint256ADpNls1 = await ReviveYCiPfPQ.getUnlockableTokens.call(addressxJTu7K, {from: accounts[3]});
//		const uint256KWSAYF = await ReviveYCiPfPQ.recoverERC20.call(uinthZFzYS, {from: accounts[3]});
//		const boolwtNOaUn = await ReviveYCiPfPQ.isOwner.call({from: accounts[4]});
//		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressstKpZT, bytezktQWW2, {from: accounts[4]});

		assert.equal(uint256ADpNls1, BigInt("0"))
		assert.equal(uint256wVPIG7J, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uinthZFzYS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const uintXkbSdI = BigInt("381")
		const addressB49kfGB = accounts[4]
		const addressGr81f8C = accounts[6]
		const uintASwtfgZ = BigInt("320")
		const byteeypzKaY = "0x08161c0f1e09060d1801131710150304110f20130e090d1409190d04200a0311"
		const addressQP6n3if = accounts[5]
		const byteYA0ohID = "0x04120503140303130206100b00011a100806031e021c091d170a1f1d041a0410"
		const addressvtcqcu8 = accounts[2]
		const addressRAdS5B9 = accounts[1]
		const uintsPQM2XD = BigInt("289")
		const uintdrSm176 = BigInt("1162")
		const byteHNgBxvl = "0x1a070d051013090c0e0d1e011f030f120d06051a0e1f160a01171320170b1d1f"
		const addressEILcN3d = accounts[0]
		const addresslxrwRL = await ReviveDhfFXFk.owner.call({from: accounts[0]});
		const boolOVZnRWm = await ReviveDhfFXFk.increaseAllowance.call(addressB49kfGB, uintXkbSdI, {from: accounts[3]});
		const uint256L9r56n4 = await ReviveDhfFXFk.getUnlockableTokens.call(addressGr81f8C, {from: accounts[5]});
		const uint256LhsYgHo = await ReviveDhfFXFk.tokensLockedAtTime.call(addressQP6n3if, byteeypzKaY, uintASwtfgZ, {from: accounts[3]});
		const uint256pNBYKLE = await ReviveDhfFXFk.tokensUnlockable.call(addressvtcqcu8, byteYA0ohID, {from: accounts[1]});
		const uint256YOhr886 = await ReviveDhfFXFk.totalSupply.call({from: accounts[2]});
		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressRAdS5B9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvForK2j = await ReviveDhfFXFk.transferWithLock.call(addressEILcN3d, byteHNgBxvl, uintdrSm176, uintsPQM2XD, {from: accounts[1]});

		assert.equal(addresslxrwRL, 0x6D29c0d4fA679342f4d589B0C502819F346E306A)
		assert.equal(boolOVZnRWm, true)
		assert.equal(uint256L9r56n4, BigInt("0"))
		assert.equal(uint256LhsYgHo, BigInt("0"))
		assert.equal(uint256VBQsbqr, BigInt("0"))
		assert.equal(uint256YOhr886, BigInt("3000000000000000000000000000"))
		assert.equal(uint256pNBYKLE, BigInt("0"))
		await expect(ReviveDhfFXFk.transferWithLock.call(addressEILcN3d, byteHNgBxvl, uintdrSm176, uintsPQM2XD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressFIO4b3O = accounts[1]
		const byteTTHFhjh = "0x0e061e07020f0b1c0d0319160e1d051905131c06061404191a1d080e1902021f"
		const addressLBubcx8 = accounts[0]
		const addressWMx7sVo = accounts[2]
		const uinta7fggnF = BigInt("1016")
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addressFIO4b3O, {from: accounts[4]});
		const uint256LIeCLNO = await ReviveYCiPfPQ.tokensUnlockable.call(addressLBubcx8, byteTTHFhjh, {from: accounts[4]});
		const uint256vp94PPe = await ReviveYCiPfPQ.totalBalanceOf.call(addressWMx7sVo, {from: accounts[0]});
//		const uint256UevPGWf = await ReviveYCiPfPQ.recoverERC20.call(uinta7fggnF, {from: accounts[3]});

		assert.equal(uint256LIeCLNO, BigInt("0"))
		assert.equal(uint256vp94PPe, BigInt("0"))
		assert.equal(uint256wVPIG7J, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uinta7fggnF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const addressOsoGKvW = accounts[1]
		const byteqohz0pn = "0x1d180419040e0d061c061c101d14170a0807191c2010140c15120a0d1c041020"
		const addressQExEszW = accounts[1]
		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressOsoGKvW, {from: "0x0000000000000000000000000000000000000001"});
//		await ReviveDhfFXFk.renounceOwnership.call({from: accounts[3]});
//		const uint256Up0uTlx = await ReviveDhfFXFk.tokensLocked.call(addressQExEszW, byteqohz0pn, {from: accounts[1]});

		assert.equal(uint256VBQsbqr, BigInt("0"))
		await expect(ReviveDhfFXFk.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressNqXmXP3 = accounts[4]
		const addressn0T833r = accounts[2]
		const addressWInB4T4 = accounts[3]
		const addressyIhgLNo = await ReviveYCiPfPQ.transferOwnership.call(addressNqXmXP3, {from: accounts[0]});
		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addressn0T833r, {from: accounts[4]});
		const uint256vzTTHln = await ReviveYCiPfPQ.unlock.call(addressWInB4T4, {from: accounts[2]});

		assert.equal(uint256vzTTHln, BigInt("0"))
		assert.equal(uint256wVPIG7J, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveSpa0MpE = await Revive.new({from: accounts[1]});
		const uintYRAHrVb = BigInt("851")
		const addressIdwksbB = accounts[0]
		const uintKkqTt5 = BigInt("1578")
		const uintywN21L = BigInt("1664")
		const byteFdTC0Xf = "0x1e1c1a0a0d190e1b1309150c1e151906061418201e0f130917100e19041e081f"
		const uintolHjzLW = BigInt("203")
		const addressiFlVsVj = accounts[1]
		const addressaoFyK3Y = accounts[0]
//		const uint256mX0aPqU = await ReviveSpa0MpE.recoverERC20.call(uintYRAHrVb, {from: accounts[3]});
//		const uint256iVhc7k = await ReviveSpa0MpE.totalBalanceOf.call(addressIdwksbB, {from: accounts[4]});
//		const boolnTzt0we = await ReviveSpa0MpE.lock.call(byteFdTC0Xf, uintywN21L, uintKkqTt5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256upZ5HlV = await ReviveSpa0MpE.totalSupply.call({from: accounts[1]});
//		const boolvDoXEfK = await ReviveSpa0MpE.transfer.call(addressiFlVsVj, uintolHjzLW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Vi74xyI = await ReviveSpa0MpE.balanceOf.call(addressaoFyK3Y, {from: accounts[3]});

		await expect(ReviveSpa0MpE.recoverERC20.call(uintYRAHrVb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const addressWNZP1l8 = accounts[0]
		const uintxDCOWta = BigInt("1575")
		const addressZSPo1QS = accounts[2]
		const uint256hdwCCmM = await ReviveDhfFXFk.unlock.call(addressWNZP1l8, {from: accounts[5]});
//		const uint256NpCRiuj = await ReviveDhfFXFk.recoverERC20.call(uintxDCOWta, {from: accounts[1]});
//		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressZSPo1QS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256hdwCCmM, BigInt("0"))
		await expect(ReviveDhfFXFk.recoverERC20.call(uintxDCOWta, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedH0tSEb = await Revive.new({from: accounts[5]});
		const bytejZiJCpI = "0x13000a0a031e1c20180b1e1916081407011b110a07150c180c15101b110f130b"
		const addressdyCOGDE = accounts[5]
		const uintFhUTX7n = BigInt("362")
		const byteIlIeMdH = "0x0d120f1e03111c0d0b1a0b150c2012181517060e010313170a1320121f10180d"
		const addresslENmCDc = accounts[4]
		const uintljvoKtL = BigInt("1623")
		const addressjjTwICv = accounts[2]
		const uint256a9Eskue = await RevivedH0tSEb.tokensLocked.call(addressdyCOGDE, bytejZiJCpI, {from: accounts[3]});
//		const uint256J7TUiI = await RevivedH0tSEb.recoverERC20.call(uintFhUTX7n, {from: accounts[3]});
//		const uint256HGRuFe4 = await RevivedH0tSEb.tokensLocked.call(addresslENmCDc, byteIlIeMdH, {from: accounts[4]});
//		const boolHb2DXKi = await RevivedH0tSEb.increaseAllowance.call(addressjjTwICv, uintljvoKtL, {from: accounts[4]});
//		const boolbcWp31c = await RevivedH0tSEb.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresszGX36wQ = await RevivedH0tSEb.owner.call({from: accounts[4]});

		assert.equal(uint256a9Eskue, BigInt("0"))
		await expect(RevivedH0tSEb.recoverERC20.call(uintFhUTX7n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const addressjR8h8BP = accounts[2]
		const uintIo9CNH = BigInt("841")
		const addresstVYZSTH = accounts[5]
		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addressjR8h8BP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256gk9SIvS = await ReviveDhfFXFk.recoverERC20.call(uintIo9CNH, {from: accounts[1]});
//		const uint2568AlMbm = await ReviveDhfFXFk.balanceOf.call(addresstVYZSTH, {from: accounts[4]});

		assert.equal(uint256VBQsbqr, BigInt("0"))
		await expect(ReviveDhfFXFk.recoverERC20.call(uintIo9CNH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addresslUHjy3J = accounts[2]
		const uintDhXJLiD = BigInt("916")
		const addressRNQUP0 = accounts[1]
		const addresskynNtQ = accounts[2]
		const uint256tamVuPP = await ReviveYCiPfPQ.getUnlockableTokens.call(addresslUHjy3J, {from: accounts[0]});
//		const uint256eGp4LlB = await ReviveYCiPfPQ.recoverERC20.call(uintDhXJLiD, {from: accounts[2]});
//		const uint256wVPIG7J = await ReviveYCiPfPQ.getUnlockableTokens.call(addressRNQUP0, {from: accounts[4]});
//		const uint256XQDijm = await ReviveYCiPfPQ.balanceOf.call(addresskynNtQ, {from: accounts[3]});

		assert.equal(uint256tamVuPP, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintDhXJLiD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const addresssvtVbUM = accounts[2]
		const uintHt2RJ06 = BigInt("1349")
		const uint256VBQsbqr = await ReviveDhfFXFk.unlock.call(addresssvtVbUM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xLZv2Ij = await ReviveDhfFXFk.recoverERC20.call(uintHt2RJ06, {from: accounts[2]});

		assert.equal(uint256VBQsbqr, BigInt("0"))
		await expect(ReviveDhfFXFk.recoverERC20.call(uintHt2RJ06, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const addressSRGMH39 = accounts[1]
		const addressi2KTpk3 = accounts[1]
		const addressG57jnkM = accounts[0]
		const uintQbyxplv = BigInt("142")
		const byteiLegWL5 = "0x0916170f1603061b060b0e091504050614100c0c141e021c100e051d09071a05"
		const addressfIjDCwg = accounts[5]
		const byteOMlPHbd = "0x161a1d16191b0d0c0805070a0c11110c04040a11091b040804110707190e0210"
		const addressptSMHsQ = "0x0000000000000000000000000000000000000002"
		const uintryBQBz = BigInt("1800")
		const uintKdsg84R = BigInt("1754")
		const uintKo7gDH = BigInt("1452")
		const bytewC2GZ3P = "0x050c1011010c14200b1f1e1f060410180d0d1f0c000f100a060415140f01041f"
		const addressIcvfIQb = accounts[1]
		const uint256rPJLolf = await ReviveDhfFXFk.allowance.call(addressi2KTpk3, addressSRGMH39, {from: accounts[1]});
		const uint256DTkb2Lf = await ReviveDhfFXFk.totalBalanceOf.call(addressG57jnkM, {from: accounts[3]});
		const uint2566PmzKv = await ReviveDhfFXFk.tokensLockedAtTime.call(addressfIjDCwg, byteiLegWL5, uintQbyxplv, {from: accounts[2]});
		const uint256f3YaBUc = await ReviveDhfFXFk.tokensLocked.call(addressptSMHsQ, byteOMlPHbd, {from: accounts[0]});
//		const uint256Na3StTa = await ReviveDhfFXFk.recoverERC20.call(uintryBQBz, {from: accounts[4]});
//		const boolUDjRzY = await ReviveDhfFXFk.transferWithLock.call(addressIcvfIQb, bytewC2GZ3P, uintKo7gDH, uintKdsg84R, {from: accounts[2]});

		assert.equal(uint2566PmzKv, BigInt("0"))
		assert.equal(uint256DTkb2Lf, BigInt("0"))
		assert.equal(uint256f3YaBUc, BigInt("0"))
		assert.equal(uint256rPJLolf, BigInt("0"))
		await expect(ReviveDhfFXFk.recoverERC20.call(uintryBQBz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressPxczz6c = accounts[6]
		const uintzozkEM8 = BigInt("74")
		const uintkjbtX35 = BigInt("1490")
		const uintvpFu8hk = BigInt("1772")
		const byteD197RxN = "0x020b1606071815170c051212030f051e081f201f1e1401140f0f1b13051c0701"
		const addresstQFnktF = accounts[2]
		const uint256K0iez6C = await ReviveYCiPfPQ.totalBalanceOf.call(addressPxczz6c, {from: accounts[1]});
//		const uint256MFTtw7T = await ReviveYCiPfPQ.recoverERC20.call(uintzozkEM8, {from: accounts[0]});
//		const boolEmrb6J8 = await ReviveYCiPfPQ.transferWithLock.call(addresstQFnktF, byteD197RxN, uintvpFu8hk, uintkjbtX35, {from: accounts[0]});

		assert.equal(uint256K0iez6C, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintzozkEM8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addressbDIWXH7 = accounts[7]
		const uintA2sF80M = BigInt("1213")
		const uintqJRdz8M = BigInt("1105")
		const byteD542dZu = "0x06101f0f19121d0e1308170e080916091d10011e1f051d1f1415041f0b1a0f00"
		const uint256K0iez6C = await ReviveYCiPfPQ.totalBalanceOf.call(addressbDIWXH7, {from: accounts[1]});
//		const uint256j3M39ar = await ReviveYCiPfPQ.recoverERC20.call(uintA2sF80M, {from: accounts[0]});
//		const boolCn56rI = await ReviveYCiPfPQ.increaseLockAmount.call(byteD542dZu, uintqJRdz8M, {from: accounts[1]});

		assert.equal(uint256K0iez6C, BigInt("0"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintA2sF80M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const uintrnI30Jq = BigInt("1595")
		const addressVofJWsi = accounts[0]
		const addressi27Ya1i = accounts[7]
//		const addressS4z3xS = await ReviveYCiPfPQ.recoverERC20.call(addressVofJWsi, uintrnI30Jq, {from: accounts[0]});
//		const uint256K0iez6C = await ReviveYCiPfPQ.totalBalanceOf.call(addressi27Ya1i, {from: accounts[1]});

		await expect(ReviveYCiPfPQ.recoverERC20.call(addressVofJWsi, uintrnI30Jq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const uintYkTdXBz = BigInt("934")
		const addressf4JUiD = accounts[8]
		const uintZqb0ang = BigInt("1888")
		const bytewd7akYL = "0x1e051c1e1306091c1f18090115051a1817050b020b1d0a10131c0e00180b1017"
//		const uint256IYpQ4Su = await ReviveYCiPfPQ.recoverERC20.call(uintYkTdXBz, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256K0iez6C = await ReviveYCiPfPQ.totalBalanceOf.call(addressf4JUiD, {from: accounts[1]});
//		const booltGOw1Mq = await ReviveYCiPfPQ.extendLock.call(bytewd7akYL, uintZqb0ang, {from: accounts[4]});

		await expect(ReviveYCiPfPQ.recoverERC20.call(uintYkTdXBz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const uintIerTF41 = BigInt("1402")
		const addressrJxJLWW = accounts[7]
//		const uint256wL7ORO = await ReviveYCiPfPQ.recoverERC20.call(uintIerTF41, {from: accounts[1]});
//		const uint256K0iez6C = await ReviveYCiPfPQ.totalBalanceOf.call(addressrJxJLWW, {from: accounts[1]});
//		const address83Knic = await ReviveYCiPfPQ.owner.call({from: accounts[0]});

		await expect(ReviveYCiPfPQ.recoverERC20.call(uintIerTF41, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYCiPfPQ = await Revive.new({from: accounts[0]});
		const addresskkxOK1y = accounts[7]
		const uintX4qtK9G = BigInt("963")
		const uint256K0iez6C = await ReviveYCiPfPQ.totalBalanceOf.call(addresskkxOK1y, {from: accounts[1]});
		const uint256QEMagHp = await ReviveYCiPfPQ.totalSupply.call({from: accounts[4]});
//		const uint256YpDjXCO = await ReviveYCiPfPQ.recoverERC20.call(uintX4qtK9G, {from: accounts[3]});

		assert.equal(uint256K0iez6C, BigInt("0"))
		assert.equal(uint256QEMagHp, BigInt("3000000000000000000000000000"))
		await expect(ReviveYCiPfPQ.recoverERC20.call(uintX4qtK9G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJ9A38pZ = await Revive.new({from: accounts[1]});
		const uintn75ELn = BigInt("1421")
		const bytesNyI7fX = "0x040c16181d09041a081f111a0d1d1c04090309030611fffffffe0a091b0e0f10070d07"
		const uintlWNpmPO = BigInt("1490")
		const addresskoQ1f34 = accounts[2]
		const addressiUDm30i = accounts[1]
//		const boolx11T00H = await ReviveJ9A38pZ.extendLock.call(bytesNyI7fX, uintn75ELn, {from: accounts[4]});
//		const boolV1DXCth = await ReviveJ9A38pZ.decreaseAllowance.call(addresskoQ1f34, uintlWNpmPO, {from: accounts[5]});
//		const uint256mrix98U = await ReviveJ9A38pZ.unlock.call(addressiUDm30i, {from: accounts[1]});
//		const addresskeAzKnh = await ReviveJ9A38pZ.owner.call({from: accounts[1]});

		await expect(ReviveJ9A38pZ.extendLock.call(bytesNyI7fX, uintn75ELn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDhfFXFk = await Revive.new({from: accounts[3]});
		const uintWaMRvJF = BigInt("1182")
		const uintCOKxvWA = BigInt("1317")
		const byteETb5gqq = "0x0e101d1608070f05051e0e190c041f0214150a080d0e100f120409171f0c170c"
		const addressVhaiJtp = accounts[1]
		const uintF5ftpWY = BigInt("757")
		const bytek4IDAUj = "0x0e0d100c1316030b1e05101a0219071b1f130d1c17120f151e0b1519110c1019"
		const addressMgBB5g = accounts[4]
		const boolNDf3GhG = await ReviveDhfFXFk.transferWithLock.call(addressVhaiJtp, byteETb5gqq, uintCOKxvWA, uintWaMRvJF, {from: accounts[3]});
//		const uint256Iu6RX49 = await ReviveDhfFXFk.recoverERC20.call(uintF5ftpWY, {from: accounts[3]});
//		const uint256S3axWw8 = await ReviveDhfFXFk.tokensLocked.call(addressMgBB5g, bytek4IDAUj, {from: accounts[3]});

		assert.equal(boolNDf3GhG, true)
		await expect(ReviveDhfFXFk.recoverERC20.call(uintF5ftpWY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})