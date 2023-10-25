const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenPswhTnN = await MIMOToken.new({from: accounts[0]});
		const uintUt0PMh0 = BigInt("1537")
		const uintr3qx7SP = BigInt("993")
		const uintUcNicDW = BigInt("1738")
		const addressYLSORj = accounts[3]
		const addressEceau7p = accounts[3]
		const uintoO1E4Of = BigInt("1875")
		const uint256WAiSPIE = await MIMOTokenPswhTnN.setMinFee.call(uintUt0PMh0, {from: accounts[1]});
		const uint256NGUO6Z8 = await MIMOTokenPswhTnN.setFeeRate.call(uintr3qx7SP, {from: accounts[3]});
		const boolcet5qs8 = await MIMOTokenPswhTnN.transferFrom.call(addressEceau7p, addressYLSORj, uintUcNicDW, {from: accounts[1]});
		const uint256U9GS6iK = await MIMOTokenPswhTnN.setFeeRate.call(uintoO1E4Of, {from: accounts[4]});

		await expect(MIMOTokenPswhTnN.transferFrom.call(addressEceau7p, addressYLSORj, uintUcNicDW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPY5zDPF = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uinti511nl0 = BigInt("1163")
		const addressobwJF1p = "0x0000000000000000000000000000000000000001"
		const uintjQ4DnFG = BigInt("1066")
		const uintMqnFowh = BigInt("151")
		const boolbwuH7wT = await MIMOTokenPY5zDPF.transfer.call(addressobwJF1p, uinti511nl0, {from: accounts[3]});
		const uint256s49odd = await MIMOTokenPY5zDPF.getFee.call(uintjQ4DnFG, {from: accounts[3]});
		const uint256B2CNmwR = await MIMOTokenPY5zDPF.setMinFee.call(uintMqnFowh, {from: accounts[3]});
		const uintaDnNPk0 = await MIMOTokenPY5zDPF.totalSupply.call({from: accounts[2]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenn16ZENn = await MIMOToken.new({from: accounts[0]});
		const addressBYQOlt = accounts[0]
		const addresshuCHxrx = accounts[3]
		const addressp57VOwb = accounts[3]
		const addresskjabCKG = accounts[3]
		const addressNHJZ503 = accounts[1]
		const uintXHxdYB = BigInt("1364")
		const uintyWZ9YsE = await MIMOTokenn16ZENn.balanceOf.call(addressBYQOlt, {from: accounts[1]});
		const uintSIK4ET = await MIMOTokenn16ZENn.allowance.call(addressp57VOwb, addresshuCHxrx, {from: accounts[0]});
		const uintrEuSkX = await MIMOTokenn16ZENn.allowance.call(addressNHJZ503, addresskjabCKG, {from: accounts[2]});
		const uint256whe0k1g = await MIMOTokenn16ZENn.setMinFee.call(uintXHxdYB, {from: accounts[1]});

		assert.equal(uintSIK4ET, BigInt("0"))
		assert.equal(uintrEuSkX, BigInt("0"))
		assert.equal(uintyWZ9YsE, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenfpHaXFh = await MIMOToken.new({from: accounts[1]});
		const uintKtUINqf = BigInt("1230")
		const uintO9AfFNw = BigInt("1251")
		const uintFI8XJf8 = BigInt("1977")
		const addressW8QeH9e = accounts[4]
		const addressDVruVch = accounts[0]
		const uintdvSXrSF = BigInt("773")
		const addressykZSaKy = accounts[2]
		const addressJJltldz = accounts[4]
		const addressGMXUqb6 = accounts[5]
		const uint256Usrpabf = await MIMOTokenfpHaXFh.setFeeRate.call(uintKtUINqf, {from: accounts[5]});
		const uint256OQoF8H = await MIMOTokenfpHaXFh.setFeeRate.call(uintO9AfFNw, {from: accounts[5]});
		const boolSk75pcg = await MIMOTokenfpHaXFh.transfer.call(addressW8QeH9e, uintFI8XJf8, {from: accounts[0]});
		const uintWuTozHv = await MIMOTokenfpHaXFh.balanceOf.call(addressDVruVch, {from: accounts[5]});
		const boolEINa0xd = await MIMOTokenfpHaXFh.approve.call(addressykZSaKy, uintdvSXrSF, {from: accounts[3]});
		const uintdXYmCPw = await MIMOTokenfpHaXFh.allowance.call(addressGMXUqb6, addressJJltldz, {from: accounts[3]});

		await expect(MIMOTokenfpHaXFh.transfer.call(addressW8QeH9e, uintFI8XJf8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenyKzqT0m = await MIMOToken.new({from: accounts[2]});
		const uintud2EQOU = BigInt("1823")
		const uinto08tuGz = BigInt("1382")
		const addressTkZZxZZ = accounts[2]
		const addressBwhknw0 = accounts[2]
		const uint256QVBIEeh = await MIMOTokenyKzqT0m.setMinFee.call(uintud2EQOU, {from: "0x0000000000000000000000000000000000000001"});
		const uintlLutp69 = await MIMOTokenyKzqT0m.totalSupply.call({from: accounts[3]});
		const boolrTtNQCe = await MIMOTokenyKzqT0m.transferFrom.call(addressBwhknw0, addressTkZZxZZ, uinto08tuGz, {from: accounts[0]});

		assert.equal(uintlLutp69, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenyKzqT0m.transferFrom.call(addressBwhknw0, addressTkZZxZZ, uinto08tuGz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOToken1UiLCZ = await MIMOToken.new({from: accounts[2]});
		const uintc3a3jO = BigInt("682")
		const uintJBVAF0R = BigInt("957")
		const addresssJUCLXP = accounts[3]
		const addressqORmdTk = accounts[3]
		const uintG2UpZGa = BigInt("1290")
		const address6LWWQ3 = accounts[4]
		const uint256AUQ7pd = await MIMOToken1UiLCZ.getFee.call(uintc3a3jO, {from: "0x0000000000000000000000000000000000000001"});
		const boolGMOvtzm = await MIMOToken1UiLCZ.transferFrom.call(addressqORmdTk, addresssJUCLXP, uintJBVAF0R, {from: accounts[1]});
		const uint256V01IwW = await MIMOToken1UiLCZ.getFee.call(uintG2UpZGa, {from: accounts[2]});
		const uintjb3eL6J = await MIMOToken1UiLCZ.balanceOf.call(address6LWWQ3, {from: accounts[4]});

		assert.equal(uint256AUQ7pd, BigInt("50000000000000000"))
		await expect(MIMOToken1UiLCZ.transferFrom.call(addressqORmdTk, addresssJUCLXP, uintJBVAF0R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokeno7LlT07 = await MIMOToken.new({from: accounts[5]});
		const addressQUUJ3LD = accounts[4]
		const address4MUgRC = accounts[0]
		const uintxqgJ9L4 = BigInt("308")
		const addressUav1Yb = accounts[3]
		const addressmYMEsIC = accounts[1]
		const addressKx464p = accounts[0]
		const addressgQawm5y = accounts[3]
		const uintttdFZe9 = await MIMOTokeno7LlT07.allowance.call(address4MUgRC, addressQUUJ3LD, {from: accounts[0]});
		const boolSLnvGMZ = await MIMOTokeno7LlT07.approve.call(addressUav1Yb, uintxqgJ9L4, {from: accounts[5]});
		const uintoLBEgSb = await MIMOTokeno7LlT07.allowance.call(addressKx464p, addressmYMEsIC, {from: "0x0000000000000000000000000000000000000001"});
		const uinttAXLdL7 = await MIMOTokeno7LlT07.balanceOf.call(addressgQawm5y, {from: accounts[4]});

		assert.equal(boolSLnvGMZ, true)
		assert.equal(uintoLBEgSb, BigInt("0"))
		assert.equal(uinttAXLdL7, BigInt("0"))
		assert.equal(uintttdFZe9, BigInt("0"))
	});
})