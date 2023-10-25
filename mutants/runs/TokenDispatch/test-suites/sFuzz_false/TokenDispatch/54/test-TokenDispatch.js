const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatcheNnliMv = await TokenDispatch.new({from: accounts[2]});
		const addressR5yforE = accounts[3]
		const addressFchDMwO = "0x0000000000000000000000000000000000000001"
		const uinttTY0RYq = BigInt("249")
		const uintPjHLc0m = BigInt("243")
		const addressWYhOWvf = accounts[2]
		const addressyAra1y0 = accounts[1]
		const uintrai12cf = BigInt("199")
		const uintXlUof5 = BigInt("85")
		const uint256yLQsbG5 = await TokenDispatcheNnliMv.updateTeam.call(uinttTY0RYq, addressFchDMwO, addressR5yforE, {from: accounts[3]});
		const addresszVsdaX = await TokenDispatcheNnliMv.approve.call(addressyAra1y0, addressWYhOWvf, uintPjHLc0m, {from: "0x0000000000000000000000000000000000000001"});
		const 
pbvz5c = await TokenDispatcheNnliMv.teamOf.call(uintrai12cf, {from: accounts[2]});
		const 
SDzEKH7 = await TokenDispatcheNnliMv.teamOf.call(uintXlUof5, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchKEOibtz = await TokenDispatch.new({from: accounts[5]});
		const uintSAMZKd = BigInt("172")
		const uintm8idgWN = BigInt("196")
		const addressHYUkoig = accounts[4]
		const addressO9RaHuO = accounts[1]
		const uintI7E6hv = BigInt("162")
		const uinteWpKrAQ = BigInt("369")
		const addressnQxKUZS = accounts[0]
		const addressezPYEGY = accounts[1]
		const uint256oAwQoxd = await TokenDispatchKEOibtz.balanceOf.call(uintSAMZKd, {from: accounts[4]});
		const uint256V1Evab = await TokenDispatchKEOibtz.nextClaimHeightOf.call(uintm8idgWN, {from: accounts[4]});
		const uint256Gec4IBz = await TokenDispatchKEOibtz.updateTeam.call(uintI7E6hv, addressO9RaHuO, addressHYUkoig, {from: accounts[0]});
		const addressRh1GFPT = await TokenDispatchKEOibtz.approve.call(addressezPYEGY, addressnQxKUZS, uinteWpKrAQ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatcho6pjPCi = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintigj7uZB = BigInt("109")
		const uintDawbx6D = BigInt("113")
		const uintXHLeuJ8 = BigInt("761")
		const uint256L0YlaPj = await TokenDispatcho6pjPCi.claimedOf.call(uintigj7uZB, {from: accounts[2]});
		const 
ZK3DOzG = await TokenDispatcho6pjPCi.teamOf.call(uintDawbx6D, {from: accounts[3]});
		const uintvUIhuQP = await TokenDispatcho6pjPCi.signTransaction.call(uintXHLeuJ8, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchjmMgso = await TokenDispatch.new({from: accounts[0]});
		const uintAGds02y = BigInt("1330")
		const address1X8our = accounts[3]
		const addressrV4423x = accounts[3]
		const uintk5FWnmP = BigInt("159")
		const uinteXkmDcJ = BigInt("214")
		const uintk6vjDFJ = BigInt("1647")
		const address38Dj0y = accounts[1]
		const addressk2lApI = accounts[4]
		const uinteRE8JFe = BigInt("143")
		const uintHlJnbo8 = BigInt("120")
		const addressmPjXxlx = await TokenDispatchjmMgso.approve.call(addressrV4423x, address1X8our, uintAGds02y, {from: accounts[4]});
		const 
JP57MLt = await TokenDispatchjmMgso.teamOf.call(uintk5FWnmP, {from: accounts[1]});
		const uint256kBoPqeA = await TokenDispatchjmMgso.balanceOf.call(uinteXkmDcJ, {from: accounts[4]});
		const addressc2iqQdW = await TokenDispatchjmMgso.approve.call(addressk2lApI, address38Dj0y, uintk6vjDFJ, {from: accounts[2]});
		const uint256mNIKLEs = await TokenDispatchjmMgso.nextClaimHeightOf.call(uinteRE8JFe, {from: accounts[2]});
		const uint256G33fy3F = await TokenDispatchjmMgso.claimedOf.call(uintHlJnbo8, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchRwJKg6u = await TokenDispatch.new({from: accounts[3]});
		const uintRCuqngz = BigInt("64")
		const uintM6k4AF = BigInt("218")
		const uint256XfYp7lU = await TokenDispatchRwJKg6u.nextClaimHeightOf.call(uintRCuqngz, {from: accounts[1]});
		const uint2561JsmLb = await TokenDispatchRwJKg6u.nextClaimHeightOf.call(uintM6k4AF, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchRwJKg6u = await TokenDispatch.new({from: accounts[3]});
		const uintq3rEwWw = BigInt("205")
		const uintakT1sp6 = BigInt("64")
		const uintzRlWFPM = BigInt("241")
		const uint8SrOv6E = await TokenDispatchRwJKg6u.claim.call(uintq3rEwWw, {from: accounts[2]});
		const uint256XfYp7lU = await TokenDispatchRwJKg6u.nextClaimHeightOf.call(uintakT1sp6, {from: accounts[1]});
		const uint2561JsmLb = await TokenDispatchRwJKg6u.nextClaimHeightOf.call(uintzRlWFPM, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchRwJKg6u = await TokenDispatch.new({from: accounts[3]});
		const uintcGhwfy = BigInt("91")
		const uintgCF7O6c = BigInt("222")
		const uintOXrVJ9 = BigInt("64")
		const uint2565em1Wx = await TokenDispatchRwJKg6u.claimedOf.call(uintcGhwfy, {from: accounts[3]});
		const uint256PxSks1b = await TokenDispatchRwJKg6u.claimedOf.call(uintgCF7O6c, {from: accounts[1]});
		const uint256XfYp7lU = await TokenDispatchRwJKg6u.nextClaimHeightOf.call(uintOXrVJ9, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchRwJKg6u = await TokenDispatch.new({from: accounts[3]});
		const uintNqTNfiN = BigInt("182")
		const uintxUmPCa = BigInt("62")
		const 
Y9iDAEc = await TokenDispatchRwJKg6u.teamOf.call(uintNqTNfiN, {from: accounts[4]});
		const uint256XfYp7lU = await TokenDispatchRwJKg6u.nextClaimHeightOf.call(uintxUmPCa, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchRwJKg6u = await TokenDispatch.new({from: accounts[3]});
		const uintfZP1pov = BigInt("1761")
		const addressOhcx0RS = accounts[1]
		const addressdZp7gb4 = accounts[0]
		const uintGFIuPAq = BigInt("64")
		const uint1V1kNv = BigInt("334")
		const addressk8q3ZL1 = accounts[4]
		const addressPLcLkJ = accounts[5]
		const addressF52Kk4p = await TokenDispatchRwJKg6u.approve.call(addressdZp7gb4, addressOhcx0RS, uintfZP1pov, {from: accounts[3]});
		const uint256XfYp7lU = await TokenDispatchRwJKg6u.nextClaimHeightOf.call(uintGFIuPAq, {from: accounts[1]});
		const addressPyFduaT = await TokenDispatchRwJKg6u.approve.call(addressPLcLkJ, addressk8q3ZL1, uint1V1kNv, {from: accounts[5]});
	});
})