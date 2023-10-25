const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYREY37Ye = await KPLAY.new({from: accounts[1]});
		const addresstKpXAq2 = "0x0000000000000000000000000000000000000001"
		const uintecDJEfT = BigInt("1931")
		const uintjNqeVD = BigInt("1704")
		const addressBkX9KRA = accounts[2]
		const uintxxyHMQ = BigInt("67")
		const addresssPrdkU3 = accounts[1]
		const uintjZjvVCR = BigInt("1624")
//		await KPLAYREY37Ye.renounceOwnership.call({from: accounts[3]});
//		const addressnoij4EX = await KPLAYREY37Ye.transferOwnership.call(addresstKpXAq2, {from: accounts[0]});
//		const addressi7Yv5VK = await KPLAYREY37Ye.lockAfter.call(addressBkX9KRA, uintjNqeVD, uintecDJEfT, {from: accounts[2]});
//		const boolse11oc6 = await KPLAYREY37Ye.decreaseAllowance.call(addresssPrdkU3, uintxxyHMQ, {from: accounts[2]});
//		const uint2568c5xkS = await KPLAYREY37Ye.afterTime.call(uintjZjvVCR, {from: accounts[4]});

		await expect(KPLAYREY37Ye.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhvhnbkf = await KPLAY.new({from: accounts[2]});
		const uintBEJ9bg = BigInt("1575")
		const uintLJoa5LW = BigInt("1668")
		const addressAIp18uP = accounts[0]
		const uintDQkr0n = BigInt("504")
		const address6wtj3q = accounts[3]
		const addressJXUSrcD = accounts[1]
		const uint256RYafVKE = await KPLAYhvhnbkf.afterTime.call(uintBEJ9bg, {from: accounts[3]});
		const boolorwnjXJ = await KPLAYhvhnbkf.approve.call(addressAIp18uP, uintLJoa5LW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTpTvUL5 = await KPLAYhvhnbkf.transfer.call(address6wtj3q, uintDQkr0n, {from: accounts[1]});
//		const addressMjuv4cz = await KPLAYhvhnbkf.unfreeze.call(addressJXUSrcD, {from: accounts[4]});

		assert.equal(boolorwnjXJ, true)
		assert.equal(uint256RYafVKE, BigInt("1630229822"))
		await expect(KPLAYhvhnbkf.transfer.call(address6wtj3q, uintDQkr0n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYYsrbltS = await KPLAY.new({from: accounts[5]});
		const uintjhN7Y9L = BigInt("370")
		const addressN8gOyh5 = accounts[3]
//		await KPLAYYsrbltS.whenPaused.call({from: accounts[3]});
//		const boolOSHTcNU = await KPLAYYsrbltS.mint.call(addressN8gOyh5, uintjhN7Y9L, {from: accounts[2]});

		await expect(KPLAYYsrbltS.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYxeEPhg = await KPLAY.new({from: accounts[4]});
		const uintvFfcXp2 = BigInt("1763")
		const addressocuHNsk = accounts[3]
		const addressn1654lp = accounts[2]
		const uintK8dfclK = BigInt("121")
		const addressXvgxk1U = accounts[4]
		const uintleRIRy = BigInt("894")
		const addressXTAyu47 = accounts[3]
//		const boolcWGaIpF = await KPLAYxeEPhg.transferFrom.call(addressn1654lp, addressocuHNsk, uintvFfcXp2, {from: accounts[2]});
//		const addressAuY12qc = await KPLAYxeEPhg.burn.call(addressXvgxk1U, uintK8dfclK, {from: accounts[3]});
//		const uint256zjJjwQi = await KPLAYxeEPhg.currentTime.call({from: accounts[4]});
//		const boolMyKOO8U = await KPLAYxeEPhg.approve.call(addressXTAyu47, uintleRIRy, {from: accounts[4]});

		await expect(KPLAYxeEPhg.transferFrom.call(addressn1654lp, addressocuHNsk, uintvFfcXp2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRgDIxC = await KPLAY.new({from: accounts[0]});
		const addressUQnAZJ = "0x0000000000000000000000000000000000000001"
		const addressstKJcg2 = accounts[4]
		const addressaZYWuSU = accounts[3]
		const uint256IiWFcv5 = await KPLAYwRgDIxC.allowance.call(addressstKJcg2, addressUQnAZJ, {from: accounts[1]});
		const uint256do7AgpC = await KPLAYwRgDIxC.balanceOf.call(addressaZYWuSU, {from: accounts[3]});
//		await KPLAYwRgDIxC.whenNotPaused.call({from: accounts[1]});

		assert.equal(uint256IiWFcv5, BigInt("0"))
		assert.equal(uint256do7AgpC, BigInt("0"))
		await expect(KPLAYwRgDIxC.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJyCZvW = await KPLAY.new({from: accounts[0]});
		const addressmiDE1TQ = accounts[3]
		const uintMriUYyA = BigInt("1748")
		const addresszVuoDBL = "0x0000000000000000000000000000000000000001"
		const addressRD6I9OH = accounts[2]
		const uintDtfJ3vm = BigInt("1076")
		const addressqd8f0AL = accounts[4]
		const uintM8JCzuJ = BigInt("1702")
		const addressiw1UKtw = accounts[4]
		const uintz5IKSD1 = BigInt("1606")
		const addressCBVVr74 = accounts[0]
		const uintMc6pcBx = BigInt("1904")
		const uintvHEqRCw = BigInt("61")
		const addressvjXeY9w = accounts[3]
		const boolkvkVrIK = await KPLAYJyCZvW.isFrozen.call(addressmiDE1TQ, {from: accounts[1]});
//		const boolrP1jeH8 = await KPLAYJyCZvW.transferFrom.call(addressRD6I9OH, addresszVuoDBL, uintMriUYyA, {from: accounts[3]});
//		const boolIuXzUfJ = await KPLAYJyCZvW.transfer.call(addressqd8f0AL, uintDtfJ3vm, {from: accounts[3]});
//		const boolUbwQaAy = await KPLAYJyCZvW.transfer.call(addressiw1UKtw, uintM8JCzuJ, {from: accounts[2]});
//		const booljhtepY1 = await KPLAYJyCZvW.mint.call(addressCBVVr74, uintz5IKSD1, {from: accounts[4]});
//		const addressipP009Z = await KPLAYJyCZvW.lock.call(addressvjXeY9w, uintvHEqRCw, uintMc6pcBx, {from: accounts[0]});

		assert.equal(boolkvkVrIK, false)
		await expect(KPLAYJyCZvW.transferFrom.call(addressRD6I9OH, addresszVuoDBL, uintMriUYyA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYC1h86Gq = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		await KPLAYC1h86Gq.unpause.call({from: accounts[1]});
		const uint256e5Yqbzw = await KPLAYC1h86Gq.currentTime.call({from: accounts[3]});
	});

	it('test for KPLAY', async () => {
		const KPLAYxobooxh = await KPLAY.new({from: accounts[4]});
		const uintWG4azBp = BigInt("690")
		const addressL8Km6II = accounts[1]
		const uintEJJxlHZ = BigInt("622")
		const addressjHCOhS = accounts[1]
		const uint256MO3uJeP = await KPLAYxobooxh.afterTime.call(uintWG4azBp, {from: accounts[1]});
		const addressFFlh5VS = await KPLAYxobooxh.freeze.call(addressL8Km6II, {from: accounts[4]});
//		await KPLAYxobooxh.lockState.call(addressjHCOhS, uintEJJxlHZ, {from: accounts[5]});
//		await KPLAYxobooxh.unpause.call({from: accounts[0]});

		assert.equal(uint256MO3uJeP, BigInt("1630228924"))
		await expect(KPLAYxobooxh.lockState.call(addressjHCOhS, uintEJJxlHZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmvT39rn = await KPLAY.new({from: accounts[0]});
		const uintfjCJ0aw = BigInt("591")
		const addressVmxR2JQ = accounts[1]
//		const boolISBiMmy = await KPLAYmvT39rn.decreaseAllowance.call(addressVmxR2JQ, uintfjCJ0aw, {from: accounts[1]});

		await expect(KPLAYmvT39rn.decreaseAllowance.call(addressVmxR2JQ, uintfjCJ0aw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYM0Mgy2H = await KPLAY.new({from: accounts[4]});
		const uintzgZfcY = BigInt("547")
		const addressutaTvnT = accounts[2]
		const uintYJkYUEg = BigInt("347")
		const uinth2KZCh = BigInt("43")
		const uintlRF4Y8 = BigInt("184")
		const addressb2CTPFm = accounts[0]
//		const addressio7q2N4 = await KPLAYM0Mgy2H.unlock.call(addressutaTvnT, uintzgZfcY, {from: accounts[4]});
//		const uint256p07Xr56 = await KPLAYM0Mgy2H.afterTime.call(uintYJkYUEg, {from: accounts[3]});
//		const boolCm6llG = await KPLAYM0Mgy2H.transferWithLock.call(addressb2CTPFm, uintlRF4Y8, uinth2KZCh, {from: accounts[1]});

		await expect(KPLAYM0Mgy2H.unlock.call(addressutaTvnT, uintzgZfcY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRgDIxC = await KPLAY.new({from: accounts[0]});
		const addressvAUBD9 = accounts[4]
		const uinteJZzyUU = BigInt("621")
		const addressfnT3zB7 = accounts[3]
		const uint256do7AgpC = await KPLAYwRgDIxC.balanceOf.call(addressvAUBD9, {from: accounts[3]});
		const boolOD8J6wd = await KPLAYwRgDIxC.transfer.call(addressfnT3zB7, uinteJZzyUU, {from: accounts[0]});

		assert.equal(boolOD8J6wd, true)
		assert.equal(uint256do7AgpC, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYwRgDIxC = await KPLAY.new({from: accounts[0]});
		const uintCu44pH9 = BigInt("429")
		const addressmEsU5Cg = accounts[4]
		const address7eumro = accounts[2]
		const uinti8anqTl = BigInt("1692")
		const uintLSeQR1 = BigInt("1913")
		const addressK1FSptO = accounts[5]
		const addressffG5kgL = accounts[4]
		const bool2Ya6LU = await KPLAYwRgDIxC.approve.call(addressmEsU5Cg, uintCu44pH9, {from: accounts[0]});
		const uint256MvtbIrJ = await KPLAYwRgDIxC.lockCount.call(address7eumro, {from: accounts[4]});
//		await KPLAYwRgDIxC.pause.call({from: accounts[0]});
//		const addressIdgXWct = await KPLAYwRgDIxC.lockAfter.call(addressK1FSptO, uintLSeQR1, uinti8anqTl, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256do7AgpC = await KPLAYwRgDIxC.balanceOf.call(addressffG5kgL, {from: accounts[3]});

		assert.equal(bool2Ya6LU, true)
		assert.equal(uint256MvtbIrJ, BigInt("0"))
		await expect(KPLAYwRgDIxC.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRgDIxC = await KPLAY.new({from: accounts[0]});
		const uintSc4CmVi = BigInt("112")
		const uintX9CU1w = BigInt("1200")
		const addressyDiADDy = accounts[2]
		const addressGnmO99c = accounts[4]
//		const addressyJwOkCy = await KPLAYwRgDIxC.lockAfter.call(addressyDiADDy, uintX9CU1w, uintSc4CmVi, {from: accounts[0]});
//		const uint256do7AgpC = await KPLAYwRgDIxC.balanceOf.call(addressGnmO99c, {from: accounts[3]});

		await expect(KPLAYwRgDIxC.lockAfter.call(addressyDiADDy, uintX9CU1w, uintSc4CmVi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRgDIxC = await KPLAY.new({from: accounts[0]});
		const addressMM90u1I = accounts[4]
		const addressh4APbzo = accounts[1]
		const uint256do7AgpC = await KPLAYwRgDIxC.balanceOf.call(addressMM90u1I, {from: accounts[3]});
		const addressUN3FCNl = await KPLAYwRgDIxC.transferOwnership.call(addressh4APbzo, {from: accounts[0]});

		assert.equal(uint256do7AgpC, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYmvT39rn = await KPLAY.new({from: accounts[0]});
		const uintxXRH0r3 = BigInt("858")
		const addressFymGRpG = accounts[3]
		const uintQ6lHVYT = BigInt("1507")
		const addressVyVROpT = accounts[4]
		const addressMzUl5p6 = accounts[3]
		const boolNXpRSjk = await KPLAYmvT39rn.increaseAllowance.call(addressFymGRpG, uintxXRH0r3, {from: accounts[0]});
//		const boolZNtxHB1 = await KPLAYmvT39rn.transferFrom.call(addressMzUl5p6, addressVyVROpT, uintQ6lHVYT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256bv3uQv = await KPLAYmvT39rn.currentTime.call({from: accounts[1]});

		assert.equal(boolNXpRSjk, true)
		await expect(KPLAYmvT39rn.transferFrom.call(addressMzUl5p6, addressVyVROpT, uintQ6lHVYT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHzQuDKX = await KPLAY.new({from: accounts[5]});
		const addresslbBtF2S = accounts[1]
		const addressbZHXpPh = "0x0000000000000000000000000000000000000001"
		const addressaADlapu = accounts[3]
		const uintIWkJi9c = BigInt("7")
		const uintI55k6P5 = BigInt("741")
		const addresssO9SptX = accounts[4]
		const uint256diQPolH = await KPLAYHzQuDKX.balanceOf.call(addresslbBtF2S, {from: accounts[3]});
		const uint256QzfCCnI = await KPLAYHzQuDKX.currentTime.call({from: accounts[0]});
		const uint256rY1BXiW = await KPLAYHzQuDKX.balanceOf.call(addressbZHXpPh, {from: accounts[0]});
		const uint256DWZI0rn = await KPLAYHzQuDKX.lockCount.call(addressaADlapu, {from: accounts[2]});
//		const booltKmpE1 = await KPLAYHzQuDKX.transferWithLock.call(addresssO9SptX, uintI55k6P5, uintIWkJi9c, {from: accounts[4]});

		assert.equal(uint256DWZI0rn, BigInt("0"))
		assert.equal(uint256QzfCCnI, BigInt("1630228237"))
		assert.equal(uint256diQPolH, BigInt("0"))
		assert.equal(uint256rY1BXiW, BigInt("0"))
		await expect(KPLAYHzQuDKX.transferWithLock.call(addresssO9SptX, uintI55k6P5, uintIWkJi9c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmvT39rn = await KPLAY.new({from: accounts[0]});
		const addressYZsM6u2 = accounts[1]
		const addressooPPHoT = accounts[4]
		const uintr12wCd = BigInt("411")
		const addressU8onr5B = accounts[1]
		const addressOKjI4FX = await KPLAYmvT39rn.unfreeze.call(addressYZsM6u2, {from: accounts[0]});
//		const addressm1DSKyH = await KPLAYmvT39rn.freeze.call(addressooPPHoT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolISBiMmy = await KPLAYmvT39rn.decreaseAllowance.call(addressU8onr5B, uintr12wCd, {from: accounts[1]});

		await expect(KPLAYmvT39rn.freeze.call(addressooPPHoT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaTdPitW = await KPLAY.new({from: accounts[2]});
		const uintMX7L6U8 = BigInt("1409")
		const addressKNEzZa = accounts[5]
		const uintp2gm7AT = BigInt("1997")
		const addressQEE14KX = "0x0000000000000000000000000000000000000001"
		const uintlwVVBkG = BigInt("1171")
		const addressrksgMjt = accounts[4]
		const boolyk1Ssax = await KPLAYaTdPitW.approve.call(addressKNEzZa, uintMX7L6U8, {from: accounts[5]});
//		await KPLAYaTdPitW.unpause.call({from: accounts[2]});
//		const boolXZJYCib = await KPLAYaTdPitW.transfer.call(addressQEE14KX, uintp2gm7AT, {from: accounts[4]});
//		const boolAlUPmk0 = await KPLAYaTdPitW.decreaseAllowance.call(addressrksgMjt, uintlwVVBkG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolyk1Ssax, true)
		await expect(KPLAYaTdPitW.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmvT39rn = await KPLAY.new({from: accounts[0]});
		const uintHutRvXZ = BigInt("1119")
		const addressJywy23 = accounts[2]
		const uintsmuQA2H = BigInt("1539")
		const addressnfk5boQ = accounts[4]
		const addressle5t3xb = accounts[3]
		const boolrQc8VZV = await KPLAYmvT39rn.mint.call(addressJywy23, uintHutRvXZ, {from: accounts[0]});
//		const boolZNtxHB1 = await KPLAYmvT39rn.transferFrom.call(addressle5t3xb, addressnfk5boQ, uintsmuQA2H, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrQc8VZV, true)
		await expect(KPLAYmvT39rn.transferFrom.call(addressle5t3xb, addressnfk5boQ, uintsmuQA2H, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmvT39rn = await KPLAY.new({from: accounts[0]});
		const uintDpmDOl = BigInt("1522")
		const addressiGGOVqg = accounts[5]
		const addressReQoZU8 = accounts[3]
//		await KPLAYmvT39rn.renounceOwnership.call({from: accounts[0]});
//		const boolZNtxHB1 = await KPLAYmvT39rn.transferFrom.call(addressReQoZU8, addressiGGOVqg, uintDpmDOl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYmvT39rn.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmvT39rn = await KPLAY.new({from: accounts[0]});
		const uintG42nPZ = BigInt("845")
		const uintAjLgb3I = BigInt("1873")
		const addresskgJoqeW = accounts[2]
		const uint35DEPw = BigInt("1561")
		const addressC4JMUW3 = accounts[4]
		const uintMdaaY2K = BigInt("390")
		const addressMUJ4OE = accounts[1]
		const uintdF2fIuV = BigInt("1522")
		const addressUMl4ie4 = accounts[5]
		const addressf2TmWQh = accounts[3]
		const uintLXBWX1g = BigInt("620")
		const addressXpQqmiM = accounts[0]
//		const address7qYdYw = await KPLAYmvT39rn.lock.call(addresskgJoqeW, uintAjLgb3I, uintG42nPZ, {from: accounts[0]});
//		const addressumZljwf = await KPLAYmvT39rn.burn.call(addressC4JMUW3, uint35DEPw, {from: accounts[0]});
//		const boolcr0WAzu = await KPLAYmvT39rn.decreaseAllowance.call(addressMUJ4OE, uintMdaaY2K, {from: accounts[4]});
//		const boolZNtxHB1 = await KPLAYmvT39rn.transferFrom.call(addressf2TmWQh, addressUMl4ie4, uintdF2fIuV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXin8HXq = await KPLAYmvT39rn.transfer.call(addressXpQqmiM, uintLXBWX1g, {from: accounts[1]});

		await expect(KPLAYmvT39rn.lock.call(addresskgJoqeW, uintAjLgb3I, uintG42nPZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRgDIxC = await KPLAY.new({from: accounts[0]});
		const uintVr1KQy = BigInt("1707")
		const addressD2KJtJm = accounts[1]
		const uint256QAwehwz = await KPLAYwRgDIxC.totalSupply.call({from: accounts[3]});
//		const boolkyaapa = await KPLAYwRgDIxC.transfer.call(addressD2KJtJm, uintVr1KQy, {from: accounts[3]});

		assert.equal(uint256QAwehwz, BigInt("10000000000000000"))
		await expect(KPLAYwRgDIxC.transfer.call(addressD2KJtJm, uintVr1KQy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRgDIxC = await KPLAY.new({from: accounts[0]});
		const uinttXbhoi3 = BigInt("172")
		const addressxQKxE2g = accounts[4]
		const uintvT5mbv9 = BigInt("506")
		const addresspi0AgyB = accounts[0]
		const addressH3aoXDr = accounts[4]
//		const address8s35yE = await KPLAYwRgDIxC.burn.call(addressxQKxE2g, uinttXbhoi3, {from: accounts[0]});
//		const boolkG60jdb = await KPLAYwRgDIxC.approve.call(addresspi0AgyB, uintvT5mbv9, {from: accounts[2]});
//		const uint256do7AgpC = await KPLAYwRgDIxC.balanceOf.call(addressH3aoXDr, {from: accounts[3]});

		await expect(KPLAYwRgDIxC.burn.call(addressxQKxE2g, uinttXbhoi3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYw75d5H = await KPLAY.new({from: accounts[1]});
		const uintTz8NUNm = BigInt("440")
		const uintQfcwz6d = BigInt("196")
		const addressTpjlBTc = accounts[2]
		const uintdXJXgJ2 = BigInt("1317")
		const addressVTUQQlw = accounts[4]
		const uintcuo6Bhl = BigInt("1569")
		const addressowWJ7oF = accounts[4]
		const boolj8VsvZ = await KPLAYw75d5H.transferWithLock.call(addressTpjlBTc, uintQfcwz6d, uintTz8NUNm, {from: accounts[1]});
//		const addressHN7Rdc3 = await KPLAYw75d5H.unlock.call(addressVTUQQlw, uintdXJXgJ2, {from: accounts[5]});
//		const addressr0p8T0H = await KPLAYw75d5H.burn.call(addressowWJ7oF, uintcuo6Bhl, {from: accounts[4]});
//		await KPLAYw75d5H.whenNotPaused.call({from: accounts[1]});

		assert.equal(boolj8VsvZ, true)
		await expect(KPLAYw75d5H.unlock.call(addressVTUQQlw, uintdXJXgJ2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJ492kNT = await KPLAY.new({from: accounts[2]});
		const uintXCZriXW = BigInt("40")
		const uintej36ZjR = BigInt("1300")
		const addressXVQ83Sy = accounts[3]
		const uintgLoJUkt = BigInt("1790")
		const addresslhsiBsy = accounts[4]
		const boolTS0aPKw = await KPLAYJ492kNT.transferWithLockAfter.call(addressXVQ83Sy, uintej36ZjR, uintXCZriXW, {from: accounts[2]});
//		await KPLAYJ492kNT.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYJ492kNT.whenNotFrozen.call({from: accounts[5]});
//		await KPLAYJ492kNT.lockState.call(addresslhsiBsy, uintgLoJUkt, {from: accounts[0]});
//		await KPLAYJ492kNT.whenPaused.call({from: accounts[2]});

		assert.equal(boolTS0aPKw, true)
		await expect(KPLAYJ492kNT.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})