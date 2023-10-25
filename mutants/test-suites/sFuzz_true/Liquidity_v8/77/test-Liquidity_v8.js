const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const string4bInWv = "MW9Vb8U7mcXeHNekEjiSIP5d1QTKY4O6mRYqUXYuvI6kBFTV5bUFDwuDibhPr"
		const addresshKoUgeF = accounts[3]
		const addressa1DYtn7 = accounts[0]
		const uintMYeKSF = BigInt("1074")
		const uintfY1eGWt = BigInt("1625")
		const Liquidity_v8o9u2c1Z = await Liquidity_v8.new(string4bInWv, addresshKoUgeF, addressa1DYtn7, uintMYeKSF, uintfY1eGWt, {from: "0x0000000000000000000000000000000000000001"});
		const uintmMCE7MM = BigInt("752")
		const uintrAt20E0 = BigInt("1672")
		const uintYcyExT = BigInt("628")
		const boolzR6cWN = await Liquidity_v8o9u2c1Z.isOwner.call({from: accounts[4]});
		const uint64koI7dX6 = await Liquidity_v8o9u2c1Z.setRate.call(uintmMCE7MM, {from: accounts[2]});
		const uint256ASfAGBG = await Liquidity_v8o9u2c1Z.changeLockDuration.call(uintrAt20E0, {from: accounts[2]});
		const boolwif3aZt = await Liquidity_v8o9u2c1Z.addReward.call(uintYcyExT, {from: accounts[1]});
		const boolS2ApxZw = await Liquidity_v8o9u2c1Z.isOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringg7aOr1N = "SNjvD"
		const addressfHAbNJM = accounts[5]
		const addresssvKKyUP = accounts[5]
		const uintQpqB1OW = BigInt("1035")
		const uintoRWURdV = BigInt("1598")
		const Liquidity_v8mJsjT4 = await Liquidity_v8.new(stringg7aOr1N, addressfHAbNJM, addresssvKKyUP, uintQpqB1OW, uintoRWURdV, {from: accounts[1]});
		const addressu2Tv79x = accounts[2]
		const uintyA2F4Xh = BigInt("1464")
		const addressEZ1yAX1 = accounts[1]
		const addresszUvFNDd = accounts[0]
		const 
E8e2K1 = await Liquidity_v8mJsjT4._hasAllowance.call(addressEZ1yAX1, uintyA2F4Xh, addressu2Tv79x, {from: accounts[4]});
		const boolXI2eknN = await Liquidity_v8mJsjT4.isOwner.call({from: accounts[4]});
		await Liquidity_v8mJsjT4.onlyOwner.call({from: accounts[2]});
		const 
Fensm9d = await Liquidity_v8mJsjT4.userDeposits.call(addresszUvFNDd, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringErLOFkL = "CPVyRw7VCaoIFGwdAxcDtaJZNkAAbQiqtNivvYv1ep"
		const addressfQ9deMJ = accounts[5]
		const addressXXpICI = accounts[3]
		const uintQVs2oOw = BigInt("1190")
		const uintaQCOv2g = BigInt("1633")
		const Liquidity_v8Qlfmckg = await Liquidity_v8.new(stringErLOFkL, addressfQ9deMJ, addressXXpICI, uintQVs2oOw, uintaQCOv2g, {from: accounts[2]});
		const boolTkLOZmn = await Liquidity_v8Qlfmckg.emergencyWithdraw.call({from: accounts[5]});
		const booltN8IZi2 = await Liquidity_v8Qlfmckg.isOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringk2GD0y = "HGs3iCL9HoMHSclbNLssWBLTwOENgCRiYIqyJWxWzea2eNJ"
		const addressNOCmAJj = accounts[1]
		const addresswxaI4is = accounts[4]
		const uintl3LoAjW = BigInt("448")
		const uintLhSaqNC = BigInt("220")
		const Liquidity_v8OeoHmo1 = await Liquidity_v8.new(stringk2GD0y, addressNOCmAJj, addresswxaI4is, uintl3LoAjW, uintLhSaqNC, {from: accounts[1]});
		const addressipgf6yp = accounts[3]
		const addressYmD4hQP = accounts[0]
		const uint256aDZWFlU = await Liquidity_v8OeoHmo1.calculate.call(addressipgf6yp, {from: accounts[1]});
		await Liquidity_v8OeoHmo1.onlyOwner.call({from: accounts[3]});
		const boolPhhOauQ = await Liquidity_v8OeoHmo1.emergencyWithdraw.call({from: accounts[4]});
		const uint256AauCaAY = await Liquidity_v8OeoHmo1.calculate.call(addressYmD4hQP, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdn5ei1 = "deTNhSLaw9jUMID5DDHtLza1WxnxThzAneiuieCJNbKkmT"
		const addressxW1ta92 = accounts[1]
		const addressS0iIukj = accounts[0]
		const uintlXipQh0 = BigInt("1879")
		const uintPPdc58G = BigInt("939")
		const Liquidity_v8yeWVui7 = await Liquidity_v8.new(stringdn5ei1, addressxW1ta92, addressS0iIukj, uintlXipQh0, uintPPdc58G, {from: accounts[0]});
		const uinti1ghMhd = BigInt("942")
		const addresshnI3bXE = accounts[5]
		const addressx9TEC7q = accounts[4]
		const booleS7nEC5 = await Liquidity_v8yeWVui7.stake.call(uinti1ghMhd, {from: accounts[2]});
		const addressKadQlIu = await Liquidity_v8yeWVui7.transferOwnership.call(addresshnI3bXE, {from: accounts[0]});
		const uint256qKIHFe7 = await Liquidity_v8yeWVui7.calculate.call(addressx9TEC7q, {from: accounts[4]});
		await Liquidity_v8yeWVui7.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringNF8OWv = "y8fUD0MgOZz2l7DrjIw4kpdJi0VKDUbeJ72zRKBkTF6TVjTkM7FJtEuMfjda1h9oFm3N7f71VEX2Fp"
		const addressy9sz2FK = accounts[1]
		const addressxtAcu80 = accounts[1]
		const uintjtaX4dG = BigInt("1611")
		const uintvWtQe3L = BigInt("1777")
		const Liquidity_v8Fm3Yh8S = await Liquidity_v8.new(stringNF8OWv, addressy9sz2FK, addressxtAcu80, uintjtaX4dG, uintvWtQe3L, {from: accounts[3]});
		const addressyh8kRb = accounts[3]
		const addressovn6uaI = accounts[1]
		const addressTjLpnp5 = "0x0000000000000000000000000000000000000001"
		const 
v8aykLz = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressyh8kRb, {from: accounts[1]});
		const uint256H9SMeeX = await Liquidity_v8Fm3Yh8S.calculate.call(addressovn6uaI, {from: accounts[3]});
		const 
Xc2Ct3D = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressTjLpnp5, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringGXGBtaL = "6RizbnzIgxlgVDHTArr5E3DstwQpvkWGQoS3X2T"
		const addressd6M89nX = accounts[4]
		const addressfcHVlKy = accounts[4]
		const uintl8V8As = BigInt("1903")
		const uinthsOmGw = BigInt("787")
		const Liquidity_v8zWt2RU5 = await Liquidity_v8.new(stringGXGBtaL, addressd6M89nX, addressfcHVlKy, uintl8V8As, uinthsOmGw, {from: accounts[3]});
		await Liquidity_v8zWt2RU5.renounceOwnership.call({from: accounts[2]});
		await Liquidity_v8zWt2RU5.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringNF8OWv = "y8fUD0MgOZz2l7DrjIw4kpdJi0VKDUbeJ72zRKBkTF6TVjTkM7FJtEuMfjda1h9oFm3N7f71VEX2Fp"
		const addressnWzkG76 = accounts[1]
		const addresspx4ped = accounts[1]
		const uintjMUlre = BigInt("1611")
		const uintUZnGH1l = BigInt("1777")
		const Liquidity_v8Fm3Yh8S = await Liquidity_v8.new(stringNF8OWv, addressnWzkG76, addresspx4ped, uintjMUlre, uintUZnGH1l, {from: accounts[3]});
		const addresseO78PT3 = accounts[3]
		const uintut6BD33 = BigInt("804")
		const addressFlicT1s = accounts[1]
		const addressPtNvpTz = "0x0000000000000000000000000000000000000001"
		const 
v8aykLz = await Liquidity_v8Fm3Yh8S.userDeposits.call(addresseO78PT3, {from: accounts[1]});
		const uint256u5jBjAw = await Liquidity_v8Fm3Yh8S.changeLockDuration.call(uintut6BD33, {from: accounts[3]});
		const uint256H9SMeeX = await Liquidity_v8Fm3Yh8S.calculate.call(addressFlicT1s, {from: accounts[3]});
		const 
Xc2Ct3D = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressPtNvpTz, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringNF8OWv = "y8fUD0MgOZz2l7DrjIw4kpdJi0VKDUbeJ72zRKBkTF6TVjTkM7FJtEuMfjda1h9oFm3N7f71VEX2Fp"
		const addressL2CrMFe = accounts[1]
		const addresstglkQm2 = accounts[1]
		const uinttIMfiF = BigInt("1611")
		const uintkZigfq4 = BigInt("1777")
		const Liquidity_v8Fm3Yh8S = await Liquidity_v8.new(stringNF8OWv, addressL2CrMFe, addresstglkQm2, uinttIMfiF, uintkZigfq4, {from: accounts[3]});
		const addressWqEljJq = accounts[3]
		const addressVvqCR9E = accounts[1]
		const addressLRf7LK = "0x0000000000000000000000000000000000000001"
		const addressTvOSCxs = await Liquidity_v8Fm3Yh8S.owner.call({from: accounts[1]});
		const 
v8aykLz = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressWqEljJq, {from: accounts[1]});
		const uint256H9SMeeX = await Liquidity_v8Fm3Yh8S.calculate.call(addressVvqCR9E, {from: accounts[3]});
		const 
Xc2Ct3D = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressLRf7LK, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringNF8OWv = "y8fUD0MgOZz2l7DrjIw4kpdJi0VKDUbeJ72zRKBkTF6TVjTkM7FJtEuMfjda1h9oFm3N7f71VEX2Fp"
		const addresswQQRRSJ = accounts[1]
		const addressT4l4sy = accounts[1]
		const uinto24nw7 = BigInt("1611")
		const uint52eWYB = BigInt("1777")
		const Liquidity_v8Fm3Yh8S = await Liquidity_v8.new(stringNF8OWv, addresswQQRRSJ, addressT4l4sy, uinto24nw7, uint52eWYB, {from: accounts[3]});
		const addressLjImjmc = "0x00000000000000000000000000000000000000-1"
		const 
Xc2Ct3D = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressLjImjmc, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringNF8OWv = "y8fUD0MgOZz2l7DrjIw4kpdJi0VKDUbeJ72zRKBkTF6TVjTkM7FJtEuMfjda1h9oFm3N7f71VEX2Fp"
		const addresshDvbYQj = accounts[1]
		const addresscv3e73D = accounts[1]
		const uinti7mBh6r = BigInt("1611")
		const uintcboyozP = BigInt("1777")
		const Liquidity_v8Fm3Yh8S = await Liquidity_v8.new(stringNF8OWv, addresshDvbYQj, addresscv3e73D, uinti7mBh6r, uintcboyozP, {from: accounts[3]});
		const addresscZngOiF = accounts[2]
		const addressqermTp8 = "0x0000000000000000000000000000000000000000"
		const uint256H9SMeeX = await Liquidity_v8Fm3Yh8S.calculate.call(addresscZngOiF, {from: accounts[3]});
		const 
Xc2Ct3D = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressqermTp8, {from: accounts[4]});
		const booleYQqknW = await Liquidity_v8Fm3Yh8S.withdraw.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringNF8OWv = "y8fUD0MgOZz2l7DrjIw4kpdJi0VKDUbeJ72zRKBkTF6TVjTkM7FJtEuMfjda1h9oFm3N7f71VEX2Fp"
		const addressxsmtpZN = accounts[1]
		const addressG2L70x = accounts[1]
		const uintuHNPYcb = BigInt("1611")
		const uintb12EKeA = BigInt("1777")
		const Liquidity_v8Fm3Yh8S = await Liquidity_v8.new(stringNF8OWv, addressxsmtpZN, addressG2L70x, uintuHNPYcb, uintb12EKeA, {from: accounts[3]});
		const addressD9obqb = "0x0000000000000000000000000000000000000000"
		const addressfhTYBaY = "0x0000000000000000000000000000000000000001"
		const 
Xc2Ct3D = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressD9obqb, {from: accounts[4]});
		const addressAMkUxo3 = await Liquidity_v8Fm3Yh8S.transferOwnership.call(addressfhTYBaY, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringNF8OWv = "y8fUD0MgOZz2l7DrjIw4kpdJi0VKDUbeJ72zRKBkTF6TVjTkM7FJtEuMfjda1h9oFm3N7f71VEX2Fp"
		const addressqdDbRES = accounts[1]
		const addressGd2ogV6 = accounts[1]
		const uintPYEOhBk = BigInt("1611")
		const uintpzkB0UM = BigInt("1777")
		const Liquidity_v8Fm3Yh8S = await Liquidity_v8.new(stringNF8OWv, addressqdDbRES, addressGd2ogV6, uintPYEOhBk, uintpzkB0UM, {from: accounts[3]});
		const addressNVOFLRj = accounts[5]
		await Liquidity_v8Fm3Yh8S.renounceOwnership.call({from: accounts[3]});
		const 
Xc2Ct3D = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressNVOFLRj, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringNF8OWv = "y8fUD0MgOZz2l7DrjIw4kpdJi0VKDUbeJ72zRKBkTF6TVjTkM7FJtEuMfjda1h9oFm3N7f71VEX2Fp"
		const addressWU2trkK = accounts[1]
		const addressQ3RlI13 = accounts[1]
		const uintqveH9TB = BigInt("1611")
		const uint75q3UY = BigInt("1777")
		const Liquidity_v8Fm3Yh8S = await Liquidity_v8.new(stringNF8OWv, addressWU2trkK, addressQ3RlI13, uintqveH9TB, uint75q3UY, {from: accounts[3]});
		const uintHsd3vul = BigInt("1397")
		const addressc5VpFGI = "0x0000000000000000000000000000000000000001"
		const uint64Ru3gaR = await Liquidity_v8Fm3Yh8S.setRate.call(uintHsd3vul, {from: accounts[3]});
		const 
Xc2Ct3D = await Liquidity_v8Fm3Yh8S.userDeposits.call(addressc5VpFGI, {from: accounts[4]});
	});
})