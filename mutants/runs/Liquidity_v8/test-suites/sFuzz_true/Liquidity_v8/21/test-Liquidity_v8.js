const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringOesJrlk = "wVK1teAbs8BtUyzW4o8EHAMKHhKB6bTjDeDX7UGJVuWtyoJRoDkNHzT6QwrydbKxKfK3LNOcy9tQWwRQHXiHD3AKj"
		const addressXNUmy8U = accounts[3]
		const addressBnGvKhP = accounts[0]
		const uinthMqlXKh = BigInt("1126")
		const uintrgFHt9p = BigInt("1442")
		const Liquidity_v8F9YC2A6 = await Liquidity_v8.new(stringOesJrlk, addressXNUmy8U, addressBnGvKhP, uinthMqlXKh, uintrgFHt9p, {from: accounts[4]});
		const uintjfWKh6L = BigInt("1162")
		const boolLcj0N4W = await Liquidity_v8F9YC2A6.isOwner.call({from: accounts[0]});
		const boolELmKccy = await Liquidity_v8F9YC2A6.addReward.call(uintjfWKh6L, {from: accounts[1]});
		const boolsTcT1fS = await Liquidity_v8F9YC2A6.isOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringaDqnWDs = "QiondeWuwq5ml2yYZvh3ZvXyXsFWcwNTmO975RE9dV6G3N4T3E76EKB8wwhPmvW1XtDBe4Rbh7HaG1VdMMCKpJ4kVpET6N2cMf"
		const addresshrUnclc = accounts[4]
		const addressjOAJyZ5 = "0x0000000000000000000000000000000000000001"
		const uintZJ3PGK = BigInt("1346")
		const uintdIwKD5u = BigInt("697")
		const Liquidity_v89Eg6pg = await Liquidity_v8.new(stringaDqnWDs, addresshrUnclc, addressjOAJyZ5, uintZJ3PGK, uintdIwKD5u, {from: accounts[3]});
		const addressnctP84C = accounts[0]
		const addressQ8i28yk = accounts[3]
		const 
VBhBzWX = await Liquidity_v89Eg6pg.userDeposits.call(addressnctP84C, {from: accounts[4]});
		const booln1pKKlM = await Liquidity_v89Eg6pg.isOwner.call({from: accounts[3]});
		const boolgEQwEQi = await Liquidity_v89Eg6pg.isOwner.call({from: accounts[1]});
		const uint256oy41f8V = await Liquidity_v89Eg6pg.calculate.call(addressQ8i28yk, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringeOFZSi = "HZIFCpDC9FieS4rfKTmN9F8Iuv"
		const addressGEM8Fbn = accounts[2]
		const addressjhI9B8X = accounts[1]
		const uintZnXeeRd = BigInt("382")
		const uintT2yIsls = BigInt("878")
		const Liquidity_v8WhaHEnG = await Liquidity_v8.new(stringeOFZSi, addressGEM8Fbn, addressjhI9B8X, uintZnXeeRd, uintT2yIsls, {from: accounts[4]});
		const addressJkHE8hW = accounts[0]
		const uintHSCiGr8 = BigInt("1575")
		const addressbt0wgKf = accounts[0]
		const uint1g5ahp = BigInt("15")
		const addressMhCYdSP = "0x0000000000000000000000000000000000000001"
		const uintXe4bHNZ = BigInt("1023")
		const addresszgAkiA6 = accounts[2]
		const addressKzkKJ1q = accounts[3]
		const addressvMAsbrD = await Liquidity_v8WhaHEnG.transferOwnership.call(addressJkHE8hW, {from: accounts[3]});
		const boolMEetD96 = await Liquidity_v8WhaHEnG.stake.call(uintHSCiGr8, {from: accounts[3]});
		const 
lqUbbzX = await Liquidity_v8WhaHEnG._hasAllowance.call(addressMhCYdSP, uint1g5ahp, addressbt0wgKf, {from: accounts[0]});
		const booldLoUXyT = await Liquidity_v8WhaHEnG.addReward.call(uintXe4bHNZ, {from: accounts[3]});
		const address9xZ3wL = await Liquidity_v8WhaHEnG.transferOwnership.call(addresszgAkiA6, {from: accounts[4]});
		const 
mCCLkT = await Liquidity_v8WhaHEnG.userDeposits.call(addressKzkKJ1q, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJ4rsTnd = "xvnVX6Ytx74VloQkKp3tYtvsZOQjeIax5ELpjuEcPmEBQrESHKj4wyoJLwPafttSKzBX6iLnR3zVoM"
		const addressaPHEq5X = accounts[0]
		const addressweDsT9f = accounts[4]
		const uintOQjAO6Y = BigInt("857")
		const uint3t0k46 = BigInt("491")
		const Liquidity_v8YXQ0kA = await Liquidity_v8.new(stringJ4rsTnd, addressaPHEq5X, addressweDsT9f, uintOQjAO6Y, uint3t0k46, {from: accounts[3]});
		const addressmA502Dv = accounts[0]
		const uintTKbKP2r = BigInt("189")
		const addressaAevAq = accounts[2]
		const addressOwyP8Mw = accounts[5]
		const 
R2FpeiS = await Liquidity_v8YXQ0kA._hasAllowance.call(addressaAevAq, uintTKbKP2r, addressmA502Dv, {from: accounts[1]});
		const boollQWBiaQ = await Liquidity_v8YXQ0kA.emergencyWithdraw.call({from: accounts[3]});
		const uint256ejEa4E8 = await Liquidity_v8YXQ0kA.calculate.call(addressOwyP8Mw, {from: accounts[3]});
		const boolfwVkm2X = await Liquidity_v8YXQ0kA.isOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTKaE2r4 = "npoloZEDvoYV5JfHurULau33MH1ltPraGo4ch367RwK1OypNCKVm7F6MZACY2PE2k5jTlr3hOV7"
		const addressZMGQXFl = accounts[3]
		const addressJWIRuSq = "0x0000000000000000000000000000000000000001"
		const uintKlR9im = BigInt("287")
		const uintYvELbcD = BigInt("912")
		const Liquidity_v8rCRd4o = await Liquidity_v8.new(stringTKaE2r4, addressZMGQXFl, addressJWIRuSq, uintKlR9im, uintYvELbcD, {from: accounts[2]});
		const addressdtHA4JL = accounts[0]
		const addressXJTgnow = accounts[4]
		const uintZ7BzVHx = BigInt("422")
		const addressp0i3XU8 = accounts[2]
		const 
gcNDctl = await Liquidity_v8rCRd4o.userDeposits.call(addressdtHA4JL, {from: accounts[3]});
		const boolaVDj6IY = await Liquidity_v8rCRd4o.withdraw.call({from: accounts[0]});
		const 
oQe3ey4 = await Liquidity_v8rCRd4o._hasAllowance.call(addressp0i3XU8, uintZ7BzVHx, addressXJTgnow, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringOesJrlk = "wVK1teAbs8BtUyzW4o8EHAMKHhKB6bTjDeDX7UGJVuWtyoJRoDkNHzT6QwrydbKxKfK3LNOcy9tQWwRQHXiHD3AKj"
		const addresswt11OF = accounts[3]
		const addressmElqaCw = accounts[0]
		const uintsyCTKMY = BigInt("1126")
		const uintGILsB2d = BigInt("1442")
		const Liquidity_v8F9YC2A6 = await Liquidity_v8.new(stringOesJrlk, addresswt11OF, addressmElqaCw, uintsyCTKMY, uintGILsB2d, {from: accounts[4]});
		const uintA5EGsPs = BigInt("1923")
		const uintLFvexUI = BigInt("1284")
		const boolLcj0N4W = await Liquidity_v8F9YC2A6.isOwner.call({from: accounts[0]});
		await Liquidity_v8F9YC2A6.renounceOwnership.call({from: accounts[4]});
		const boolx5E9ozz = await Liquidity_v8F9YC2A6.stake.call(uintA5EGsPs, {from: accounts[5]});
		const boolELmKccy = await Liquidity_v8F9YC2A6.addReward.call(uintLFvexUI, {from: accounts[1]});
		const boolsTcT1fS = await Liquidity_v8F9YC2A6.isOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringmaXBVj = "PHnRPJXY3TUvOQIwzx2FaW5mfPPYBgzdad2lJBHJXMpcOQv5QxxdM4b9pdNl1GHCheOKDmV20tL46NkdRjaqQ5pAlBXZjy"
		const addressvIlOFR1 = accounts[1]
		const addressAaMk3q3 = accounts[2]
		const uintL0n7AmH = BigInt("1530")
		const uintWiSbADg = BigInt("2030")
		const Liquidity_v8KS93WDO = await Liquidity_v8.new(stringmaXBVj, addressvIlOFR1, addressAaMk3q3, uintL0n7AmH, uintWiSbADg, {from: "0x0000000000000000000000000000000000000001"});
		const addressdnFxS9 = accounts[1]
		const addressxKMLL1J = accounts[2]
		const uint256QICVBbN = await Liquidity_v8KS93WDO.calculate.call(addressdnFxS9, {from: accounts[1]});
		const boolb5oNPrg = await Liquidity_v8KS93WDO.isOwner.call({from: accounts[2]});
		const addressJAtKF0I = await Liquidity_v8KS93WDO.transferOwnership.call(addressxKMLL1J, {from: accounts[0]});
		await Liquidity_v8KS93WDO.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringOesJrlk = "wVK1teAbs8BtUyzW4o8EHAMKHhKB6bTjDeDX7UGJVuWtyoJRoDkNHzT6QwrydbKxKfK3LNOcy9tQWwRQHXiHD3AKj"
		const addressD2FC6Ot = accounts[3]
		const addressSXCXBl = accounts[0]
		const uint8CCgfd = BigInt("1126")
		const uintOzCkfO3 = BigInt("1442")
		const Liquidity_v8F9YC2A6 = await Liquidity_v8.new(stringOesJrlk, addressD2FC6Ot, addressSXCXBl, uint8CCgfd, uintOzCkfO3, {from: accounts[4]});
		const boolLcj0N4W = await Liquidity_v8F9YC2A6.isOwner.call({from: accounts[0]});
		const boolwbyuVZh = await Liquidity_v8F9YC2A6.isOwner.call({from: accounts[4]});
		const boollibdLcc = await Liquidity_v8F9YC2A6.emergencyWithdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const strings2bRZKT = "YcYGX96B3EH5g9lovuM4mici5xWmRfS61SSscLyduuXLG9hMZl3VAObB2g5eJ4pMEdIFcwq"
		const addresseQciLeE = accounts[4]
		const addressaImXn0 = accounts[1]
		const uintAljruqZ = BigInt("62")
		const uintQo1UBfN = BigInt("1514")
		const Liquidity_v8QL8d3K = await Liquidity_v8.new(strings2bRZKT, addresseQciLeE, addressaImXn0, uintAljruqZ, uintQo1UBfN, {from: accounts[0]});
		const uintJ8yZklX = BigInt("544")
		const addresswYWD8A = accounts[2]
		const addressE3RVr5V = await Liquidity_v8QL8d3K.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolvCTTULv = await Liquidity_v8QL8d3K.addReward.call(uintJ8yZklX, {from: accounts[0]});
		const uint256XvKKfyT = await Liquidity_v8QL8d3K.calculate.call(addresswYWD8A, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTKaE2r4 = "npoloZEDvoYV5JfHurULau33MH1ltPraGo4ch367RwK1OypNCKVm7F6MZACY2PE2k5jTlr3hOV7"
		const addressrnvXr0b = accounts[3]
		const addressg4ZmnGU = "0x0000000000000000000000000000000000000001"
		const uintPiHQwV = BigInt("287")
		const uintvKPwfYw = BigInt("912")
		const Liquidity_v8rCRd4o = await Liquidity_v8.new(stringTKaE2r4, addressrnvXr0b, addressg4ZmnGU, uintPiHQwV, uintvKPwfYw, {from: accounts[2]});
		const addresspICE4uX = accounts[1]
		const uintNnw1fht = BigInt("1701")
		const 
gcNDctl = await Liquidity_v8rCRd4o.userDeposits.call(addresspICE4uX, {from: accounts[3]});
		const boolw5Th1UE = await Liquidity_v8rCRd4o.isOwner.call({from: accounts[3]});
		const uint256uNDCZE = await Liquidity_v8rCRd4o.changeLockDuration.call(uintNnw1fht, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringOesJrlk = "wVK1teAbs8BtUyzW4o8EHAMKHhKB6bTjDeDX7UGJVuWtyoJRoDkNHzT6QwrydbKxKfK3LNOcy9tQWwRQHXiHD3AKj"
		const addressAj7hhq3 = accounts[3]
		const addressNwhujrv = accounts[0]
		const uintR7FFc8 = BigInt("1126")
		const uinttjnNCKC = BigInt("1442")
		const Liquidity_v8F9YC2A6 = await Liquidity_v8.new(stringOesJrlk, addressAj7hhq3, addressNwhujrv, uintR7FFc8, uinttjnNCKC, {from: accounts[4]});
		const uintuyWS9W = BigInt("1662")
		const boolLcj0N4W = await Liquidity_v8F9YC2A6.isOwner.call({from: accounts[0]});
		const uint64fdgQdin = await Liquidity_v8F9YC2A6.setRate.call(uintuyWS9W, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringOesJrlk = "wVK1teAbs8BtUyzW4o8EHAMKHhKB6bTjDeDX7UGJVuWtyoJRoDkNHzT6QwrydbKxKfK3LNOcy9tQWwRQHXiHD3AKj"
		const addressyuLrcVj = accounts[3]
		const addressh3rZMeI = accounts[0]
		const uintTcZBoVC = BigInt("1126")
		const uintLUFtsFs = BigInt("1442")
		const Liquidity_v8F9YC2A6 = await Liquidity_v8.new(stringOesJrlk, addressyuLrcVj, addressh3rZMeI, uintTcZBoVC, uintLUFtsFs, {from: accounts[4]});
		const addressZCVU72Y = accounts[4]
		const boolLcj0N4W = await Liquidity_v8F9YC2A6.isOwner.call({from: accounts[0]});
		const addressRGQpNez = await Liquidity_v8F9YC2A6.transferOwnership.call(addressZCVU72Y, {from: accounts[4]});
		const boolIvhlGEH = await Liquidity_v8F9YC2A6.withdraw.call({from: accounts[1]});
	});
})