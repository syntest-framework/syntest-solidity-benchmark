const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const RevivejVL4741 = await Revive.new({from: accounts[0]});
		const uintVeruZCX = BigInt("1370")
		const uintNfirI1H = BigInt("1609")
		const bytelTIEAun = "0x09130012111c0e03180807181a0c11040a15181d171a0411051d071212080808"
		const addressy5f5kAd = accounts[2]
		const uintRtxL73Y = BigInt("547")
		const bytewheSZsl = "0x03160d03001d0d0b1d1008131b090c1c090707000c1c0d1f08101802150e0019"
		const uintPLrPrS = BigInt("1785")
		const addressZuPQu8Y = accounts[1]
		const addressKlYhP6P = accounts[3]
		const addressxUyCGiR = accounts[4]
//		const boolQLQFO9z = await RevivejVL4741.transferWithLock.call(addressy5f5kAd, bytelTIEAun, uintNfirI1H, uintVeruZCX, {from: accounts[3]});
//		const boolWfJQlKQ = await RevivejVL4741.extendLock.call(bytewheSZsl, uintRtxL73Y, {from: accounts[1]});
//		const boolhqfrbcX = await RevivejVL4741.transfer.call(addressZuPQu8Y, uintPLrPrS, {from: accounts[1]});
//		const uint256xqN5AWc = await RevivejVL4741.allowance.call(addressxUyCGiR, addressKlYhP6P, {from: accounts[3]});

		await expect(RevivejVL4741.transferWithLock.call(addressy5f5kAd, bytelTIEAun, uintNfirI1H, uintVeruZCX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBYbsqvl = await Revive.new({from: accounts[3]});
		const uintzJFPvhF = BigInt("603")
		const addressWduU5bq = accounts[4]
		const addressy388f2k = accounts[3]
		const addressz7IL5QX = accounts[2]
//		const addressjGFeofZ = await ReviveBYbsqvl.recoverERC20.call(addressWduU5bq, uintzJFPvhF, {from: accounts[4]});
//		const uint256fzMPEsc = await ReviveBYbsqvl.allowance.call(addressz7IL5QX, addressy388f2k, {from: accounts[1]});

		await expect(ReviveBYbsqvl.recoverERC20.call(addressWduU5bq, uintzJFPvhF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekU5u3Gg = await Revive.new({from: accounts[0]});
		const addresskaVa4r9 = accounts[4]
		const uints6YO94R = BigInt("16")
		const byteMDN8NnD = "0x0d0b101d04100b18090d0b18041809090d131907101503020a051a1e181e111c"
		const uintYkd3pLN = BigInt("1997")
		const uintA8P2a0u = BigInt("1742")
		const byteXQnyEos = "0x15060b0f0f0d0c1f1107050a1601170a07171f0d0119031310080717110d1711"
		const addressGbSi91 = accounts[2]
		const uintchwvg5G = BigInt("1789")
		const addressEqA5ku1 = accounts[4]
		const byteESSYPKb = "0x051f191718071e07170a14071203110d1c110517021f1905140a0e0904131805"
		const addressm9XiWxa = accounts[4]
		const uintjQp5HUj = BigInt("1681")
		const addressias6K4Q = accounts[2]
		const addresszopEpu7 = accounts[0]
		const uint256uje0aQQ = await RevivekU5u3Gg.getUnlockableTokens.call(addresskaVa4r9, {from: accounts[1]});
//		const boolbyvIibq = await RevivekU5u3Gg.increaseLockAmount.call(byteMDN8NnD, uints6YO94R, {from: accounts[3]});
//		const boolGf5K5z = await RevivekU5u3Gg.transferWithLock.call(addressGbSi91, byteXQnyEos, uintA8P2a0u, uintYkd3pLN, {from: accounts[4]});
//		const boolxiyYLzg = await RevivekU5u3Gg.decreaseAllowance.call(addressEqA5ku1, uintchwvg5G, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mxmEqzl = await RevivekU5u3Gg.tokensLocked.call(addressm9XiWxa, byteESSYPKb, {from: accounts[4]});
//		const boolYXfjfyp = await RevivekU5u3Gg.transferFrom.call(addresszopEpu7, addressias6K4Q, uintjQp5HUj, {from: accounts[0]});

		assert.equal(uint256uje0aQQ, BigInt("0"))
		await expect(RevivekU5u3Gg.increaseLockAmount.call(byteMDN8NnD, uints6YO94R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKG85Zae = await Revive.new({from: accounts[5]});
		const uintojsf49w = BigInt("848")
		const addressfwMKVc = accounts[3]
		const byteGsRwveZ = "0x0d0c01060c0808150f100705141b1b08081306040213051e1a0a1319150d030f"
		const addresskvsPcdW = "0x0000000000000000000000000000000000000001"
		const uintX7a5uA = BigInt("1955")
		const addressd0af3AB = accounts[0]
		const uint256Ub5RjML = await ReviveKG85Zae.totalSupply.call({from: accounts[4]});
//		const boolLwt5QEQ = await ReviveKG85Zae.decreaseAllowance.call(addressfwMKVc, uintojsf49w, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wHOJxpf = await ReviveKG85Zae.tokensLocked.call(addresskvsPcdW, byteGsRwveZ, {from: accounts[1]});
//		const boolCeR2N6c = await ReviveKG85Zae.increaseAllowance.call(addressd0af3AB, uintX7a5uA, {from: accounts[0]});

		assert.equal(uint256Ub5RjML, BigInt("3000000000000000000000000000"))
		await expect(ReviveKG85Zae.decreaseAllowance.call(addressfwMKVc, uintojsf49w, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDjgFw5K = await Revive.new({from: accounts[2]});
		const addresslDSWsXI = "0x0000000000000000000000000000000000000001"
		const addressO3h8YXn = accounts[1]
		const addressXnhAyFY = accounts[3]
		const addressstnR50y = accounts[2]
		const uint256fwwYsv = await ReviveDjgFw5K.balanceOf.call(addresslDSWsXI, {from: accounts[1]});
		const uint256TwKZKv = await ReviveDjgFw5K.balanceOf.call(addressO3h8YXn, {from: accounts[1]});
		const uint256qQNRXob = await ReviveDjgFw5K.allowance.call(addressstnR50y, addressXnhAyFY, {from: accounts[5]});

		assert.equal(uint256TwKZKv, BigInt("0"))
		assert.equal(uint256fwwYsv, BigInt("0"))
		assert.equal(uint256qQNRXob, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveC3f2Fmt = await Revive.new({from: accounts[1]});
		const addressQCocLLV = accounts[4]
		const uintXzWgqnY = BigInt("810")
		const addressv9AOI6j = accounts[2]
		const uint256RLPZaKp = await ReviveC3f2Fmt.getUnlockableTokens.call(addressQCocLLV, {from: accounts[3]});
		const boolX5eZ1ix = await ReviveC3f2Fmt.approve.call(addressv9AOI6j, uintXzWgqnY, {from: accounts[4]});

		assert.equal(boolX5eZ1ix, true)
		assert.equal(uint256RLPZaKp, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivekdVD0h8 = await Revive.new({from: accounts[3]});
		const addresscn6lnP2 = accounts[1]
		const addressKsDmBmq = accounts[0]
		const uintiBLjYMb = BigInt("108")
		const byteT5irp0y = "0x031617061a1a09021604051f0210160c0f061207131e1b171e061a0c06181f01"
		const addressAtFfQ6O = accounts[1]
		const uintXgTEKMe = BigInt("2016")
		const addressVMkL1Ai = accounts[3]
		const uint256nn4O6a1 = await RevivekdVD0h8.getUnlockableTokens.call(addresscn6lnP2, {from: accounts[0]});
		const uint2566rYV8s = await RevivekdVD0h8.totalBalanceOf.call(addressKsDmBmq, {from: accounts[5]});
//		await RevivekdVD0h8.renounceOwnership.call({from: accounts[0]});
//		const uint256HYJ9bXB = await RevivekdVD0h8.tokensLockedAtTime.call(addressAtFfQ6O, byteT5irp0y, uintiBLjYMb, {from: accounts[4]});
//		const boolZPh2Yhe = await RevivekdVD0h8.transfer.call(addressVMkL1Ai, uintXgTEKMe, {from: accounts[0]});

		assert.equal(uint2566rYV8s, BigInt("0"))
		assert.equal(uint256nn4O6a1, BigInt("0"))
		await expect(RevivekdVD0h8.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekeVLlx0 = await Revive.new({from: accounts[0]});
		const uinthmuIbjH = BigInt("1112")
		const bytePtqBb9n = "0x1a190c060c010f1d17041f0a07191b1d130f0a01110c1a0f050f12190b051114"
		const addresskF9dm6Y = accounts[2]
		const boolMb1OVF9 = await RevivekeVLlx0.isOwner.call({from: accounts[3]});
//		const boolVMjJsvZ = await RevivekeVLlx0.extendLock.call(bytePtqBb9n, uinthmuIbjH, {from: accounts[0]});
//		const addressHvLEgu = await RevivekeVLlx0.transferOwnership.call(addresskF9dm6Y, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMb1OVF9, false)
		await expect(RevivekeVLlx0.extendLock.call(bytePtqBb9n, uinthmuIbjH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveam86prJ = await Revive.new({from: accounts[1]});
		const uintzqkw71P = BigInt("1633")
		const bytet00spcI = "0x1f01130712181c1b0c06070e021e16120a17100118030218001c140a160d0c17"
		const addressXqfQ8j = accounts[4]
		const bytely261K9 = "0x180c0803120f0c1c111305061a0c1a1c201d1b05161c0f0710111e101b1c0211"
		const addressJbWQgNf = accounts[1]
//		await Reviveam86prJ.onlyOwner.call({from: accounts[2]});
//		const uint256taaXjHj = await Reviveam86prJ.tokensLockedAtTime.call(addressXqfQ8j, bytet00spcI, uintzqkw71P, {from: accounts[0]});
//		const uint256zLzLWcN = await Reviveam86prJ.tokensUnlockable.call(addressJbWQgNf, bytely261K9, {from: accounts[0]});
//		await Reviveam86prJ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Reviveam86prJ.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveISlgqbG = await Revive.new({from: accounts[0]});
		const uintMHFJS8l = BigInt("834")
		const addressCPc57Bw = accounts[4]
		const uintEgeNOSr = BigInt("1299")
		const byteXaFJG0 = "0x040717040c1300091b02061f17081d050a061a1e1f09080115040e070e130d1f"
		const addressL2hcg1 = accounts[4]
		const uintkkOHdrI = BigInt("1365")
		const addressAKrUIan = accounts[3]
		const boolegjvrai = await ReviveISlgqbG.approve.call(addressCPc57Bw, uintMHFJS8l, {from: accounts[0]});
		const uint256GQsmgBR = await ReviveISlgqbG.totalSupply.call({from: accounts[3]});
		const uint256ZqzsXR = await ReviveISlgqbG.tokensLockedAtTime.call(addressL2hcg1, byteXaFJG0, uintEgeNOSr, {from: accounts[5]});
//		const addresswNkgKcE = await ReviveISlgqbG.recoverERC20.call(addressAKrUIan, uintkkOHdrI, {from: accounts[3]});

		assert.equal(boolegjvrai, true)
		assert.equal(uint256GQsmgBR, BigInt("3000000000000000000000000000"))
		assert.equal(uint256ZqzsXR, BigInt("0"))
		await expect(ReviveISlgqbG.recoverERC20.call(addressAKrUIan, uintkkOHdrI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekdVD0h8 = await Revive.new({from: accounts[3]});
		const addressc23Q8LU = accounts[2]
		const uintpsVy5e7 = BigInt("173")
		const addressklUlE8v = accounts[1]
		const addressPcJ6XlV = accounts[0]
		const uint9wplOU = BigInt("108")
		const bytesaupdGc = "0x031617061a1a09021604051f0210160c0f061207131e1b171e061a0c06181f01"
		const addressVlY6G1s = accounts[1]
		const uint256nn4O6a1 = await RevivekdVD0h8.getUnlockableTokens.call(addressc23Q8LU, {from: accounts[0]});
//		const addressMK74TDD = await RevivekdVD0h8.recoverERC20.call(addressklUlE8v, uintpsVy5e7, {from: accounts[3]});
//		const uint2566rYV8s = await RevivekdVD0h8.totalBalanceOf.call(addressPcJ6XlV, {from: accounts[5]});
//		await RevivekdVD0h8.renounceOwnership.call({from: accounts[0]});
//		const uint256HYJ9bXB = await RevivekdVD0h8.tokensLockedAtTime.call(addressVlY6G1s, bytesaupdGc, uint9wplOU, {from: accounts[4]});

		assert.equal(uint256nn4O6a1, BigInt("0"))
		await expect(RevivekdVD0h8.recoverERC20.call(addressklUlE8v, uintpsVy5e7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKG85Zae = await Revive.new({from: accounts[5]});
		const byteLIElR8S = "0x0d10031a1b13180f1505110c00170d1f111a16040e190a1108200d0d0d171215"
		const addressYzX0VM5 = accounts[1]
		const uintOsIl5lo = BigInt("848")
		const addressc0acUG2 = accounts[3]
		const bytefxRGK7z = "0x0d0c01060c0808150f100705141b1b08081306040213051e1a0a1319150d030f"
		const addressH1vSZPv = "0x0000000000000000000000000000000000000000"
		const uintSB10WA = BigInt("1955")
		const addressBHKyWi = accounts[0]
		const uint256BltaMW3 = await ReviveKG85Zae.tokensUnlockable.call(addressYzX0VM5, byteLIElR8S, {from: accounts[1]});
		const uint256Ub5RjML = await ReviveKG85Zae.totalSupply.call({from: accounts[4]});
//		const boolLwt5QEQ = await ReviveKG85Zae.decreaseAllowance.call(addressc0acUG2, uintOsIl5lo, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wHOJxpf = await ReviveKG85Zae.tokensLocked.call(addressH1vSZPv, bytefxRGK7z, {from: accounts[1]});
//		const boolCeR2N6c = await ReviveKG85Zae.increaseAllowance.call(addressBHKyWi, uintSB10WA, {from: accounts[0]});

		assert.equal(uint256BltaMW3, BigInt("0"))
		assert.equal(uint256Ub5RjML, BigInt("3000000000000000000000000000"))
		await expect(ReviveKG85Zae.decreaseAllowance.call(addressc0acUG2, uintOsIl5lo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKG85Zae = await Revive.new({from: accounts[5]});
		const bytenFvTQsR = "0x0d0c01060c0808150f100705141b1b08081306040213051e1a0a1319150d030f"
		const addressqzgcgqq = "0x0000000000000000000000000000000000000001"
		const uint6ezaDl = BigInt("1955")
		const addressw6hl4cC = accounts[0]
		const uint256Ub5RjML = await ReviveKG85Zae.totalSupply.call({from: accounts[4]});
		const uint256wHOJxpf = await ReviveKG85Zae.tokensLocked.call(addressqzgcgqq, bytenFvTQsR, {from: accounts[1]});
		const boolF05QxQ1 = await ReviveKG85Zae.isOwner.call({from: accounts[1]});
		const boolCeR2N6c = await ReviveKG85Zae.increaseAllowance.call(addressw6hl4cC, uint6ezaDl, {from: accounts[0]});

		assert.equal(boolCeR2N6c, true)
		assert.equal(boolF05QxQ1, false)
		assert.equal(uint256Ub5RjML, BigInt("3000000000000000000000000000"))
		assert.equal(uint256wHOJxpf, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveEJwWzjY = await Revive.new({from: accounts[4]});
		const addressewUyl7G = accounts[3]
		const uintBkywSIS = BigInt("72")
		const uintnH7zhj5 = BigInt("2016")
		const byteH6trbnC = "0x051b0f170818010b070c1f0e1a11020e151c0519120f1a1019181a041116130d"
		const addressRP0E48e = accounts[3]
		const uint256QR4xhtC = await ReviveEJwWzjY.getUnlockableTokens.call(addressewUyl7G, {from: accounts[4]});
//		const uint256wHTgnLi = await ReviveEJwWzjY.recoverERC20.call(uintBkywSIS, {from: accounts[2]});
//		const boolr3IcDVz = await ReviveEJwWzjY.increaseLockAmount.call(byteH6trbnC, uintnH7zhj5, {from: accounts[4]});
//		const uint256JY97IYp = await ReviveEJwWzjY.totalBalanceOf.call(addressRP0E48e, {from: accounts[3]});

		assert.equal(uint256QR4xhtC, BigInt("0"))
		await expect(ReviveEJwWzjY.recoverERC20.call(uintBkywSIS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM5boHHo = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPvC2x8Q = BigInt("735")
		const uintKSt2wvc = BigInt("550")
		const addressgAB6fX = accounts[2]
		const addressk3BEgR5 = "0x0000000000000000000000000000000000000001"
		await ReviveM5boHHo.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bjGJo8c = await ReviveM5boHHo.recoverERC20.call(uintPvC2x8Q, {from: accounts[2]});
		const boolfqB880L = await ReviveM5boHHo.transferFrom.call(addressk3BEgR5, addressgAB6fX, uintKSt2wvc, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Revive', async () => {
		const RevivejVL4741 = await Revive.new({from: accounts[0]});
		const uintbygS1JR = BigInt("1633")
		const byteIKoNymC = "0x1020131f150518171b08160208030905181c181317080c1309080d0e170d1d12"
//		await RevivejVL4741.renounceOwnership.call({from: accounts[0]});
//		const boolWfJQlKQ = await RevivejVL4741.extendLock.call(byteIKoNymC, uintbygS1JR, {from: accounts[1]});

		await expect(RevivejVL4741.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqsHRy4D = await Revive.new({from: accounts[2]});
		const addressi8yfxCa = accounts[3]
		const uintc7jqZF = BigInt("1267")
		const addressgxW9Ucb = accounts[1]
		const uintNBd4ugJ = BigInt("2002")
		const byteh1frc2 = "0x18200f1905000d080218130e0c0b1b180b100c0005031f1f161e03160e07150d"
		const uint256AnsRFpR = await ReviveqsHRy4D.unlock.call(addressi8yfxCa, {from: accounts[2]});
//		const uint256tMl6AlM = await ReviveqsHRy4D.recoverERC20.call(uintc7jqZF, {from: accounts[4]});
//		const addressQaU90pR = await ReviveqsHRy4D.transferOwnership.call(addressgxW9Ucb, {from: accounts[5]});
//		const boolfaMhD3U = await ReviveqsHRy4D.extendLock.call(byteh1frc2, uintNBd4ugJ, {from: accounts[1]});
//		await ReviveqsHRy4D.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256AnsRFpR, BigInt("0"))
		await expect(ReviveqsHRy4D.recoverERC20.call(uintc7jqZF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqsHRy4D = await Revive.new({from: accounts[2]});
		const addressGtypHLy = accounts[3]
		const uintvlreuGr = BigInt("1016")
		const uintCZeJtN2 = BigInt("811")
		const byteupRk3J1 = "0x0f021f150a1e200413120b1b0e15060e1b030c1e1908190a19150b0e0a0c0b1e"
		const uintd94rUY6 = BigInt("1267")
		const uintQvmR6Qb = BigInt("1913")
		const addressmDdne8j = accounts[1]
		const addressgwrQWzu = accounts[1]
		const addressNeQwtqu = accounts[5]
		const uint256AnsRFpR = await ReviveqsHRy4D.unlock.call(addressGtypHLy, {from: accounts[2]});
//		const boolYi4E5RB = await ReviveqsHRy4D.lock.call(byteupRk3J1, uintCZeJtN2, uintvlreuGr, {from: accounts[3]});
//		const uint256tMl6AlM = await ReviveqsHRy4D.recoverERC20.call(uintd94rUY6, {from: accounts[4]});
//		const bools1I4k1B = await ReviveqsHRy4D.increaseAllowance.call(addressmDdne8j, uintQvmR6Qb, {from: accounts[3]});
//		const addressQaU90pR = await ReviveqsHRy4D.transferOwnership.call(addressgwrQWzu, {from: accounts[5]});
//		const uint256UpxNUKc = await ReviveqsHRy4D.totalBalanceOf.call(addressNeQwtqu, {from: accounts[1]});
//		await ReviveqsHRy4D.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256AnsRFpR, BigInt("0"))
		await expect(ReviveqsHRy4D.lock.call(byteupRk3J1, uintCZeJtN2, uintvlreuGr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqsHRy4D = await Revive.new({from: accounts[2]});
		const addressVyrmIMi = accounts[3]
		const uintOwGyfme = BigInt("718")
		const addressbFkoOLm = accounts[0]
		const addressytK8FYc = "0x0000000000000000000000000000000000000001"
		const addressb1LQf7U = accounts[1]
		const uintvuuV0dE = BigInt("1807")
		const uintil8CdBN = BigInt("820")
		const byteONfQFEq = "0x181607180216101b06071016081f04071a041a111e0202111005021d06060b04"
		const addressFY4IzT = accounts[5]
		const uintJ35GMcs = BigInt("2002")
		const byteXUiDN0 = "0x18200f1905000d080218130e0c0b1b180b100c0005031f1f161e03160e07150d"
		const uint256AnsRFpR = await ReviveqsHRy4D.unlock.call(addressVyrmIMi, {from: accounts[2]});
		const uint256jYOEjMq = await ReviveqsHRy4D.totalSupply.call({from: accounts[0]});
//		const boolxp7IRfH = await ReviveqsHRy4D.transferFrom.call(addressytK8FYc, addressbFkoOLm, uintOwGyfme, {from: accounts[3]});
//		const addressQaU90pR = await ReviveqsHRy4D.transferOwnership.call(addressb1LQf7U, {from: accounts[5]});
//		const boolg4wrmjf = await ReviveqsHRy4D.transferWithLock.call(addressFY4IzT, byteONfQFEq, uintil8CdBN, uintvuuV0dE, {from: accounts[4]});
//		const boolfaMhD3U = await ReviveqsHRy4D.extendLock.call(byteXUiDN0, uintJ35GMcs, {from: accounts[1]});
//		await ReviveqsHRy4D.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256AnsRFpR, BigInt("0"))
		assert.equal(uint256jYOEjMq, BigInt("3000000000000000000000000000"))
		await expect(ReviveqsHRy4D.transferFrom.call(addressytK8FYc, addressbFkoOLm, uintOwGyfme, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqsHRy4D = await Revive.new({from: accounts[2]});
		const addressk2o6IRI = accounts[3]
		const uintktLazgJ = BigInt("1264")
		const addressfayR9eV = accounts[1]
		const uintTywXRw5 = BigInt("2002")
		const byterXvll2s = "0x18200f1905000d080218130e0c0b1b180b100c0005031f1f161e03160e07150d"
		const uint256AnsRFpR = await ReviveqsHRy4D.unlock.call(addressk2o6IRI, {from: accounts[2]});
//		const uint256tMl6AlM = await ReviveqsHRy4D.recoverERC20.call(uintktLazgJ, {from: accounts[4]});
//		const addressQaU90pR = await ReviveqsHRy4D.transferOwnership.call(addressfayR9eV, {from: accounts[5]});
//		const boolfaMhD3U = await ReviveqsHRy4D.extendLock.call(byterXvll2s, uintTywXRw5, {from: accounts[1]});
//		await ReviveqsHRy4D.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256AnsRFpR, BigInt("0"))
		await expect(ReviveqsHRy4D.recoverERC20.call(uintktLazgJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqsHRy4D = await Revive.new({from: accounts[2]});
		const addressQnG7yc8 = accounts[3]
		const uintbicGdtT = BigInt("572")
		const uint256AnsRFpR = await ReviveqsHRy4D.unlock.call(addressQnG7yc8, {from: accounts[2]});
//		const uint256tMl6AlM = await ReviveqsHRy4D.recoverERC20.call(uintbicGdtT, {from: accounts[4]});
//		await ReviveqsHRy4D.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256AnsRFpR, BigInt("0"))
		await expect(ReviveqsHRy4D.recoverERC20.call(uintbicGdtT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqsHRy4D = await Revive.new({from: accounts[2]});
		const addressiGvknwg = accounts[3]
		const uintnMssHCI = BigInt("1351")
		const uint256AnsRFpR = await ReviveqsHRy4D.unlock.call(addressiGvknwg, {from: accounts[2]});
//		const uint256tMl6AlM = await ReviveqsHRy4D.recoverERC20.call(uintnMssHCI, {from: accounts[4]});
//		await ReviveqsHRy4D.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256AnsRFpR, BigInt("0"))
		await expect(ReviveqsHRy4D.recoverERC20.call(uintnMssHCI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqsHRy4D = await Revive.new({from: accounts[2]});
		const addressWcRj7pk = accounts[3]
		const addressaXS0KYq = accounts[2]
		const uinte3W5M0R = BigInt("1278")
		const boolsIKzxMj = await ReviveqsHRy4D.isOwner.call({from: accounts[5]});
		const uint256AnsRFpR = await ReviveqsHRy4D.unlock.call(addressWcRj7pk, {from: accounts[2]});
		const uint256pJ3Bsx = await ReviveqsHRy4D.unlock.call(addressaXS0KYq, {from: accounts[4]});
//		const uint256tMl6AlM = await ReviveqsHRy4D.recoverERC20.call(uinte3W5M0R, {from: accounts[4]});
//		await ReviveqsHRy4D.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolsIKzxMj, false)
		assert.equal(uint256AnsRFpR, BigInt("0"))
		assert.equal(uint256pJ3Bsx, BigInt("0"))
		await expect(ReviveqsHRy4D.recoverERC20.call(uinte3W5M0R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHesOyQW = await Revive.new({from: accounts[2]});
		const uintAQhDs4w = BigInt("929")
		const addressL1IhplK = accounts[4]
		const addressSJ2ttXX = accounts[5]
		const uintk6ehKHn = BigInt("932")
		const addressd3PrUjJ = accounts[4]
//		const uint256CYDn8G = await ReviveHesOyQW.recoverERC20.call(uintAQhDs4w, {from: accounts[1]});
//		const uint256sABX3Jg = await ReviveHesOyQW.totalSupply.call({from: accounts[1]});
//		const uint256B7BcxfB = await ReviveHesOyQW.getUnlockableTokens.call(addressL1IhplK, {from: accounts[2]});
//		const uint256EZhOYS = await ReviveHesOyQW.balanceOf.call(addressSJ2ttXX, {from: accounts[4]});
//		const boolfniOeqL = await ReviveHesOyQW.decreaseAllowance.call(addressd3PrUjJ, uintk6ehKHn, {from: accounts[4]});

		await expect(ReviveHesOyQW.recoverERC20.call(uintAQhDs4w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC3f2Fmt = await Revive.new({from: accounts[1]});
		const addressauq3I8G = accounts[6]
		const uintWXlEgQ = BigInt("32")
		const uintkvnLHFH = BigInt("212")
		const bytezljtL2Z = "0x0d1b1d0c0918171d0f100b0916121c0f17091c1e1a081613141402030b110f1f"
		const address6mWsgo = accounts[2]
		const uint256RLPZaKp = await ReviveC3f2Fmt.getUnlockableTokens.call(addressauq3I8G, {from: accounts[3]});
		const boolvLB2M3k = await ReviveC3f2Fmt.transferWithLock.call(address6mWsgo, bytezljtL2Z, uintkvnLHFH, uintWXlEgQ, {from: accounts[1]});

		assert.equal(boolvLB2M3k, true)
		assert.equal(uint256RLPZaKp, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivekdVD0h8 = await Revive.new({from: accounts[3]});
		const uintXmCITJ8 = BigInt("102")
		const bytehHsuaNZ = "0x120f1effffffff041b0214111a0c111c0d0c1c191a080d170913141f011219071b1019"
		const addressohev8FJ = accounts[1]
//		const uint256HYJ9bXB = await RevivekdVD0h8.tokensLockedAtTime.call(addressohev8FJ, bytehHsuaNZ, uintXmCITJ8, {from: accounts[4]});

		await expect(RevivekdVD0h8.tokensLockedAtTime.call(addressohev8FJ, bytehHsuaNZ, uintXmCITJ8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUmrRj7C = await Revive.new({from: accounts[5]});
		const addressbVdkhn = accounts[3]
		const addressx5zwk6i = accounts[3]
		const addressqf4uQdq = accounts[3]
		const uint256Ku8Wp0y = await ReviveUmrRj7C.totalBalanceOf.call(addressbVdkhn, {from: accounts[4]});
		const addressBG46OPW = await ReviveUmrRj7C.transferOwnership.call(addressx5zwk6i, {from: accounts[5]});
		const uint256oJnp1Mx = await ReviveUmrRj7C.getUnlockableTokens.call(addressqf4uQdq, {from: accounts[2]});

		assert.equal(uint256Ku8Wp0y, BigInt("0"))
		assert.equal(uint256oJnp1Mx, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveC3f2Fmt = await Revive.new({from: accounts[1]});
		const uintEwXsv1c = BigInt("1640")
		const uintpr2acQG = BigInt("241")
		const bytebuBXOXT = "0x021e0417011a1e0916100d16070d061c1503080a15120c051d030512050c141d"
		const addressj5E959P = accounts[4]
		const addressk8XhCVW = accounts[6]
//		const uint256yjlZqSt = await ReviveC3f2Fmt.recoverERC20.call(uintEwXsv1c, {from: accounts[4]});
//		const uint256EZg0dKn = await ReviveC3f2Fmt.tokensLockedAtTime.call(addressj5E959P, bytebuBXOXT, uintpr2acQG, {from: accounts[2]});
//		const uint256RLPZaKp = await ReviveC3f2Fmt.getUnlockableTokens.call(addressk8XhCVW, {from: accounts[3]});

		await expect(ReviveC3f2Fmt.recoverERC20.call(uintEwXsv1c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC3f2Fmt = await Revive.new({from: accounts[1]});
		const uintVywGvEc = BigInt("2019")
		const uintiU23JZ0 = BigInt("1038")
		const addressUZnJLc5 = accounts[4]
		const addressyv7hdRw = accounts[6]
//		const uint256XwMSAAu = await ReviveC3f2Fmt.recoverERC20.call(uintVywGvEc, {from: accounts[1]});
//		const booljMuJxrX = await ReviveC3f2Fmt.approve.call(addressUZnJLc5, uintiU23JZ0, {from: accounts[4]});
//		const uint256RLPZaKp = await ReviveC3f2Fmt.getUnlockableTokens.call(addressyv7hdRw, {from: accounts[3]});

		await expect(ReviveC3f2Fmt.recoverERC20.call(uintVywGvEc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC3f2Fmt = await Revive.new({from: accounts[1]});
		const addressGpDMnHv = accounts[6]
		const uintQNX2lar = BigInt("1841")
		const uint256RLPZaKp = await ReviveC3f2Fmt.getUnlockableTokens.call(addressGpDMnHv, {from: accounts[3]});
//		const uint256U8s5KF8 = await ReviveC3f2Fmt.recoverERC20.call(uintQNX2lar, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RLPZaKp, BigInt("0"))
		await expect(ReviveC3f2Fmt.recoverERC20.call(uintQNX2lar, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEJwWzjY = await Revive.new({from: accounts[4]});
		const addresskP6RNla = accounts[4]
		const uintamXqWb3 = BigInt("679")
		const uint256JY97IYp = await ReviveEJwWzjY.totalBalanceOf.call(addresskP6RNla, {from: accounts[3]});
//		const uint256pYnXsUI = await ReviveEJwWzjY.recoverERC20.call(uintamXqWb3, {from: accounts[0]});

		assert.equal(uint256JY97IYp, BigInt("3000000000000000000000000000"))
		await expect(ReviveEJwWzjY.recoverERC20.call(uintamXqWb3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejVL4741 = await Revive.new({from: accounts[0]});
		const uintM7opvVu = BigInt("623")
		const uintr97Za2O = BigInt("1376")
		const uintHGuHmd = BigInt("1609")
		const bytegEMWPmA = "0x0914111909190918030114070f1e1805040518010c17111b0a0d0d080615190c"
		const addressjMcjeLP = accounts[2]
//		const uint256K1pzTiq = await RevivejVL4741.recoverERC20.call(uintM7opvVu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQLQFO9z = await RevivejVL4741.transferWithLock.call(addressjMcjeLP, bytegEMWPmA, uintHGuHmd, uintr97Za2O, {from: accounts[3]});

		await expect(RevivejVL4741.recoverERC20.call(uintM7opvVu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEJwWzjY = await Revive.new({from: accounts[4]});
		const uintwuGboEl = BigInt("585")
		const addressv1m7q0P = accounts[5]
//		const uint256CdfAJ6V = await ReviveEJwWzjY.recoverERC20.call(uintwuGboEl, {from: accounts[5]});
//		const uint256JY97IYp = await ReviveEJwWzjY.totalBalanceOf.call(addressv1m7q0P, {from: accounts[3]});

		await expect(ReviveEJwWzjY.recoverERC20.call(uintwuGboEl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivemfr6M7v = await Revive.new({from: accounts[4]});
		const uintpEGa0jv = BigInt("1427")
		const addressCHtJGEZ = accounts[5]
		const bytePnnDU3 = "0x07130d09160801020c1d1d020c20090d031b050e0a1217030e040e0e1105041c"
		const addressRqsm02L = accounts[3]
		const uinth3pw1Ty = BigInt("94")
		const uintyfWqbzm = BigInt("560")
		const byteyX5WSlr = "0x1a130416120d1510170f0e0903031f1805140d0b051e0e070313191419071c09"
		const addresse8LHMNN = accounts[2]
		const uintB4Iy04H = BigInt("24")
		const addressmmkHHO = accounts[4]
		const uintLSl0VW0 = BigInt("268")
		const addressgDeS9P0 = accounts[3]
		const uintt7SXSbJ = BigInt("1940")
		const byteeg2gqBJ = "0x1a100c110f140c0b080c081b080b1f050a1a10200c0e001c1d0c141c12021205"
		const boolUOFQyn = await Revivemfr6M7v.approve.call(addressCHtJGEZ, uintpEGa0jv, {from: accounts[4]});
		const uint256NfezkY6 = await Revivemfr6M7v.tokensLocked.call(addressRqsm02L, bytePnnDU3, {from: accounts[0]});
//		const uint256lQUL0XN = await Revivemfr6M7v.recoverERC20.call(uinth3pw1Ty, {from: accounts[1]});
//		const uint256rRrMtxc = await Revivemfr6M7v.tokensLockedAtTime.call(addresse8LHMNN, byteyX5WSlr, uintyfWqbzm, {from: accounts[1]});
//		const boolFcIvnhs = await Revivemfr6M7v.increaseAllowance.call(addressmmkHHO, uintB4Iy04H, {from: accounts[4]});
//		const boolB0AS86 = await Revivemfr6M7v.approve.call(addressgDeS9P0, uintLSl0VW0, {from: accounts[4]});
//		const boolQJGBzm = await Revivemfr6M7v.extendLock.call(byteeg2gqBJ, uintt7SXSbJ, {from: accounts[2]});

		assert.equal(boolUOFQyn, true)
		assert.equal(uint256NfezkY6, BigInt("0"))
		await expect(Revivemfr6M7v.recoverERC20.call(uinth3pw1Ty, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqsHRy4D = await Revive.new({from: accounts[2]});
		const addresskna1s22 = accounts[3]
		const uintlJM3873 = BigInt("52")
		const uint256AnsRFpR = await ReviveqsHRy4D.unlock.call(addresskna1s22, {from: accounts[2]});
//		const uint256gQT6Zn8 = await ReviveqsHRy4D.recoverERC20.call(uintlJM3873, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256AnsRFpR, BigInt("0"))
		await expect(ReviveqsHRy4D.recoverERC20.call(uintlJM3873, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejVL4741 = await Revive.new({from: accounts[0]});
		const addressyJ4CD59 = accounts[0]
		const uintXQgiD6G = BigInt("894")
		const uintkoF9Vs0 = BigInt("1225")
		const uintNoMwOSC = BigInt("1432")
		const bytefYuVQKg = "0x051a130d1d05071e1b06110b0e1b09031f021905111f1d1a010a0a0b1404010a"
		const uint256jHqrxZl = await RevivejVL4741.unlock.call(addressyJ4CD59, {from: accounts[0]});
//		const uint256kr5Fo9G = await RevivejVL4741.recoverERC20.call(uintXQgiD6G, {from: accounts[0]});
//		const boolr8tO73n = await RevivejVL4741.lock.call(bytefYuVQKg, uintNoMwOSC, uintkoF9Vs0, {from: accounts[4]});

		assert.equal(uint256jHqrxZl, BigInt("0"))
		await expect(RevivejVL4741.recoverERC20.call(uintXQgiD6G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejVL4741 = await Revive.new({from: accounts[0]});
		const uintE0nmBvu = BigInt("806")
		const uintF0tUSoG = BigInt("1376")
		const uintLHjwtWX = BigInt("1609")
		const bytefdlv9eZ = "0x09130012111c0e03180807181a0c11040a15181d171a0411051d071212080808"
		const addressyekj9B = accounts[2]
//		const uint256xWgVZUH = await RevivejVL4741.recoverERC20.call(uintE0nmBvu, {from: accounts[4]});
//		const boolQLQFO9z = await RevivejVL4741.transferWithLock.call(addressyekj9B, bytefdlv9eZ, uintLHjwtWX, uintF0tUSoG, {from: accounts[3]});

		await expect(RevivejVL4741.recoverERC20.call(uintE0nmBvu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejVL4741 = await Revive.new({from: accounts[0]});
		const uintAr7frxA = BigInt("1225")
		const uinttpXHptu = BigInt("1432")
		const bytemTIIOxF = "0x051a130d1dffffffff071c1b06110b0e1b09031f021905111f1d1a010a0a0b1404010a"
		const addressXDjY8CU = accounts[5]
		const byteFtp67L = "0x0002070b14030306170c0a1c0111190e01131715040c1106121c1c1d07071712"
		const addressmxqoWR3 = accounts[5]
//		const boolr8tO73n = await RevivejVL4741.lock.call(bytemTIIOxF, uinttpXHptu, uintAr7frxA, {from: accounts[4]});
//		const addressGkXPiX7 = await RevivejVL4741.transferOwnership.call(addressXDjY8CU, {from: accounts[0]});
//		const uint256AZNb3iW = await RevivejVL4741.tokensUnlockable.call(addressmxqoWR3, byteFtp67L, {from: accounts[4]});

		await expect(RevivejVL4741.lock.call(bytemTIIOxF, uinttpXHptu, uintAr7frxA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEJwWzjY = await Revive.new({from: accounts[4]});
		const uintbyiIEqC = BigInt("1791")
		const uinta2zFvbM = BigInt("2016")
		const bytebrFYKUP = "0x04090d0b11070f07080d1b191518111f02100c04100a0f011f010c190b09181b"
//		const uint256UPNkt1B = await ReviveEJwWzjY.recoverERC20.call(uintbyiIEqC, {from: accounts[2]});
//		const boolr3IcDVz = await ReviveEJwWzjY.increaseLockAmount.call(bytebrFYKUP, uinta2zFvbM, {from: accounts[4]});

		await expect(ReviveEJwWzjY.recoverERC20.call(uintbyiIEqC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekdVD0h8 = await Revive.new({from: accounts[3]});
		const uintQ5VWUxP = BigInt("1883")
		const uintma4hu8X = BigInt("17")
		const byteCgHJjc3 = "0x120f1e04041b0214111a0c111c0d0c1c191a080d170913141f011219071b1019"
		const addressnlPNhBI = accounts[1]
		const uintMOArYj = BigInt("1267")
		const addressL6IyUTe = accounts[4]
		const uintgPDlXZZ = BigInt("1109")
		const uintqDsQnDW = BigInt("1203")
		const byteGIcmfON = "0x1713130815080c1c06060e0e1709161913070219010d000f050c0a16111e0d02"
//		const uint256EkKDBsQ = await RevivekdVD0h8.recoverERC20.call(uintQ5VWUxP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HYJ9bXB = await RevivekdVD0h8.tokensLockedAtTime.call(addressnlPNhBI, byteCgHJjc3, uintma4hu8X, {from: accounts[4]});
//		const boollW2JDof = await RevivekdVD0h8.approve.call(addressL6IyUTe, uintMOArYj, {from: accounts[1]});
//		const boolYzLkm50 = await RevivekdVD0h8.lock.call(byteGIcmfON, uintqDsQnDW, uintgPDlXZZ, {from: accounts[1]});

		await expect(RevivekdVD0h8.recoverERC20.call(uintQ5VWUxP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejVL4741 = await Revive.new({from: accounts[0]});
		const uintINX6k5s = BigInt("1711")
		const uintECVsq7C = BigInt("1376")
		const uintos7iBPe = BigInt("1608")
		const byteg6W7lSW = "0x09130012111c0e03180807181a0c11040a15181d171a0411051d071212080808"
		const addresstiBYN3J = accounts[2]
//		const uint256NU5i8Go = await RevivejVL4741.recoverERC20.call(uintINX6k5s, {from: accounts[1]});
//		const boolQLQFO9z = await RevivejVL4741.transferWithLock.call(addresstiBYN3J, byteg6W7lSW, uintos7iBPe, uintECVsq7C, {from: accounts[3]});

		await expect(RevivejVL4741.recoverERC20.call(uintINX6k5s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEJwWzjY = await Revive.new({from: accounts[4]});
		const byteRRpX1Vh = "0x0d140911130c04140b0d181c1a01060d05100f161c161a13081114111e120912"
		const addressMOXM6kt = accounts[0]
		const addressH04mHE7 = accounts[5]
		const uintBQBgTR = BigInt("1935")
		const uint256xymybQ = await ReviveEJwWzjY.tokensLocked.call(addressMOXM6kt, byteRRpX1Vh, {from: accounts[1]});
		const uint256JY97IYp = await ReviveEJwWzjY.totalBalanceOf.call(addressH04mHE7, {from: accounts[3]});
//		const uint256ipuldXN = await ReviveEJwWzjY.recoverERC20.call(uintBQBgTR, {from: accounts[2]});

		assert.equal(uint256JY97IYp, BigInt("0"))
		assert.equal(uint256xymybQ, BigInt("0"))
		await expect(ReviveEJwWzjY.recoverERC20.call(uintBQBgTR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})