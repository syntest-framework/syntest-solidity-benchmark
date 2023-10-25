const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchmvZZ8tR = await TokenDispatch.new({from: accounts[2]});
		const uintsGsc1vP = BigInt("183")
		const uintm1smtPt = BigInt("109")
		const uintqy8AbZE = BigInt("88")
		const uint256KCMoXlm = await TokenDispatchmvZZ8tR.balanceOf.call(uintsGsc1vP, {from: accounts[4]});
		const uint256k2BXKNy = await TokenDispatchmvZZ8tR.nextClaimHeightOf.call(uintm1smtPt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZpT09Rr = await TokenDispatchmvZZ8tR.balanceOf.call(uintqy8AbZE, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchj7m3xM7 = await TokenDispatch.new({from: accounts[1]});
		const uintP4W35J8 = BigInt("179")
		const uintTNkKgh = BigInt("199")
		const uintMuVUrVI = BigInt("92")
		const uint8u6lMSnc = await TokenDispatchj7m3xM7.claim.call(uintP4W35J8, {from: accounts[2]});
		const 
QrU0DUY = await TokenDispatchj7m3xM7.teamOf.call(uintTNkKgh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NPsRgWu = await TokenDispatchj7m3xM7.claimedOf.call(uintMuVUrVI, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchdQ9UmAO = await TokenDispatch.new({from: accounts[2]});
		const uintK6AxW3 = BigInt("247")
		const uintvjUwaLp = BigInt("78")
		const addressJNrp6k3 = accounts[3]
		const addressnNfOaJf = accounts[5]
		const uintnjil9v = BigInt("92")
		const uintaWSgmr8 = BigInt("240")
		const uintF48VeQx = BigInt("65")
		const uint256rlFdQiv = await TokenDispatchdQ9UmAO.claimedOf.call(uintK6AxW3, {from: accounts[0]});
		const uint256nMdCiXd = await TokenDispatchdQ9UmAO.claimedOf.call(uintvjUwaLp, {from: accounts[3]});
		const uint256t3eNH0o = await TokenDispatchdQ9UmAO.updateTeam.call(uintnjil9v, addressnNfOaJf, addressJNrp6k3, {from: accounts[1]});
		const uint256oQpVQR = await TokenDispatchdQ9UmAO.claimedOf.call(uintaWSgmr8, {from: accounts[3]});
		const uint256hlUzTxL = await TokenDispatchdQ9UmAO.nextClaimHeightOf.call(uintF48VeQx, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchhBbmyx2 = await TokenDispatch.new({from: accounts[2]});
		const uintrvlaSpQ = BigInt("143")
		const addressDPJ7Lce = accounts[0]
		const addressdliyHhX = accounts[1]
		const uintjGTHoo = BigInt("207")
		const uintmAuPCoq = BigInt("1")
		const uintXm9lCQ = BigInt("78")
		const uint256VcyFwMf = await TokenDispatchhBbmyx2.nextClaimHeightOf.call(uintrvlaSpQ, {from: accounts[5]});
		const uint256EF0kD4l = await TokenDispatchhBbmyx2.updateTeam.call(uintjGTHoo, addressdliyHhX, addressDPJ7Lce, {from: accounts[0]});
		const 
wGyvYEk = await TokenDispatchhBbmyx2.teamOf.call(uintmAuPCoq, {from: accounts[4]});
		const uint256s9s8ntI = await TokenDispatchhBbmyx2.balanceOf.call(uintXm9lCQ, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchKhaVpsL = await TokenDispatch.new({from: accounts[4]});
		const uintAJHwD3D = BigInt("152")
		const uintvkmgihd = BigInt("136")
		const addresscy5POV = accounts[2]
		const addressCZNEOqY = accounts[4]
		const uintUHFJvbj = BigInt("159")
		const 
La9MWz = await TokenDispatchKhaVpsL.teamOf.call(uintAJHwD3D, {from: accounts[0]});
		const uint256ZU31qM3 = await TokenDispatchKhaVpsL.claimedOf.call(uintvkmgihd, {from: accounts[4]});
		const uint256VS5j5rl = await TokenDispatchKhaVpsL.updateTeam.call(uintUHFJvbj, addressCZNEOqY, addresscy5POV, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchteJfWUq = await TokenDispatch.new({from: accounts[0]});
		const addressUmasSSe = accounts[3]
		const addressAZ6Z1xN = accounts[1]
		const uintJuMmYa5 = BigInt("28")
		const uintouax0dm = BigInt("114")
		const uintGszztqt = BigInt("384")
		const addresse9NMy8A = accounts[5]
		const addressrweI8Ez = accounts[4]
		const uintyIYJMb = BigInt("44")
		const addressekb36gG = accounts[0]
		const addressfRYDEBu = accounts[4]
		const uint256KWzabR = await TokenDispatchteJfWUq.updateTeam.call(uintJuMmYa5, addressAZ6Z1xN, addressUmasSSe, {from: accounts[0]});
		const uint256eLaPDjx = await TokenDispatchteJfWUq.balanceOf.call(uintouax0dm, {from: accounts[0]});
		const addresswr3NaBj = await TokenDispatchteJfWUq.approve.call(addressrweI8Ez, addresse9NMy8A, uintGszztqt, {from: "0x0000000000000000000000000000000000000001"});
		const addressjNiKYJD = await TokenDispatchteJfWUq.approve.call(addressfRYDEBu, addressekb36gG, uintyIYJMb, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchj7m3xM7 = await TokenDispatch.new({from: accounts[1]});
		const uintcGiGKOk = BigInt("1977")
		const addressApOrfg = accounts[5]
		const addresstmhEZto = accounts[2]
		const uintefAM6vl = BigInt("36")
		const uintU8vwPlk = BigInt("917")
		const uintO5AD1Md = BigInt("152")
		const addresspJtwJpl = await TokenDispatchj7m3xM7.approve.call(addresstmhEZto, addressApOrfg, uintcGiGKOk, {from: accounts[3]});
		const uint256c7Ocr64 = await TokenDispatchj7m3xM7.nextClaimHeightOf.call(uintefAM6vl, {from: accounts[3]});
		const uintlbImYGU = await TokenDispatchj7m3xM7.signTransaction.call(uintU8vwPlk, {from: accounts[1]});
		const uint8u6lMSnc = await TokenDispatchj7m3xM7.claim.call(uintO5AD1Md, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchj7m3xM7 = await TokenDispatch.new({from: accounts[1]});
		const uintpV1w0uV = BigInt("123")
		const addressSMTCVk9 = accounts[2]
		const addressHM0MA2k = accounts[1]
		const uintozmW7jL = BigInt("116")
		const uintK4lsWoR = BigInt("179")
		const uintNnKtmt6 = BigInt("99")
		const uintu4fwycn = BigInt("90")
		const addressMjrng55 = await TokenDispatchj7m3xM7.approve.call(addressHM0MA2k, addressSMTCVk9, uintpV1w0uV, {from: accounts[1]});
		const uint256yRbSe9o = await TokenDispatchj7m3xM7.balanceOf.call(uintozmW7jL, {from: accounts[4]});
		const uint8u6lMSnc = await TokenDispatchj7m3xM7.claim.call(uintK4lsWoR, {from: accounts[2]});
		const uint256NPsRgWu = await TokenDispatchj7m3xM7.claimedOf.call(uintNnKtmt6, {from: accounts[4]});
		const uint8MViyf3u = await TokenDispatchj7m3xM7.claim.call(uintu4fwycn, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchqVDYTW0 = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUCFT6Y9 = BigInt("35")
		const uintQiRHJWh = BigInt("43")
		const uintQO1u2iT = BigInt("175")
		const uintNtSIZQ0 = BigInt("75")
		const uint8j2EI4nK = await TokenDispatchqVDYTW0.claim.call(uintUCFT6Y9, {from: accounts[2]});
		const uint256awhHGaW = await TokenDispatchqVDYTW0.nextClaimHeightOf.call(uintQiRHJWh, {from: accounts[3]});
		const uint256vgVanyU = await TokenDispatchqVDYTW0.balanceOf.call(uintQO1u2iT, {from: accounts[1]});
		const uint256dIMZcbK = await TokenDispatchqVDYTW0.claimedOf.call(uintNtSIZQ0, {from: accounts[0]});
	});
})