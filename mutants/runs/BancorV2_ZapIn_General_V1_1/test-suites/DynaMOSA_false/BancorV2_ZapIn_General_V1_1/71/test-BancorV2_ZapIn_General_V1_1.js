const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintBE5HFT = BigInt("797")
		const BancorV2_ZapIn_General_V1_1GPtLpcp = await BancorV2_ZapIn_General_V1_1.new(uintBE5HFT, {from: accounts[2]});
		const uintAF7lIps = BigInt("119")
		const addressJw3sjU = accounts[3]
		const uint16fchrKYo = await BancorV2_ZapIn_General_V1_1GPtLpcp.set_new_goodwill.call(uintAF7lIps, {from: accounts[2]});
		const addressUPS7fQi = await BancorV2_ZapIn_General_V1_1GPtLpcp.inCaseTokengetsStuck.call(addressJw3sjU, {from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1GPtLpcp.stopInEmergency.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1GPtLpcp.inCaseTokengetsStuck.call(addressJw3sjU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintqb7vFuh = BigInt("1596")
		const BancorV2_ZapIn_General_V1_1iWRtuU1 = await BancorV2_ZapIn_General_V1_1.new(uintqb7vFuh, {from: accounts[0]});
		const addressI24KNlm = accounts[1]
		const addressSsnDDLu = accounts[3]
		const byteE1D1JiE = "0x011c090512100020150c1b0f"
		const addressl69v1lP = accounts[4]
		const addressYffu1rh = accounts[0]
		const uintL7suPDB = BigInt("334")
		const uintyCDnM8K = BigInt("362")
		const address5I8VIh = accounts[4]
		const addressg5LsKQu = "0x0000000000000000000000000000000000000001"
		const addressHWg81C = accounts[0]
		const byteYnRlde2 = "0x0620171204090d0d1f1c091c02201d14181b17141b0b14071b1e04071c0a0f0d"
		const addressL2dEd5q = accounts[0]
		const addressmJmi7Z = accounts[1]
		const uintqEfvgTa = BigInt("1081")
		const uintfgAtPfM = BigInt("1494")
		const addressvQlt46V = accounts[0]
		const addressuE8UAlB = accounts[1]
		const addressFY4rOD = accounts[0]
		const addressnz4e5oW = await BancorV2_ZapIn_General_V1_1iWRtuU1.toPayable.call(addressI24KNlm, {from: accounts[4]});
		const addressOS0LQJ4 = await BancorV2_ZapIn_General_V1_1iWRtuU1.toPayable.call(addressSsnDDLu, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1iWRtuU1.renounceOwnership.call({from: accounts[4]});
		const uint256aqnJwFZ = await BancorV2_ZapIn_General_V1_1iWRtuU1.ZapInSingleSided.call(addressHWg81C, addressg5LsKQu, address5I8VIh, uintyCDnM8K, uintL7suPDB, addressYffu1rh, addressl69v1lP, byteE1D1JiE, {from: accounts[1]});
		const uint256de3RMa = await BancorV2_ZapIn_General_V1_1iWRtuU1.ZapInSingleSided.call(addressFY4rOD, addressuE8UAlB, addressvQlt46V, uintfgAtPfM, uintqEfvgTa, addressmJmi7Z, addressL2dEd5q, byteYnRlde2, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1iWRtuU1.toPayable.call(addressI24KNlm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintlj8oPdS = BigInt("1783")
		const BancorV2_ZapIn_General_V1_1MZC6CGr = await BancorV2_ZapIn_General_V1_1.new(uintlj8oPdS, {from: "0x0000000000000000000000000000000000000001"});
		const addressZccTJyF = accounts[3]
		const addressH7MtumQ = await BancorV2_ZapIn_General_V1_1MZC6CGr.inCaseTokengetsStuck.call(addressZccTJyF, {from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1MZC6CGr.renounceOwnership.call({from: accounts[1]});
		const boolStqDhM7 = await BancorV2_ZapIn_General_V1_1MZC6CGr.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintv495Yf7 = BigInt("1210")
		const BancorV2_ZapIn_General_V1_1J3xZpYJ = await BancorV2_ZapIn_General_V1_1.new(uintv495Yf7, {from: accounts[4]});
		const byteW5kVsis = "0x19170b070c0b000a"
		const addressRHZw1iE = accounts[5]
		const addressr2Hq5rr = accounts[1]
		const uint846m2p = BigInt("1683")
		const uinthTvb7vZ = BigInt("677")
		const addressympr0C = accounts[3]
		const addressOvdHUMh = accounts[4]
		const addressafu8Bx = accounts[4]
		const uinta4TGiOd = BigInt("1355")
		const uint256jnFdF2g = await BancorV2_ZapIn_General_V1_1J3xZpYJ.ZapInSingleSided.call(addressafu8Bx, addressOvdHUMh, addressympr0C, uinthTvb7vZ, uint846m2p, addressr2Hq5rr, addressRHZw1iE, byteW5kVsis, {from: accounts[3]});
		const uint16gri76RT = await BancorV2_ZapIn_General_V1_1J3xZpYJ.set_new_goodwill.call(uinta4TGiOd, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1J3xZpYJ.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1J3xZpYJ.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1J3xZpYJ.ZapInSingleSided.call(addressafu8Bx, addressOvdHUMh, addressympr0C, uinthTvb7vZ, uint846m2p, addressr2Hq5rr, addressRHZw1iE, byteW5kVsis, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintDaqCXvF = BigInt("1210")
		const BancorV2_ZapIn_General_V1_1J3xZpYJ = await BancorV2_ZapIn_General_V1_1.new(uintDaqCXvF, {from: accounts[4]});
		const uinttkohseh = BigInt("1355")
		const addressN8pkq44 = accounts[4]
		await BancorV2_ZapIn_General_V1_1J3xZpYJ.withdraw.call({from: accounts[4]});
		const uint16gri76RT = await BancorV2_ZapIn_General_V1_1J3xZpYJ.set_new_goodwill.call(uinttkohseh, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1J3xZpYJ.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const addressm17GxPV = await BancorV2_ZapIn_General_V1_1J3xZpYJ.transferOwnership.call(addressN8pkq44, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1J3xZpYJ.renounceOwnership.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1J3xZpYJ.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJomUGJ9 = BigInt("1210")
		const BancorV2_ZapIn_General_V1_1J3xZpYJ = await BancorV2_ZapIn_General_V1_1.new(uintJomUGJ9, {from: accounts[4]});
		const uinttVUJTcD = BigInt("1355")
		const addressbPZjsQo = "0x0000000000000000000000000000000000000001"
		const addressnqbRsUl = await BancorV2_ZapIn_General_V1_1J3xZpYJ.owner.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1J3xZpYJ.toggleContractActive.call({from: accounts[4]});
		const uint16gri76RT = await BancorV2_ZapIn_General_V1_1J3xZpYJ.set_new_goodwill.call(uinttVUJTcD, {from: accounts[4]});
		const addresss8Iqkh8 = await BancorV2_ZapIn_General_V1_1J3xZpYJ.transferOwnership.call(addressbPZjsQo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressnqbRsUl, 0xea20bBb7F5af4FA3430ee8BCC6Fed05E87FE39De)
		await expect(BancorV2_ZapIn_General_V1_1J3xZpYJ.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQ5TJ6W = BigInt("171")
		const BancorV2_ZapIn_General_V1_1QT2kx5r = await BancorV2_ZapIn_General_V1_1.new(uintQ5TJ6W, {from: accounts[1]});
		const addressjRjNPyT = "0x0000000000000000000000000000000000000001"
		const addressbuOjDwg = accounts[3]
		const byteTsfvhY = "0x030f0d1611"
		const addressNpspSu7 = accounts[2]
		const addressiaxw9PO = accounts[2]
		const uintZmQofZS = BigInt("2021")
		const uintfFlZFxP = BigInt("679")
		const addressKUpbp3h = accounts[3]
		const addressZk9JC15 = accounts[4]
		const addressLEiuHoT = accounts[4]
		const addressRITprJe = await BancorV2_ZapIn_General_V1_1QT2kx5r.inCaseTokengetsStuck.call(addressjRjNPyT, {from: accounts[1]});
		const boolDPwLyui = await BancorV2_ZapIn_General_V1_1QT2kx5r.isOwner.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1QT2kx5r.withdraw.call({from: accounts[2]});
		const addressfTyqQ5K = await BancorV2_ZapIn_General_V1_1QT2kx5r.inCaseTokengetsStuck.call(addressbuOjDwg, {from: accounts[3]});
		const uint256P8lzNl = await BancorV2_ZapIn_General_V1_1QT2kx5r.ZapInSingleSided.call(addressLEiuHoT, addressZk9JC15, addressKUpbp3h, uintfFlZFxP, uintZmQofZS, addressiaxw9PO, addressNpspSu7, byteTsfvhY, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1QT2kx5r.inCaseTokengetsStuck.call(addressjRjNPyT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYlZBqc3 = BigInt("1915")
		const BancorV2_ZapIn_General_V1_1pZwY22 = await BancorV2_ZapIn_General_V1_1.new(uintYlZBqc3, {from: accounts[1]});
		const uintwTwd762 = BigInt("1854")
		await BancorV2_ZapIn_General_V1_1pZwY22.renounceOwnership.call({from: accounts[1]});
		const uint16YXmzWjc = await BancorV2_ZapIn_General_V1_1pZwY22.set_new_goodwill.call(uintwTwd762, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1pZwY22.toggleContractActive.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1pZwY22.renounceOwnership.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1pZwY22.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintGrvGeM4 = BigInt("1210")
		const BancorV2_ZapIn_General_V1_1J3xZpYJ = await BancorV2_ZapIn_General_V1_1.new(uintGrvGeM4, {from: accounts[4]});
		const addressLggvXj = accounts[3]
		const byteec9eapZ = "0x19170b070c0b000a"
		const addressyqK4Vvu = accounts[5]
		const addresswNat3qA = accounts[1]
		const uintfkAofjJ = BigInt("1683")
		const uintcbbYBYz = BigInt("677")
		const addressI0SXGpj = accounts[4]
		const addressIGxk8kZ = accounts[4]
		const addressNU0Viv1 = accounts[4]
		const addressVMmAHi = await BancorV2_ZapIn_General_V1_1J3xZpYJ.transferOwnership.call(addressLggvXj, {from: accounts[4]});
		const uint256jnFdF2g = await BancorV2_ZapIn_General_V1_1J3xZpYJ.ZapInSingleSided.call(addressNU0Viv1, addressIGxk8kZ, addressI0SXGpj, uintcbbYBYz, uintfkAofjJ, addresswNat3qA, addressyqK4Vvu, byteec9eapZ, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1J3xZpYJ.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1J3xZpYJ.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1J3xZpYJ.ZapInSingleSided.call(addressNU0Viv1, addressIGxk8kZ, addressI0SXGpj, uintcbbYBYz, uintfkAofjJ, addresswNat3qA, addressyqK4Vvu, byteec9eapZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})