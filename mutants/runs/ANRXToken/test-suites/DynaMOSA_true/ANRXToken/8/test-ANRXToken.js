const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintEupQCj = BigInt("1679")
		const stringlxzzSYd = "Z6MVzEFaZusjMBr3KIP13bquxlRY1lvzrYWanVECawwLmHERo5OEq8DrxIqgsimvH"
		const stringi7EEjfe = "X8X3mTLGesBv1BLGJVru4kO19Fqw4"
		const uintjO02CWP = BigInt("120")
		const ANRXTokenaz4KCiO = await ANRXToken.new(uintEupQCj, stringlxzzSYd, stringi7EEjfe, uintjO02CWP, {from: accounts[0]});
		const uintdgUClU8 = BigInt("1503")
		const uintRBPY6sZ = await ANRXTokenaz4KCiO.totalSupply.call({from: accounts[3]});
		const uinti0hpLAV = await ANRXTokenaz4KCiO.redeem.call(uintdgUClU8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintRBPY6sZ, BigInt("1679"))
		await expect(ANRXTokenaz4KCiO.redeem.call(uintdgUClU8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintCLGOtQJ = BigInt("363")
		const stringQjobd9V = "DDaSVbc102XMpFd"
		const stringGP9zhI3 = "GvXs6UODDW5YxfCMWMRthVB9XZG"
		const uintbsYtyyX = BigInt("637")
		const ANRXTokenC0gx2nA = await ANRXToken.new(uintCLGOtQJ, stringQjobd9V, stringGP9zhI3, uintbsYtyyX, {from: accounts[5]});
		const addressiagMZy7 = accounts[4]
		const addressb9Iz0f = accounts[2]
		const uintapgyy4x = BigInt("224")
		const addressTKQegfy = accounts[2]
		const addresscKV3gyB = accounts[3]
		const uintzpsJkG = BigInt("416")
		const addressHpXVShd = accounts[5]
		const uintk96Pumh = await ANRXTokenC0gx2nA.allowance.call(addressb9Iz0f, addressiagMZy7, {from: accounts[3]});
		const boolhGUX6h = await ANRXTokenC0gx2nA.transferFrom.call(addresscKV3gyB, addressTKQegfy, uintapgyy4x, {from: accounts[2]});
		const boolm1gGtDg = await ANRXTokenC0gx2nA.transfer.call(addressHpXVShd, uintzpsJkG, {from: accounts[3]});

		assert.equal(uintk96Pumh, BigInt("0"))
		await expect(ANRXTokenC0gx2nA.transferFrom.call(addresscKV3gyB, addressTKQegfy, uintapgyy4x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintqeo0QQ2 = BigInt("1978")
		const stringVscvNOu = "nEZf4uIVByhfe8eEOCBsMLaqDrfwsKOWxaofrFwVtWO4NgNGvrfaDJ9aGPBN6JE6A2cEdNWXmtPdX"
		const stringGe1ttLq = "d7PLJuBJv0xv8YhKpB3CGmOYk0gNOiqfcv3LDZjLDWhqQ9sXE8NWgO"
		const uintsuyojtK = BigInt("1701")
		const ANRXTokenPvpFPg = await ANRXToken.new(uintqeo0QQ2, stringVscvNOu, stringGe1ttLq, uintsuyojtK, {from: accounts[0]});
		const uintRjre6lM = BigInt("1649")
		const addressHdhnbYg = accounts[1]
		const addressQ31LJKZ = accounts[4]
		const addresszCe6vgj = "0x0000000000000000000000000000000000000001"
		const uintntr8LkJ = BigInt("1794")
		const addressPUaaB81 = accounts[2]
		const uinte675WZX = BigInt("88")
		const uintCg216ea = BigInt("1652")
		const addresshtJJ4z = accounts[4]
		const boolaVqOkW = await ANRXTokenPvpFPg.approve.call(addressHdhnbYg, uintRjre6lM, {from: accounts[3]});
		const uintuBhCEkr = await ANRXTokenPvpFPg.allowance.call(addresszCe6vgj, addressQ31LJKZ, {from: accounts[1]});
		const boolTjPIA2C = await ANRXTokenPvpFPg.approve.call(addressPUaaB81, uintntr8LkJ, {from: accounts[2]});
		const uintuh4nbXB = await ANRXTokenPvpFPg.setParams.call(uintCg216ea, uinte675WZX, {from: accounts[0]});
		const addressXm0QatQ = await ANRXTokenPvpFPg.deprecate.call(addresshtJJ4z, {from: accounts[2]});

		assert.equal(boolTjPIA2C, true)
		assert.equal(boolaVqOkW, true)
		assert.equal(uintuBhCEkr, BigInt("0"))
		await expect(ANRXTokenPvpFPg.setParams.call(uintCg216ea, uinte675WZX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintG2aT52T = BigInt("789")
		const stringLNVAZB = "xYI6PE2CT04CKcvXcLeUZMVuL1tql0IxyJlmcIjWI2uxLpC3W4lIxdav7FpvxteYkmBs4NqxCEwHmvrhnwuH7xvt5Y"
		const stringsK6ceMV = "bKoo3RzPiHgu5CAfjYbuWb0Szr2ny2eAbBSGetxXiza4dBqmijyLtMWgmXHbNxgBNwrr3jW"
		const uintYSn86Vl = BigInt("1510")
		const ANRXTokenwwXVjIM = await ANRXToken.new(uintG2aT52T, stringLNVAZB, stringsK6ceMV, uintYSn86Vl, {from: accounts[4]});
		const addressjbjizk9 = accounts[2]
		const addressx9pIa0 = accounts[5]
		const uintpIwmLW5 = BigInt("909")
		const addressvUnPzT4 = accounts[2]
		const uintIf8wHCc = await ANRXTokenwwXVjIM.totalSupply.call({from: accounts[4]});
		const uintQex39WJ = await ANRXTokenwwXVjIM.allowance.call(addressx9pIa0, addressjbjizk9, {from: accounts[3]});
		const boolk0LBskL = await ANRXTokenwwXVjIM.transfer.call(addressvUnPzT4, uintpIwmLW5, {from: accounts[5]});

		assert.equal(uintIf8wHCc, BigInt("789"))
		assert.equal(uintQex39WJ, BigInt("0"))
		await expect(ANRXTokenwwXVjIM.transfer.call(addressvUnPzT4, uintpIwmLW5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintgWpRH1F = BigInt("262")
		const stringoCiKiXR = "1jshDa64931x8MUUgKoteGNt6qfk9fwf8Xx1hDsMMAmtXruWXgxtlHBEZqOilxqFN1J1AeskEIDGdxXl5OcMbk"
		const stringQu5qzmA = "sNHE5HKtU1PmnzdvLSLXjwm9F4wV5IzTCYjmt2aVcWURH4pOpL"
		const uintpfRl147 = BigInt("1027")
		const ANRXTokeno1zxfQ = await ANRXToken.new(uintgWpRH1F, stringoCiKiXR, stringQu5qzmA, uintpfRl147, {from: "0x0000000000000000000000000000000000000001"});
		const uintTOdD0Ee = BigInt("834")
		const uintbsVoCEI = BigInt("841")
		const addressmldJVSv = accounts[1]
		const addressvQP7G0d = accounts[2]
		const addressjsM2vZP = accounts[5]
		const uintbuUFhIt = await ANRXTokeno1zxfQ.setParams.call(uintbsVoCEI, uintTOdD0Ee, {from: accounts[4]});
		const uintKGtvCKX = await ANRXTokeno1zxfQ.allowance.call(addressvQP7G0d, addressmldJVSv, {from: accounts[1]});
		const addresslJl345X = await ANRXTokeno1zxfQ.deprecate.call(addressjsM2vZP, {from: accounts[2]});
	});

	it('test for ANRXToken', async () => {
		const uint0h4btR = BigInt("571")
		const stringLrXT09 = "wM20em7SoDKEkoFejcWQU3gvHisP3HlJRpv7DSHoYUat0nUavAgES"
		const string1kofzd = "VQZ0RjOdtmuZLumn1Dljeik9yjeNZdnpktNpuVazm40K3NhApsbg84d7QQslvH13m5"
		const uintLkPLM7l = BigInt("1815")
		const ANRXTokenGYrJw6V = await ANRXToken.new(uint0h4btR, stringLrXT09, string1kofzd, uintLkPLM7l, {from: accounts[4]});
		const addresspsKUJfB = accounts[0]
		const uintwPx8lH6 = BigInt("2021")
		const uintSXf0zCT = BigInt("1789")
		const addresslXt12uk = accounts[2]
		const addresszfJhq9I = await ANRXTokenGYrJw6V.deprecate.call(addresspsKUJfB, {from: accounts[4]});
		const uinttFE2pq6 = await ANRXTokenGYrJw6V.redeem.call(uintwPx8lH6, {from: accounts[2]});
		const uintAgiZWaJ = await ANRXTokenGYrJw6V.issue.call(uintSXf0zCT, {from: accounts[2]});
		const uintoZv2iYM = await ANRXTokenGYrJw6V.balanceOf.call(addresslXt12uk, {from: accounts[4]});

		await expect(ANRXTokenGYrJw6V.redeem.call(uintwPx8lH6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintLSSWWnB = BigInt("363")
		const stringQjobd9V = "DDaSVbc102XMpFd"
		const stringGP9zhI3 = "GvXs6UODDW5YxfCMWMRthVB9XZG"
		const uintdSzAk2s = BigInt("637")
		const ANRXTokenC0gx2nA = await ANRXToken.new(uintLSSWWnB, stringQjobd9V, stringGP9zhI3, uintdSzAk2s, {from: accounts[5]});
		const addressLms9SvZ = accounts[4]
		const addressh0oNYxU = accounts[2]
		const addressXHVY8V = accounts[3]
		const uintmbWNskf = BigInt("216")
		const addresst8ais8h = accounts[2]
		const addressnsEQSDS = accounts[3]
		const uintu4Bg3IH = BigInt("416")
		const address97P5II = accounts[5]
		const uintk96Pumh = await ANRXTokenC0gx2nA.allowance.call(addressh0oNYxU, addressLms9SvZ, {from: accounts[3]});
		const uintSOoKWXQ = await ANRXTokenC0gx2nA.balanceOf.call(addressXHVY8V, {from: accounts[1]});
		const boolhGUX6h = await ANRXTokenC0gx2nA.transferFrom.call(addressnsEQSDS, addresst8ais8h, uintmbWNskf, {from: accounts[2]});
		const boolm1gGtDg = await ANRXTokenC0gx2nA.transfer.call(address97P5II, uintu4Bg3IH, {from: accounts[3]});

		assert.equal(uintSOoKWXQ, BigInt("0"))
		assert.equal(uintk96Pumh, BigInt("0"))
		await expect(ANRXTokenC0gx2nA.transferFrom.call(addressnsEQSDS, addresst8ais8h, uintmbWNskf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintiZ9RHwV = BigInt("1978")
		const stringVscvNOu = "nEZf4uIVByhfe8eEOCBsMLaqDrfwsKOWxaofrFwVtWO4NgNGvrfaDJ9aGPBN6JE6A2cEdNWXmtPdX"
		const stringGe1ttLq = "d7PLJuBJv0xv8YhKpB3CGmOYk0gNOiqfcv3LDZjLDWhqQ9sXE8NWgO"
		const uintRFIdrzX = BigInt("1701")
		const ANRXTokenPvpFPg = await ANRXToken.new(uintiZ9RHwV, stringVscvNOu, stringGe1ttLq, uintRFIdrzX, {from: accounts[0]});
		const uintieu9cdS = BigInt("1648")
		const uintU7w1IOD = BigInt("1111")
		const uintYW402V = BigInt("1669")
		const uintj9K3iqJ = await ANRXTokenPvpFPg.issue.call(uintieu9cdS, {from: accounts[0]});
		const uintuh4nbXB = await ANRXTokenPvpFPg.setParams.call(uintYW402V, uintU7w1IOD, {from: accounts[0]});

		await expect(ANRXTokenPvpFPg.setParams.call(uintYW402V, uintU7w1IOD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintxyJ5fVy = BigInt("1978")
		const stringVscvNOu = "nEZf4uIVByhfe8eEOCBsMLaqDrfwsKOWxaofrFwVtWO4NgNGvrfaDJ9aGPBN6JE6A2cEdNWXmtPdX"
		const stringGe1ttLq = "d7PLJuBJv0xv8YhKpB3CGmOYk0gNOiqfcv3LDZjLDWhqQ9sXE8NWgO"
		const uinty26dJrQ = BigInt("1701")
		const ANRXTokenPvpFPg = await ANRXToken.new(uintxyJ5fVy, stringVscvNOu, stringGe1ttLq, uinty26dJrQ, {from: accounts[0]});
		const uintBHHQkVA = BigInt("141")
		const addressPeCktm = accounts[1]
		const uintvwTsW0A = BigInt("1111")
		const uintToIpP0x = BigInt("1673")
		const uintOelOVRs = BigInt("932")
		const uintPTigjwV = await ANRXTokenPvpFPg.redeem.call(uintBHHQkVA, {from: accounts[0]});
		const uints8DJ9rg = await ANRXTokenPvpFPg.balanceOf.call(addressPeCktm, {from: accounts[1]});
		const uintuh4nbXB = await ANRXTokenPvpFPg.setParams.call(uintToIpP0x, uintvwTsW0A, {from: accounts[0]});
		const uintEaw6LdU = await ANRXTokenPvpFPg.redeem.call(uintOelOVRs, {from: accounts[0]});
		const uintT5KtCLd = await ANRXTokenPvpFPg.totalSupply.call({from: accounts[2]});

		assert.equal(uints8DJ9rg, BigInt("0"))
		await expect(ANRXTokenPvpFPg.setParams.call(uintToIpP0x, uintvwTsW0A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})