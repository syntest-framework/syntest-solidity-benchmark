const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const addressbhlT2hB = accounts[3]
		const byteQMIIYt6 = "0x121f030f1a0916161a031307171718141c071504150c1a030a1b09070c150619"
		const address06O0gL = accounts[0]
		const uintOfDuBd = BigInt("1501")
		const bytebm0UDwz = "0x07201a09021a022019190b020a131b0c0d1e190e031a00140b1904010a091117"
		const uintyJDHeay = BigInt("1935")
		const addressvXddkVX = accounts[3]
		const uint256ljZElvY = await RevivedbKJeKk.totalBalanceOf.call(addressbhlT2hB, {from: accounts[5]});
		const uint256Z1HubRR = await RevivedbKJeKk.tokensUnlockable.call(address06O0gL, byteQMIIYt6, {from: accounts[3]});
		const addressASLSDIw = await RevivedbKJeKk.owner.call({from: accounts[3]});
//		const boollTYRNM = await RevivedbKJeKk.increaseLockAmount.call(bytebm0UDwz, uintOfDuBd, {from: accounts[1]});
//		const booleEMEBY = await RevivedbKJeKk.increaseAllowance.call(addressvXddkVX, uintyJDHeay, {from: accounts[2]});

		assert.equal(addressASLSDIw, 0x6D34c67CFb04134Ba411332c67E3CFF035c15EAD)
		assert.equal(uint256Z1HubRR, BigInt("0"))
		assert.equal(uint256ljZElvY, BigInt("3000000000000000000000000000"))
		await expect(RevivedbKJeKk.increaseLockAmount.call(bytebm0UDwz, uintOfDuBd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegBJw012 = await Revive.new({from: accounts[0]});
		const uintkoIA1Ce = BigInt("1724")
		const addressZRHKwEn = accounts[3]
		const addressujmKiuU = accounts[2]
//		const uint256SNJuBRT = await RevivegBJw012.recoverERC20.call(uintkoIA1Ce, {from: accounts[3]});
//		await RevivegBJw012.onlyOwner.call({from: accounts[2]});
//		const uint256ZkbEXyI = await RevivegBJw012.allowance.call(addressujmKiuU, addressZRHKwEn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivegBJw012.recoverERC20.call(uintkoIA1Ce, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewiruCyn = await Revive.new({from: accounts[2]});
		const uinto6NidF = BigInt("62")
		const addressjyIPax = "0x0000000000000000000000000000000000000001"
		const addresshbvsbEg = accounts[4]
		const addressigG14DO = accounts[2]
		const addressxh9x9Fg = accounts[5]
//		const boolQhMyEd = await RevivewiruCyn.transfer.call(addressjyIPax, uinto6NidF, {from: accounts[0]});
//		const uint256H1Ndczr = await RevivewiruCyn.allowance.call(addressigG14DO, addresshbvsbEg, {from: accounts[1]});
//		const uint256b7yud0G = await RevivewiruCyn.unlock.call(addressxh9x9Fg, {from: accounts[5]});
//		await RevivewiruCyn.renounceOwnership.call({from: accounts[1]});

		await expect(RevivewiruCyn.transfer.call(addressjyIPax, uinto6NidF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexFAaOvD = await Revive.new({from: accounts[3]});
		const addressgbNDexC = accounts[5]
		const byteUzSMro0 = "0x170d1003141d061a1519031816021020021918030c020411040e12050c161a1c"
		const addressoj3LGxO = "0x0000000000000000000000000000000000000001"
		const addressMO05Va8 = await RevivexFAaOvD.owner.call({from: accounts[3]});
//		const addressWBvgvIL = await RevivexFAaOvD.transferOwnership.call(addressgbNDexC, {from: accounts[1]});
//		const uint256AAVNhcl = await RevivexFAaOvD.tokensUnlockable.call(addressoj3LGxO, byteUzSMro0, {from: accounts[0]});
//		const addresscwk5UiA = await RevivexFAaOvD.owner.call({from: accounts[3]});

		assert.equal(addressMO05Va8, 0x6D34c67CFb04134Ba411332c67E3CFF035c15EAD)
		await expect(RevivexFAaOvD.transferOwnership.call(addressgbNDexC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivee2cEoHT = await Revive.new({from: accounts[4]});
//		await Revivee2cEoHT.onlyOwner.call({from: accounts[1]});
//		const boolH3jfjnu = await Revivee2cEoHT.isOwner.call({from: accounts[3]});
//		const addressueOuly6 = await Revivee2cEoHT.owner.call({from: accounts[2]});

		await expect(Revivee2cEoHT.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCx4fW6g = await Revive.new({from: accounts[1]});
		const uinthgQBfhv = BigInt("1403")
		const uintUkBlKxw = BigInt("996")
		const addressanLCOYp = accounts[1]
		const addressC4y2KHS = accounts[4]
		const uintnRpeDx7 = BigInt("619")
		const bytewp4Whj = "0x05090515081c0e200e1309091807181d0b0413081a01190801101a130d1d0f0a"
		const uinta98ds4n = BigInt("1866")
		const uintEcQflrE = BigInt("1705")
		const byteUyUFXS = "0x131a131410191a07180d0f1c070a11020c0518121a0001120f0e170f17041b14"
		const addressshB3wyn = accounts[4]
//		const uint256Y9mQsXH = await ReviveCx4fW6g.recoverERC20.call(uinthgQBfhv, {from: accounts[0]});
//		const boolmvUHZbo = await ReviveCx4fW6g.isOwner.call({from: accounts[0]});
//		const uint256ko69Tq2 = await ReviveCx4fW6g.totalSupply.call({from: accounts[3]});
//		const boolQJHhwVS = await ReviveCx4fW6g.transferFrom.call(addressC4y2KHS, addressanLCOYp, uintUkBlKxw, {from: accounts[2]});
//		const booljGdpDNw = await ReviveCx4fW6g.extendLock.call(bytewp4Whj, uintnRpeDx7, {from: accounts[2]});
//		const booliJNrqME = await ReviveCx4fW6g.transferWithLock.call(addressshB3wyn, byteUyUFXS, uintEcQflrE, uinta98ds4n, {from: accounts[0]});

		await expect(ReviveCx4fW6g.recoverERC20.call(uinthgQBfhv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYjHNYBP = await Revive.new({from: accounts[3]});
		const addressroub9Vq = accounts[4]
		const addressuVm12w = accounts[2]
		const uintTkt8ypr = BigInt("1741")
		const byte95Golo = "0x1a100711081d161413160a171f111f1a060e001e1001181d0816111617030800"
		const uint5hmnHm = BigInt("1316")
		const addressfo1Egq1 = accounts[2]
		const uint256UWvtCTn = await ReviveYjHNYBP.allowance.call(addressuVm12w, addressroub9Vq, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJ50tGP9 = await ReviveYjHNYBP.increaseLockAmount.call(byte95Golo, uintTkt8ypr, {from: accounts[3]});
//		await ReviveYjHNYBP.renounceOwnership.call({from: accounts[5]});
//		const boolRIHg2m = await ReviveYjHNYBP.increaseAllowance.call(addressfo1Egq1, uint5hmnHm, {from: accounts[4]});

		assert.equal(uint256UWvtCTn, BigInt("0"))
		await expect(ReviveYjHNYBP.increaseLockAmount.call(byte95Golo, uintTkt8ypr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintIBIHdDD = BigInt("1561")
		const uintOGH3Vgw = BigInt("708")
		const byteBBAa16Q = "0x040c0a140c140e110619060e071a060a1a0d1612041b01200204080515170201"
		const addresss6bIXMk = accounts[1]
		const uint256j8dgnAD = await Revivez5ofx7F.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const booltAe5QUc = await Revivez5ofx7F.transferWithLock.call(addresss6bIXMk, byteBBAa16Q, uintOGH3Vgw, uintIBIHdDD, {from: accounts[0]});
//		const addresshaa55gX = await Revivez5ofx7F.owner.call({from: accounts[5]});

		assert.equal(uint256j8dgnAD, BigInt("3000000000000000000000000000"))
		await expect(Revivez5ofx7F.transferWithLock.call(addresss6bIXMk, byteBBAa16Q, uintOGH3Vgw, uintIBIHdDD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const addressJhs5LJo = accounts[3]
		const uintgcK2kH = BigInt("501")
		const addressR7xdpo = accounts[2]
		const addresscSOvvKQ = accounts[1]
		const byteMIQlpK = "0x121f030f1a0916161a031307171718141c071504150c1a030a1b09070c150619"
		const addressNXt7QoR = accounts[0]
		const uintbrppIet = BigInt("1501")
		const byteB9qFBq = "0x07201a09021a022019190b020a131b0c0d1e190e031a00140b1904010a091117"
		const uintAvhRR7w = BigInt("1935")
		const addressXCtUnc = accounts[3]
		const uint256ljZElvY = await RevivedbKJeKk.totalBalanceOf.call(addressJhs5LJo, {from: accounts[5]});
//		const boolZjgfmDy = await RevivedbKJeKk.transferFrom.call(addresscSOvvKQ, addressR7xdpo, uintgcK2kH, {from: accounts[2]});
//		const uint256Z1HubRR = await RevivedbKJeKk.tokensUnlockable.call(addressNXt7QoR, byteMIQlpK, {from: accounts[3]});
//		const addressASLSDIw = await RevivedbKJeKk.owner.call({from: accounts[3]});
//		const boollTYRNM = await RevivedbKJeKk.increaseLockAmount.call(byteB9qFBq, uintbrppIet, {from: accounts[1]});
//		const booleEMEBY = await RevivedbKJeKk.increaseAllowance.call(addressXCtUnc, uintAvhRR7w, {from: accounts[2]});

		assert.equal(uint256ljZElvY, BigInt("3000000000000000000000000000"))
		await expect(RevivedbKJeKk.transferFrom.call(addresscSOvvKQ, addressR7xdpo, uintgcK2kH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetYgYemW = await Revive.new({from: accounts[5]});
		const uintMkGBk3Y = BigInt("9")
		const addressybXvJkB = accounts[4]
		const addressMPTURXY = accounts[4]
		const addresstlJvJoU = accounts[1]
		const boolsenUP9o = await RevivetYgYemW.increaseAllowance.call(addressybXvJkB, uintMkGBk3Y, {from: accounts[3]});
		const uint256zOhcXJU = await RevivetYgYemW.unlock.call(addressMPTURXY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MlRRS9I = await RevivetYgYemW.balanceOf.call(addresstlJvJoU, {from: accounts[3]});

		assert.equal(boolsenUP9o, true)
		assert.equal(uint256MlRRS9I, BigInt("0"))
		assert.equal(uint256zOhcXJU, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintMoJm2Ds = BigInt("662")
		const addressg8ChTqp = accounts[1]
		const uintAURaRUP = BigInt("1448")
		const byteTWPwWR1 = "0x03170d191d1b10041114150f0b060f01141211021b0c05090e110d1e09170d0e"
		const byteRHjeVb7 = "0x170b0b09010e0a0111011a10171b1b050c0000190c101a1e0d0c080c04091009"
		const addressw1hdtuY = accounts[2]
//		const boolte7Iyv = await Revivez5ofx7F.decreaseAllowance.call(addressg8ChTqp, uintMoJm2Ds, {from: accounts[4]});
//		const uint256j8dgnAD = await Revivez5ofx7F.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolbkcrUTL = await Revivez5ofx7F.increaseLockAmount.call(byteTWPwWR1, uintAURaRUP, {from: accounts[1]});
//		const uint256P7P9Wyg = await Revivez5ofx7F.tokensUnlockable.call(addressw1hdtuY, byteRHjeVb7, {from: accounts[5]});
//		const addresshaa55gX = await Revivez5ofx7F.owner.call({from: accounts[5]});

		await expect(Revivez5ofx7F.decreaseAllowance.call(addressg8ChTqp, uintMoJm2Ds, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintajvjV1 = BigInt("198")
		const bytelizFWx5 = "0x0b110c181a0c04041a020716171e191715121b1b11031f1d0e1c191302011d05"
		const addressirftKka = accounts[2]
//		const boolNuDNs0x = await Revivez5ofx7F.extendLock.call(bytelizFWx5, uintajvjV1, {from: accounts[4]});
//		const uint2564pD0VF = await Revivez5ofx7F.totalBalanceOf.call(addressirftKka, {from: accounts[4]});

		await expect(Revivez5ofx7F.extendLock.call(bytelizFWx5, uintajvjV1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYfRpXFD = await Revive.new({from: accounts[3]});
		const address0I0dAx = accounts[0]
		const uintps5yFw = BigInt("135")
		const addressboafkAW = "0x0000000000000000000000000000000000000001"
		const uint256QeuvsSF = await ReviveYfRpXFD.unlock.call(address0I0dAx, {from: accounts[3]});
		const boolOZo2G3R = await ReviveYfRpXFD.transfer.call(addressboafkAW, uintps5yFw, {from: accounts[3]});
		const boolVC6nPI2 = await ReviveYfRpXFD.isOwner.call({from: accounts[4]});

		assert.equal(boolOZo2G3R, true)
		assert.equal(boolVC6nPI2, false)
		assert.equal(uint256QeuvsSF, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressRYdhGBv = accounts[3]
		const uinttVFQc8N = BigInt("1395")
		const uintTmOHCse = BigInt("650")
		const byteCan0O4R = "0x1b0f161f111d190e04141d1e0f1e05190c0307071503111c160b141c1c11190b"
		const uintN8TY5Oq = BigInt("626")
		const uintcwCTW3k = BigInt("1798")
		const bytehLmgMh9 = "0x1e091e091e0103120c1301010e092014021a0a16040209170b17070219121104"
		const uint2564pD0VF = await Revivez5ofx7F.totalBalanceOf.call(addressRYdhGBv, {from: accounts[4]});
//		const boolpFamSOO = await Revivez5ofx7F.lock.call(byteCan0O4R, uintTmOHCse, uinttVFQc8N, {from: accounts[3]});
//		const boolDBs3VLi = await Revivez5ofx7F.lock.call(bytehLmgMh9, uintcwCTW3k, uintN8TY5Oq, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256j8dgnAD = await Revivez5ofx7F.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2564pD0VF, BigInt("0"))
		await expect(Revivez5ofx7F.lock.call(byteCan0O4R, uintTmOHCse, uinttVFQc8N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveaTmYDN9 = await Revive.new({from: accounts[1]});
		const addressF8UpWJw = accounts[5]
		const uintqZ9exaz = BigInt("1517")
		const byteJCnbqXq = "0x00190e001919110712090d050b0e01080e0314041b160f0b181d0a1f180e1a15"
		const addressNYnhiEO = accounts[4]
		const uintWHuqI1D = BigInt("2009")
		const byteoBEexUR = "0x1706071013091d100a1f070e070b0e111e16090402010c1e0414011e121d1806"
		const addressfdZFIqs = await ReviveaTmYDN9.owner.call({from: accounts[3]});
		const uint256dPywkl = await ReviveaTmYDN9.unlock.call(addressF8UpWJw, {from: accounts[1]});
		const boolBZRwdtM = await ReviveaTmYDN9.isOwner.call({from: accounts[3]});
		const uint2567JErhM = await ReviveaTmYDN9.tokensLockedAtTime.call(addressNYnhiEO, byteJCnbqXq, uintqZ9exaz, {from: accounts[2]});
//		const booleOMpPya = await ReviveaTmYDN9.extendLock.call(byteoBEexUR, uintWHuqI1D, {from: accounts[2]});

		assert.equal(addressfdZFIqs, 0xe78fB65e272630C285c3BcB4d8826C7Abc8d5e26)
		assert.equal(boolBZRwdtM, false)
		assert.equal(uint2567JErhM, BigInt("0"))
		assert.equal(uint256dPywkl, BigInt("0"))
		await expect(ReviveaTmYDN9.extendLock.call(byteoBEexUR, uintWHuqI1D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveq23SAo = await Revive.new({from: accounts[4]});
		const addressrwCBtla = accounts[2]
		const addressdCNHjGp = accounts[1]
		const uintTaZc1wT = BigInt("469")
		const byteDCqO7H5 = "0x0b03030417041f03051f200e0d02041a0308191c1c031f161008061e1900141c"
		const bool8g9Qij = await Reviveq23SAo.isOwner.call({from: accounts[3]});
		const uint256ZYwrrmA = await Reviveq23SAo.balanceOf.call(addressrwCBtla, {from: accounts[5]});
		const uint256777otD = await Reviveq23SAo.getUnlockableTokens.call(addressdCNHjGp, {from: accounts[1]});
//		const boolAnKsIeT = await Reviveq23SAo.increaseLockAmount.call(byteDCqO7H5, uintTaZc1wT, {from: accounts[1]});

		assert.equal(bool8g9Qij, false)
		assert.equal(uint256777otD, BigInt("0"))
		assert.equal(uint256ZYwrrmA, BigInt("0"))
		await expect(Reviveq23SAo.increaseLockAmount.call(byteDCqO7H5, uintTaZc1wT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveoayKlvC = await Revive.new({from: accounts[1]});
		const uintpsxV1s = BigInt("644")
		const uinteTQuorP = BigInt("744")
		const byteYel7prB = "0x0c101b15120b0e121d1815150b14121f1817081c0d1f1912091c0d120f1b150d"
		const addresst1Fjur = accounts[0]
//		const uint256ENo40YV = await ReviveoayKlvC.recoverERC20.call(uintpsxV1s, {from: accounts[4]});
//		const boolodzorfU = await ReviveoayKlvC.increaseLockAmount.call(byteYel7prB, uinteTQuorP, {from: accounts[2]});
//		const uint256zXaTVQZ = await ReviveoayKlvC.totalBalanceOf.call(addresst1Fjur, {from: accounts[2]});
//		await ReviveoayKlvC.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveoayKlvC.recoverERC20.call(uintpsxV1s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressz4nP5PO = accounts[3]
		const uintqGJUal = BigInt("172")
		const addressRn4249w = "0x0000000000000000000000000000000000000001"
		const uint2564pD0VF = await Revivez5ofx7F.totalBalanceOf.call(addressz4nP5PO, {from: accounts[4]});
		const boolC6NAl49 = await Revivez5ofx7F.approve.call(addressRn4249w, uintqGJUal, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolC6NAl49, true)
		assert.equal(uint2564pD0VF, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivetYgYemW = await Revive.new({from: accounts[5]});
		const uintAWcz63 = BigInt("581")
		const byteeEC4mj4 = "0x12101a0915ffffffff17091115131b01131200151e0506181c121e1d17111219081715"
		const addresspSKC8y = accounts[0]
		const addressKq65O76 = accounts[4]
		const addressNi2Wgnb = accounts[4]
		const addresso48f5nh = accounts[2]
//		const uint256cug2RcV = await RevivetYgYemW.tokensLockedAtTime.call(addresspSKC8y, byteeEC4mj4, uintAWcz63, {from: accounts[4]});
//		const uint256dRMJ0Sh = await RevivetYgYemW.unlock.call(addressKq65O76, {from: accounts[1]});
//		const uint256zOhcXJU = await RevivetYgYemW.unlock.call(addressNi2Wgnb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256MlRRS9I = await RevivetYgYemW.balanceOf.call(addresso48f5nh, {from: accounts[3]});

		await expect(RevivetYgYemW.tokensLockedAtTime.call(addresspSKC8y, byteeEC4mj4, uintAWcz63, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressXo5wvvC = accounts[4]
		const uintGy2W4o = BigInt("626")
		const uintuhYd4Q = BigInt("1798")
		const byteUjPG91 = "0x1e091e091e0103120c13ffffffff010e092014021a0a16040209170b17070219121104"
		const uint2566jt2nA = await Revivez5ofx7F.getUnlockableTokens.call(addressXo5wvvC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDBs3VLi = await Revivez5ofx7F.lock.call(byteUjPG91, uintuhYd4Q, uintGy2W4o, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256j8dgnAD = await Revivez5ofx7F.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2566jt2nA, BigInt("0"))
		await expect(Revivez5ofx7F.lock.call(byteUjPG91, uintuhYd4Q, uintGy2W4o, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivelTll5Vs = await Revive.new({from: accounts[2]});
		const uintFuqfLFc = BigInt("1389")
		const uintMbJoY0c = BigInt("1285")
		const uintxbnWhEM = BigInt("309")
		const byteHjvIly1 = "0x0c110a030d1111192008190709151c0b00191a1d11141112150c0e0608200201"
		const addressvIuyaVc = accounts[3]
		const uintlVaD6HC = BigInt("1575")
		const bytebDR5cOC = "0x0619120f171b010a0e181b0402191e0205001c0c11070100020a061d14090b08"
		const addresserii52i = accounts[4]
		const addressvsafhxK = accounts[2]
//		const uint256rGHlKOr = await RevivelTll5Vs.recoverERC20.call(uintFuqfLFc, {from: accounts[4]});
//		const boolGaI1Mbv = await RevivelTll5Vs.transferWithLock.call(addressvIuyaVc, byteHjvIly1, uintxbnWhEM, uintMbJoY0c, {from: accounts[0]});
//		const uint256GcaOUf3 = await RevivelTll5Vs.tokensLockedAtTime.call(addresserii52i, bytebDR5cOC, uintlVaD6HC, {from: accounts[5]});
//		const addressss35ePT = await RevivelTll5Vs.transferOwnership.call(addressvsafhxK, {from: accounts[2]});

		await expect(RevivelTll5Vs.recoverERC20.call(uintFuqfLFc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintFa2un4Q = BigInt("876")
		const addressx5I5WcZ = accounts[2]
		const addressa9zTHWY = accounts[4]
		const byteOmoWVS6 = "0x02151d0f0d10040b071b120b1b010c1b020b16041e1518001d1500160603040a"
		const addressUMIzoSX = accounts[3]
//		const addressqSdpwZ5 = await Revivez5ofx7F.recoverERC20.call(addressx5I5WcZ, uintFa2un4Q, {from: accounts[4]});
//		const uint2566jt2nA = await Revivez5ofx7F.getUnlockableTokens.call(addressa9zTHWY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256CkOhdp6 = await Revivez5ofx7F.tokensUnlockable.call(addressUMIzoSX, byteOmoWVS6, {from: accounts[0]});
//		const boolSyfHDFv = await Revivez5ofx7F.isOwner.call({from: accounts[0]});
//		const uint256j8dgnAD = await Revivez5ofx7F.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Revivez5ofx7F.recoverERC20.call(addressx5I5WcZ, uintFa2un4Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveyEURBYO = await Revive.new({from: accounts[4]});
		const uintXoZCu2i = BigInt("1790")
		const addressKmFi6xq = "0x0000000000000000000000000000000000000001"
		const uintPMiRRkJ = BigInt("920")
		const addressWtVW6tw = "0x0000000000000000000000000000000000000001"
		const addressU2CF8vu = accounts[4]
		const uintkAyU8tO = BigInt("337")
		const addressKR4goa = accounts[4]
		const boolmKyRBZe = await ReviveyEURBYO.approve.call(addressKmFi6xq, uintXoZCu2i, {from: accounts[5]});
//		const uint256n6e4IkA = await ReviveyEURBYO.recoverERC20.call(uintPMiRRkJ, {from: accounts[4]});
//		const addressdPQ2pzI = await ReviveyEURBYO.transferOwnership.call(addressWtVW6tw, {from: accounts[5]});
//		const uint256ppP6SV8 = await ReviveyEURBYO.unlock.call(addressU2CF8vu, {from: accounts[1]});
//		const addressKN2dBE7 = await ReviveyEURBYO.owner.call({from: accounts[2]});
//		const boolgv6NUZm = await ReviveyEURBYO.increaseAllowance.call(addressKR4goa, uintkAyU8tO, {from: accounts[3]});

		assert.equal(boolmKyRBZe, true)
		await expect(ReviveyEURBYO.recoverERC20.call(uintPMiRRkJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXTQB8I0 = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const byteGVSiDNZ = "0x13100d050a061f09110a1f171208141517021f190306030d07151a030c180d08"
		const addressNY0RXcj = accounts[3]
		const addresskFTxzk = accounts[2]
		const addressOHmLVeB = accounts[2]
		const addressxE2Auj9 = await ReviveXTQB8I0.owner.call({from: accounts[5]});
		const uint2567Uvlgt = await ReviveXTQB8I0.tokensUnlockable.call(addressNY0RXcj, byteGVSiDNZ, {from: accounts[4]});
		await ReviveXTQB8I0.renounceOwnership.call({from: accounts[2]});
		const addressao6kOz0 = await ReviveXTQB8I0.transferOwnership.call(addresskFTxzk, {from: accounts[3]});
		const uint256OaWV1Sy = await ReviveXTQB8I0.unlock.call(addressOHmLVeB, {from: accounts[1]});
		await ReviveXTQB8I0.onlyOwner.call({from: accounts[1]});
	});

	it('test for Revive', async () => {
		const RevivelIW7dIP = await Revive.new({from: accounts[4]});
		const bytekEXn2Ln = "0x1a19130e0d16061010021d0d07190a1e08181a020708060b1604030b0b021c0b"
		const addressDtGRwe0 = accounts[0]
		const addressRyDciEL = "0x0000000000000000000000000000000000000001"
		const addressaYP2rOE = await RevivelIW7dIP.owner.call({from: accounts[4]});
		const uint256VlLASo = await RevivelIW7dIP.tokensUnlockable.call(addressDtGRwe0, bytekEXn2Ln, {from: accounts[4]});
		const addressKik0048 = await RevivelIW7dIP.transferOwnership.call(addressRyDciEL, {from: accounts[4]});

		assert.equal(addressaYP2rOE, 0x1b816A166fD9582Ea57930AE2d78fc64313F1Eda)
		assert.equal(uint256VlLASo, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const bytecZw4Mhs = "0x041d1a0d13130b1f091e1a0f130b091b0d05161f01090a0a00171b0617030a17"
		const addressdtajWJ = "0x0000000000000000000000000000000000000001"
		const addressuskk2ro = accounts[4]
		const uintEeqyEQC = BigInt("879")
		const addressZheVfpy = accounts[2]
		const uint256UzpSRqR = await Revivez5ofx7F.tokensUnlockable.call(addressdtajWJ, bytecZw4Mhs, {from: accounts[5]});
		const uint256KquQX00 = await Revivez5ofx7F.getUnlockableTokens.call(addressuskk2ro, {from: accounts[1]});
//		const uint256eVou8gj = await Revivez5ofx7F.recoverERC20.call(uintEeqyEQC, {from: accounts[0]});
//		const uint2564pD0VF = await Revivez5ofx7F.totalBalanceOf.call(addressZheVfpy, {from: accounts[4]});

		assert.equal(uint256KquQX00, BigInt("0"))
		assert.equal(uint256UzpSRqR, BigInt("0"))
		await expect(Revivez5ofx7F.recoverERC20.call(uintEeqyEQC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressrSj9gbE = accounts[5]
		const uintc1ui6vg = BigInt("1814")
		const uintAolTg74 = BigInt("1594")
		const bytejdMhV8B = "0x1e100f0d051c181d1911011405071a0c1018081a1207200f0b0e0a0214101909"
		const addressW2Er3le = accounts[4]
		const uint2566jt2nA = await Revivez5ofx7F.getUnlockableTokens.call(addressrSj9gbE, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GNK2Wjd = await Revivez5ofx7F.recoverERC20.call(uintc1ui6vg, {from: accounts[1]});
//		const uint256zU4YD9l = await Revivez5ofx7F.tokensLockedAtTime.call(addressW2Er3le, bytejdMhV8B, uintAolTg74, {from: accounts[3]});

		assert.equal(uint2566jt2nA, BigInt("0"))
		await expect(Revivez5ofx7F.recoverERC20.call(uintc1ui6vg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addresssjQ5tRX = accounts[4]
		const byteRl3l8aw = "0x201f0c121104060c0e1211090415191c040b021c01061d0a130a1a111f040c0d"
		const addressPX9FxBr = accounts[3]
		const uintFteRKum = BigInt("1561")
		const uintXU7jHR8 = BigInt("708")
		const byteihZvuIe = "0x040c0a140c140f110619060e071a060a1a0d1612fffffffd1b01200204080515170201"
		const addressfvQzaCL = accounts[1]
		const addressMZTnrzV = "0x0000000000000000000000000000000000000001"
		const uint256xht3ziF = await Revivez5ofx7F.unlock.call(addresssjQ5tRX, {from: accounts[1]});
		const uint256lxyVzFA = await Revivez5ofx7F.tokensUnlockable.call(addressPX9FxBr, byteRl3l8aw, {from: accounts[3]});
//		const booltAe5QUc = await Revivez5ofx7F.transferWithLock.call(addressfvQzaCL, byteihZvuIe, uintXU7jHR8, uintFteRKum, {from: accounts[0]});
//		const uint256oHj9miZ = await Revivez5ofx7F.unlock.call(addressMZTnrzV, {from: accounts[3]});

		assert.equal(uint256lxyVzFA, BigInt("0"))
		assert.equal(uint256xht3ziF, BigInt("0"))
		await expect(Revivez5ofx7F.transferWithLock.call(addressfvQzaCL, byteihZvuIe, uintXU7jHR8, uintFteRKum, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const addressfIJJNf1 = accounts[3]
		const uintGfhsWck = BigInt("730")
		const addressOPVs5W5 = accounts[5]
		const uintqnTirDE = BigInt("5")
		const byteXFV8jox = "0x190211031b1702140e03181508131d131807031b0e05100a051c0b1911180817"
		const addresskPJZVo8 = accounts[3]
		const byteqgycVfm = "0x121f030f1a0916161a031307171718141c071504150c1a030a1c09070c150619"
		const addressrUsYCN7 = accounts[0]
		const addressWp13jbc = accounts[4]
		const bytelEAEq40 = "0x17011302071d090d0a110a0b010d07181b1f0706120c031d0811060f15160318"
		const addresspAngf3S = accounts[1]
		const bytejODYgiO = "0x0e0b080a030d1c0113150a110a01060b1412041a0a120c0208141a061c070501"
		const addresst0sYT9N = accounts[3]
		const uint256ljZElvY = await RevivedbKJeKk.totalBalanceOf.call(addressfIJJNf1, {from: accounts[5]});
		const boolFoPcHU6 = await RevivedbKJeKk.increaseAllowance.call(addressOPVs5W5, uintGfhsWck, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YwMw4R = await RevivedbKJeKk.tokensLockedAtTime.call(addresskPJZVo8, byteXFV8jox, uintqnTirDE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Z1HubRR = await RevivedbKJeKk.tokensUnlockable.call(addressrUsYCN7, byteqgycVfm, {from: accounts[3]});
		const addressASLSDIw = await RevivedbKJeKk.owner.call({from: accounts[3]});
		const uint256pD8AZZ4 = await RevivedbKJeKk.balanceOf.call(addressWp13jbc, {from: accounts[3]});
		const uint256PtM7VGO = await RevivedbKJeKk.tokensUnlockable.call(addresspAngf3S, bytelEAEq40, {from: accounts[1]});
//		await RevivedbKJeKk.renounceOwnership.call({from: accounts[3]});
//		const uint256KTAFN0 = await RevivedbKJeKk.tokensUnlockable.call(addresst0sYT9N, bytejODYgiO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressASLSDIw, 0x6D34c67CFb04134Ba411332c67E3CFF035c15EAD)
		assert.equal(boolFoPcHU6, true)
		assert.equal(uint256PtM7VGO, BigInt("0"))
		assert.equal(uint256YwMw4R, BigInt("0"))
		assert.equal(uint256Z1HubRR, BigInt("0"))
		assert.equal(uint256ljZElvY, BigInt("3000000000000000000000000000"))
		assert.equal(uint256pD8AZZ4, BigInt("0"))
		await expect(RevivedbKJeKk.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintKhf96VZ = BigInt("660")
		const addressut7sMKZ = "0x0000000000000000000000000000000000000001"
		const uintqf4sJK = BigInt("369")
		const addressTM3sj2z = accounts[3]
		const addressgqOd9Vc = accounts[3]
//		const uint256prSNQXx = await Revivez5ofx7F.recoverERC20.call(uintKhf96VZ, {from: accounts[3]});
//		const addressYDldvZ2 = await Revivez5ofx7F.transferOwnership.call(addressut7sMKZ, {from: accounts[3]});
//		const boolI5jm8Jm = await Revivez5ofx7F.approve.call(addressTM3sj2z, uintqf4sJK, {from: accounts[3]});
//		const uint2564pD0VF = await Revivez5ofx7F.totalBalanceOf.call(addressgqOd9Vc, {from: accounts[4]});

		await expect(Revivez5ofx7F.recoverERC20.call(uintKhf96VZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressYBq3pE5 = accounts[4]
		const uintJRNzjUV = BigInt("1067")
		const uintK9xqG5W = BigInt("1910")
		const uintdCQVXrE = BigInt("1754")
		const bytek9FbOwp = "0x060813040d1a001014131a041d0d190a1614170a1b1f041012031212020e1409"
		const addressyUYIKqF = accounts[1]
		const uint2566jt2nA = await Revivez5ofx7F.getUnlockableTokens.call(addressYBq3pE5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256iec3DKZ = await Revivez5ofx7F.recoverERC20.call(uintJRNzjUV, {from: "0x0000000000000000000000000000000000000001"});
//		const booliQ7TY03 = await Revivez5ofx7F.transferWithLock.call(addressyUYIKqF, bytek9FbOwp, uintdCQVXrE, uintK9xqG5W, {from: accounts[1]});

		assert.equal(uint2566jt2nA, BigInt("0"))
		await expect(Revivez5ofx7F.recoverERC20.call(uintJRNzjUV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addresssjMiNic = accounts[4]
		const addressEBx4gWN = accounts[2]
		const uintkJRb00E = BigInt("198")
		const byteswQ0DIE = "0x0b110c181a0c04041a020716171e191715121b1b11031f1d0e1c191302fffffffc1d05"
		const uint256UGX0t6b = await Revivez5ofx7F.allowance.call(addressEBx4gWN, addresssjMiNic, {from: accounts[3]});
//		const boolNuDNs0x = await Revivez5ofx7F.extendLock.call(byteswQ0DIE, uintkJRb00E, {from: accounts[4]});

		assert.equal(uint256UGX0t6b, BigInt("0"))
		await expect(Revivez5ofx7F.extendLock.call(byteswQ0DIE, uintkJRb00E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressgvHg2Kd = accounts[3]
		const byteAr8e1JP = "0x14191b030f1e140e170114050807020f0a021817140302030d19060a0614190c"
		const addressYRG4da = "0x0000000000000000000000000000000000000001"
		const uintskHZBdj = BigInt("786")
		const bytecMoVTwc = "0x16081e05020c1204021e1301011f1b1c121a201a1a030f03151f1a161214120b"
		const addressEQdOaxQ = accounts[2]
		const uintKRq0Cx6 = BigInt("940")
		const uint2564pD0VF = await Revivez5ofx7F.totalBalanceOf.call(addressgvHg2Kd, {from: accounts[4]});
		const uint256k3IdYAa = await Revivez5ofx7F.tokensUnlockable.call(addressYRG4da, byteAr8e1JP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DtrnQYk = await Revivez5ofx7F.tokensLockedAtTime.call(addressEQdOaxQ, bytecMoVTwc, uintskHZBdj, {from: accounts[5]});
//		const uint256odDbOkf = await Revivez5ofx7F.recoverERC20.call(uintKRq0Cx6, {from: accounts[3]});

		assert.equal(uint2564pD0VF, BigInt("0"))
		assert.equal(uint256DtrnQYk, BigInt("0"))
		assert.equal(uint256k3IdYAa, BigInt("0"))
		await expect(Revivez5ofx7F.recoverERC20.call(uintKRq0Cx6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYjHNYBP = await Revive.new({from: accounts[3]});
		const uintVTxlE7F = BigInt("1741")
		const byteCmyeRVW = "0x0409140c051b06131a0414091c1e1a12fffffffd17100d03121b15160f001b050d1e00"
//		const boolJ50tGP9 = await ReviveYjHNYBP.increaseLockAmount.call(byteCmyeRVW, uintVTxlE7F, {from: accounts[3]});

		await expect(ReviveYjHNYBP.increaseLockAmount.call(byteCmyeRVW, uintVTxlE7F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const uintANiEnsp = BigInt("1022")
//		const uint256u6C6dhp = await RevivedbKJeKk.recoverERC20.call(uintANiEnsp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivedbKJeKk.recoverERC20.call(uintANiEnsp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressUWcsrra = accounts[3]
		const uintf5TKoh3 = BigInt("1979")
		const uint2564pD0VF = await Revivez5ofx7F.totalBalanceOf.call(addressUWcsrra, {from: accounts[4]});
//		const uint256mwsDWud = await Revivez5ofx7F.recoverERC20.call(uintf5TKoh3, {from: accounts[4]});

		assert.equal(uint2564pD0VF, BigInt("0"))
		await expect(Revivez5ofx7F.recoverERC20.call(uintf5TKoh3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressOjrP2Ob = accounts[3]
		const uintOCJrbBz = BigInt("1915")
		const uint2564pD0VF = await Revivez5ofx7F.totalBalanceOf.call(addressOjrP2Ob, {from: accounts[4]});
//		const uint256rwZUgRn = await Revivez5ofx7F.recoverERC20.call(uintOCJrbBz, {from: accounts[2]});

		assert.equal(uint2564pD0VF, BigInt("0"))
		await expect(Revivez5ofx7F.recoverERC20.call(uintOCJrbBz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const uintLRN2fX8 = BigInt("758")
		const uintqHG75M2 = BigInt("1770")
		const addressRljPC2 = accounts[2]
		const uintWuwKW0e = BigInt("0")
		const bytemrHLXJl = "0x190211031b1702140e03181508131d131807031b0e0a100a051c0b1911180817"
		const addressZ9n0AOX = accounts[4]
//		const uint256qT6K5F5 = await RevivedbKJeKk.recoverERC20.call(uintLRN2fX8, {from: accounts[2]});
//		const boolMibdbLm = await RevivedbKJeKk.isOwner.call({from: accounts[0]});
//		const boolszNo22z = await RevivedbKJeKk.increaseAllowance.call(addressRljPC2, uintqHG75M2, {from: accounts[4]});
//		const uint256YwMw4R = await RevivedbKJeKk.tokensLockedAtTime.call(addressZ9n0AOX, bytemrHLXJl, uintWuwKW0e, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivedbKJeKk.recoverERC20.call(uintLRN2fX8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewwyjLFq = await Revive.new({from: accounts[3]});
		const addressQdWXQa = accounts[4]
		const uintk8gqho = BigInt("1888")
		const addressujxtNjt = accounts[1]
		const uintEri2kns = BigInt("1091")
		const byteWo2b4Yi = "0x03091311061014171403031d1b081218191d05111709040c060607151819030f"
		const uintkfw1uIs = BigInt("1348")
		const addressA1IjxA3 = "0x0000000000000000000000000000000000000001"
		const uint256bqjtvVc = await RevivewwyjLFq.totalBalanceOf.call(addressQdWXQa, {from: accounts[2]});
//		const uint256SMOacZ = await RevivewwyjLFq.recoverERC20.call(uintk8gqho, {from: accounts[2]});
//		const addressioXfZIO = await RevivewwyjLFq.transferOwnership.call(addressujxtNjt, {from: accounts[1]});
//		const boolBDcmR4f = await RevivewwyjLFq.extendLock.call(byteWo2b4Yi, uintEri2kns, {from: accounts[0]});
//		const booloAP8M7s = await RevivewwyjLFq.decreaseAllowance.call(addressA1IjxA3, uintkfw1uIs, {from: accounts[2]});

		assert.equal(uint256bqjtvVc, BigInt("0"))
		await expect(RevivewwyjLFq.recoverERC20.call(uintk8gqho, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})