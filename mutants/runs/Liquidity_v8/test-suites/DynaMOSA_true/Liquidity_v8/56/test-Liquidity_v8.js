const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringmnw1k2x = "r6XbnDrOATKb7MyBIKjHcabhHFklV7SJtXut4yfor0tNSmbmkHWTV8Bwx7FUf7po2ErCEKUrrn8DVzH2iSLx9y8IfX"
		const addressQnKtPP4 = "0x0000000000000000000000000000000000000001"
		const addressfJfVI0 = accounts[2]
		const uintnoQKVBn = BigInt("1562")
		const uintTljnzmf = BigInt("253")
		const Liquidity_v8BwfU3Ep = await Liquidity_v8.new(stringmnw1k2x, addressQnKtPP4, addressfJfVI0, uintnoQKVBn, uintTljnzmf, {from: accounts[0]});
		const addressx6TRFg = accounts[3]
		const boolFVforEM = await Liquidity_v8BwfU3Ep.emergencyWithdraw.call({from: accounts[4]});
		const addressMGRjFlF = await Liquidity_v8BwfU3Ep.transferOwnership.call(addressx6TRFg, {from: accounts[5]});
		const booluiYsOf = await Liquidity_v8BwfU3Ep.withdraw.call({from: accounts[4]});
		await Liquidity_v8BwfU3Ep.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringbYV0deq = "rhXFiM4aAuptBdsD39AK1MMMnWIT5qKRMao"
		const addressUsfdCYM = accounts[1]
		const addressADOQNYv = accounts[0]
		const uintRQEy3OQ = BigInt("536")
		const uintwsxR0T = BigInt("1416")
		const Liquidity_v8t38CWu = await Liquidity_v8.new(stringbYV0deq, addressUsfdCYM, addressADOQNYv, uintRQEy3OQ, uintwsxR0T, {from: accounts[2]});
		const uinttgiahpM = BigInt("1722")
		const uintda9jESV = BigInt("1546")
		await Liquidity_v8t38CWu.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256OQCTDo = await Liquidity_v8t38CWu.changeLockDuration.call(uinttgiahpM, {from: accounts[4]});
		await Liquidity_v8t38CWu.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint64rzp5ZcP = await Liquidity_v8t38CWu.setRate.call(uintda9jESV, {from: accounts[3]});
		const addressM9UIv4H = await Liquidity_v8t38CWu.owner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringYKPa5aJ = "kRtVCaiXP9C1zpHlfNS6RL0O3nYcbB1nHo6zQrl0Plj7Lie23oIP4z5Lsywz"
		const addressgQvWYvg = accounts[1]
		const addressrk7AOWQ = accounts[1]
		const uintpc7Ohkp = BigInt("1389")
		const uintfIo8Uhs = BigInt("1785")
		const Liquidity_v8jtAhIJ6 = await Liquidity_v8.new(stringYKPa5aJ, addressgQvWYvg, addressrk7AOWQ, uintpc7Ohkp, uintfIo8Uhs, {from: accounts[0]});
		await Liquidity_v8jtAhIJ6.onlyOwner.call({from: accounts[1]});
		await Liquidity_v8jtAhIJ6.renounceOwnership.call({from: accounts[3]});
		await Liquidity_v8jtAhIJ6.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringe2kdsV = "Wz7mGPidgN7C8nieajXVFKBdI1AuV2EStCldD1xmSz"
		const addressKlbMHWc = accounts[5]
		const addresskFdXjH = accounts[4]
		const uintlXT9oEf = BigInt("1142")
		const uinth1mr7gA = BigInt("1039")
		const Liquidity_v8DVkVYHO = await Liquidity_v8.new(stringe2kdsV, addressKlbMHWc, addresskFdXjH, uintlXT9oEf, uinth1mr7gA, {from: accounts[1]});
		const addressPecfI9P = accounts[5]
		const addressUyIMXOR = accounts[3]
		const uintpRNyc7t = BigInt("424")
		const addressW3xfkk = accounts[0]
		const uint256fG4RkKs = await Liquidity_v8DVkVYHO.calculate.call(addressPecfI9P, {from: accounts[4]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[3]});
		const boolZuVrvCP = await Liquidity_v8DVkVYHO.withdraw.call({from: accounts[1]});
		const 
GsQCvLC = await Liquidity_v8DVkVYHO._hasAllowance.call(addressW3xfkk, uintpRNyc7t, addressUyIMXOR, {from: accounts[4]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXn1UwRr = "zlaojsN9MkOhOrRCpvFvirT6wQ3sj9QHMFYS2k03fm7jciOXVZXZD29t"
		const addressZN99krR = accounts[1]
		const addressU07AzG2 = accounts[2]
		const uintzdJEYUV = BigInt("1909")
		const uintphqoiKu = BigInt("850")
		const Liquidity_v8aUdQkM3 = await Liquidity_v8.new(stringXn1UwRr, addressZN99krR, addressU07AzG2, uintzdJEYUV, uintphqoiKu, {from: accounts[1]});
		const uintLvg7q7e = BigInt("1638")
		const address50Lm2b = "0x0000000000000000000000000000000000000001"
		const addressqhvsUO2 = accounts[4]
		const addressoqGOFHG = accounts[2]
		const boolRTYMC11 = await Liquidity_v8aUdQkM3.addReward.call(uintLvg7q7e, {from: "0x0000000000000000000000000000000000000001"});
		const boolC1NEAu = await Liquidity_v8aUdQkM3.emergencyWithdraw.call({from: accounts[2]});
		const addresspAHikfd = await Liquidity_v8aUdQkM3.transferOwnership.call(address50Lm2b, {from: accounts[1]});
		const addressdKJuTA3 = await Liquidity_v8aUdQkM3.transferOwnership.call(addressqhvsUO2, {from: accounts[2]});
		const addressFrSfuFY = await Liquidity_v8aUdQkM3.transferOwnership.call(addressoqGOFHG, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgNlOaEc = "mT45Yk8xPTFUqrrivcmNAzAG1oUbgcAk"
		const addressqWoHxNl = accounts[4]
		const addressnZCrCtl = accounts[2]
		const uintboxpoo2 = BigInt("8")
		const uintPgyMV5 = BigInt("1203")
		const Liquidity_v8FnyKZpX = await Liquidity_v8.new(stringgNlOaEc, addressqWoHxNl, addressnZCrCtl, uintboxpoo2, uintPgyMV5, {from: "0x0000000000000000000000000000000000000001"});
		const uintmFerYuG = BigInt("1478")
		const address4qgL8f = accounts[1]
		const uint64xfeDKfm = await Liquidity_v8FnyKZpX.setRate.call(uintmFerYuG, {from: accounts[5]});
		const addressojoQx32 = await Liquidity_v8FnyKZpX.transferOwnership.call(address4qgL8f, {from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8FnyKZpX.onlyOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringmnw1k2x = "r6XbnDrOATKb7MyBIKjHcabhHFklV7SJtXut4yfor0tNSmbmkHWTV8Bwx7FUf7po2ErCEKUrrn8DVzH2iSLx9y8IfX"
		const addressRbeoMS = "0x0000000000000000000000000000000000000001"
		const addressmbxICy6 = accounts[2]
		const uintZYL85mx = BigInt("1562")
		const uinty5iEJnb = BigInt("253")
		const Liquidity_v8BwfU3Ep = await Liquidity_v8.new(stringmnw1k2x, addressRbeoMS, addressmbxICy6, uintZYL85mx, uinty5iEJnb, {from: accounts[0]});
		const uintWzA7Mfe = BigInt("1224")
		const addressYx04DpX = accounts[4]
		const addressyaczjB = accounts[0]
		const addresshV4oNg0 = await Liquidity_v8BwfU3Ep.owner.call({from: accounts[1]});
		const boolZbWbtG2 = await Liquidity_v8BwfU3Ep.stake.call(uintWzA7Mfe, {from: accounts[1]});
		const boolBE3VcBt = await Liquidity_v8BwfU3Ep.withdraw.call({from: accounts[5]});
		const boolFVforEM = await Liquidity_v8BwfU3Ep.emergencyWithdraw.call({from: accounts[4]});
		const addressMGRjFlF = await Liquidity_v8BwfU3Ep.transferOwnership.call(addressYx04DpX, {from: accounts[5]});
		const booluiYsOf = await Liquidity_v8BwfU3Ep.withdraw.call({from: accounts[4]});
		await Liquidity_v8BwfU3Ep.onlyOwner.call({from: accounts[2]});
		const 
LqERwe = await Liquidity_v8BwfU3Ep.userDeposits.call(addressyaczjB, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringe2kdsV = "Wz7mGPidgN7C8nieajXVFKBdI1AuV2EStCldD1xmSz"
		const addressJMBYYhJ = accounts[5]
		const addresshqhI9ig = accounts[4]
		const uintHDQEdY9 = BigInt("1142")
		const uintik06r92 = BigInt("1039")
		const Liquidity_v8DVkVYHO = await Liquidity_v8.new(stringe2kdsV, addressJMBYYhJ, addresshqhI9ig, uintHDQEdY9, uintik06r92, {from: accounts[1]});
		const addressTGRGQrk = accounts[5]
		const addressLGtzFP = accounts[3]
		const addressIwqMSdJ = accounts[3]
		const uintB9SjSgE = BigInt("424")
		const addressPoCL7NV = accounts[4]
		const uint256fG4RkKs = await Liquidity_v8DVkVYHO.calculate.call(addressTGRGQrk, {from: accounts[4]});
		const 
NNRAlxs = await Liquidity_v8DVkVYHO.userDeposits.call(addressLGtzFP, {from: accounts[2]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[3]});
		const boolZuVrvCP = await Liquidity_v8DVkVYHO.withdraw.call({from: accounts[1]});
		const 
GsQCvLC = await Liquidity_v8DVkVYHO._hasAllowance.call(addressPoCL7NV, uintB9SjSgE, addressIwqMSdJ, {from: accounts[4]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringe2kdsV = "Wz7mGPidgN7C8nieajXVFKBdI1AuV2EStCldD1xmSz"
		const addressuirY9P1 = accounts[5]
		const addressx5cyts9 = accounts[4]
		const uinti4veIG = BigInt("1142")
		const uintCfXvvP4 = BigInt("1039")
		const Liquidity_v8DVkVYHO = await Liquidity_v8.new(stringe2kdsV, addressuirY9P1, addressx5cyts9, uinti4veIG, uintCfXvvP4, {from: accounts[1]});
		const address9Ka5qz = accounts[5]
		const addresswgvDdMO = accounts[3]
		const uinttIagDEP = BigInt("424")
		const address2pBHOp = accounts[4]
		const uint256fG4RkKs = await Liquidity_v8DVkVYHO.calculate.call(address9Ka5qz, {from: accounts[4]});
		const boolZuVrvCP = await Liquidity_v8DVkVYHO.withdraw.call({from: accounts[1]});
		const 
GsQCvLC = await Liquidity_v8DVkVYHO._hasAllowance.call(address2pBHOp, uinttIagDEP, addresswgvDdMO, {from: accounts[4]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringe2kdsV = "Wz7mGPidgN7C8nieajXVFKBdI1AuV2EStCldD1xmSz"
		const addressCj7wOyV = accounts[5]
		const addressdNzaKx = accounts[4]
		const uintYrhldBF = BigInt("1142")
		const uintqqGyLTu = BigInt("1039")
		const Liquidity_v8DVkVYHO = await Liquidity_v8.new(stringe2kdsV, addressCj7wOyV, addressdNzaKx, uintYrhldBF, uintqqGyLTu, {from: accounts[1]});
		const addressWECNrRg = accounts[5]
		const uintb6X7cWr = BigInt("981")
		const addressFycKXHJ = accounts[1]
		const uintGsyAKp = BigInt("789")
		const uint256fG4RkKs = await Liquidity_v8DVkVYHO.calculate.call(addressWECNrRg, {from: accounts[4]});
		const uint256m9oCAcX = await Liquidity_v8DVkVYHO.changeLockDuration.call(uintb6X7cWr, {from: accounts[1]});
		const 
NNRAlxs = await Liquidity_v8DVkVYHO.userDeposits.call(addressFycKXHJ, {from: accounts[2]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[3]});
		const boolZuVrvCP = await Liquidity_v8DVkVYHO.withdraw.call({from: accounts[1]});
		const boollOML7hg = await Liquidity_v8DVkVYHO.stake.call(uintGsyAKp, {from: accounts[5]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[0]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringLGDI9Uk = "et4FxpqWUCKWEBVrKkFaq2sVynWaowgbJbhzAOHNfGOvAGjbKlJqb9o3nOvpUQvQNht"
		const addressXVjQEof = accounts[3]
		const addresspNmUypz = accounts[4]
		const uintlsThsjW = BigInt("594")
		const uintPsy40ZW = BigInt("1989")
		const Liquidity_v8gHyOrRV = await Liquidity_v8.new(stringLGDI9Uk, addressXVjQEof, addresspNmUypz, uintlsThsjW, uintPsy40ZW, {from: accounts[4]});
		const addressvhAHxW5 = "0x0000000000000000000000000000000000000001"
		const addresslu5Gasv = await Liquidity_v8gHyOrRV.transferOwnership.call(addressvhAHxW5, {from: accounts[4]});
		await Liquidity_v8gHyOrRV.renounceOwnership.call({from: accounts[1]});
		const boolYz9y6n3 = await Liquidity_v8gHyOrRV.withdraw.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringe2kdsV = "Wz7mGPidgN7C8nieajXVFKBdI1AuV2EStCldD1xmSz"
		const addressU45SIA8 = accounts[5]
		const addressoyeR6ap = accounts[4]
		const uinteSnkNU = BigInt("1142")
		const uinte3i14d = BigInt("1039")
		const Liquidity_v8DVkVYHO = await Liquidity_v8.new(stringe2kdsV, addressU45SIA8, addressoyeR6ap, uinteSnkNU, uinte3i14d, {from: accounts[1]});
		const addressJN1BqN = "0x0000000000000000000000000000000000000001"
		const addressUkuiup8 = accounts[3]
		const uintRc0kdKE = BigInt("1624")
		const uint256fG4RkKs = await Liquidity_v8DVkVYHO.calculate.call(addressJN1BqN, {from: accounts[4]});
		const 
NNRAlxs = await Liquidity_v8DVkVYHO.userDeposits.call(addressUkuiup8, {from: accounts[2]});
		const uint64tO4kxIl = await Liquidity_v8DVkVYHO.setRate.call(uintRc0kdKE, {from: accounts[1]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[3]});
		const boolZuVrvCP = await Liquidity_v8DVkVYHO.withdraw.call({from: accounts[1]});
		await Liquidity_v8DVkVYHO.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringbkcFfsI = "NMfAmxxgFEvQSD9nGC"
		const addressqHOd5Qj = accounts[2]
		const addressSJfU276 = accounts[2]
		const uintVTg79Lu = BigInt("1779")
		const uintJ1BgpC = BigInt("1762")
		const Liquidity_v8I1QW4je = await Liquidity_v8.new(stringbkcFfsI, addressqHOd5Qj, addressSJfU276, uintVTg79Lu, uintJ1BgpC, {from: accounts[4]});
		const addressavvMlOG = accounts[1]
		await Liquidity_v8I1QW4je.renounceOwnership.call({from: accounts[4]});
		const boollBOpDCQ = await Liquidity_v8I1QW4je.withdraw.call({from: accounts[0]});
		const boold1rtS8t = await Liquidity_v8I1QW4je.emergencyWithdraw.call({from: accounts[0]});
		const addresscUNB3rB = await Liquidity_v8I1QW4je.transferOwnership.call(addressavvMlOG, {from: "0x0000000000000000000000000000000000000001"});
		const boolUnA7icj = await Liquidity_v8I1QW4je.emergencyWithdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const boolPKZm95X = await Liquidity_v8I1QW4je.emergencyWithdraw.call({from: accounts[0]});
	});
})