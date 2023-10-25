const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yBhSbXR = await GAZ_ERC20.new({from: accounts[0]});
		const uintuz2dW9f = BigInt("1961")
		const addresstk7XQOk = accounts[1]
		const addresstmhMFhY = accounts[0]
		const addressY0kwmN = accounts[4]
		const uintTw5coEH = BigInt("474")
		const addressFoT2cpy = accounts[4]
		const uintMz35iW8 = BigInt("1470")
		const addressalLtZL = accounts[4]
		const addressS6BwilK = accounts[3]
		const boolQXeXbJL = await GAZ_ERC20yBhSbXR.transferFrom.call(addresstmhMFhY, addresstk7XQOk, uintuz2dW9f, {from: accounts[2]});
		const booltoRhTu6 = await GAZ_ERC20yBhSbXR.approve.call(addressY0kwmN, {from: "0x0000000000000000000000000000000000000001"});
		const boolw5SAVEG = await GAZ_ERC20yBhSbXR.transfer.call(addressFoT2cpy, uintTw5coEH, {from: accounts[0]});
		const boolwzrNifC = await GAZ_ERC20yBhSbXR.transfer.call(addressalLtZL, uintMz35iW8, {from: accounts[5]});
		const boolyBUPYRN = await GAZ_ERC20yBhSbXR.approve.call(addressS6BwilK, {from: accounts[0]});

		await expect(GAZ_ERC20yBhSbXR.transferFrom.call(addresstmhMFhY, addresstk7XQOk, uintuz2dW9f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DiRwYLp = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintK1vhciE = BigInt("514")
		const addressPP7t6xl = accounts[2]
		const uintNrT6MA = BigInt("1324")
		const addressegtB048 = accounts[0]
		const addresszvGfciW = accounts[2]
		const boolSkKxzyi = await GAZ_ERC20DiRwYLp.transfer.call(addressPP7t6xl, uintK1vhciE, {from: accounts[4]});
		const boolqNAkxrw = await GAZ_ERC20DiRwYLp.transferFrom.call(addresszvGfciW, addressegtB048, uintNrT6MA, {from: accounts[1]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Fs595F4 = await GAZ_ERC20.new({from: accounts[2]});
		const uintvEkMViq = BigInt("842")
		const addressJAaRDHO = accounts[3]
		const addressD668rfZ = accounts[1]
		const uintkVYmWTr = BigInt("574")
		const addresspndlYck = accounts[1]
		const addressnV93xsD = accounts[3]
		const uintr9IPIPr = BigInt("1717")
		const addressdyU4VsC = accounts[0]
		const boolL9R9yMZ = await GAZ_ERC20Fs595F4.approve.call(addressJAaRDHO, uintvEkMViq, {from: accounts[3]});
		const bool4cY1Kj = await GAZ_ERC20Fs595F4.approve.call(addressD668rfZ, {from: accounts[1]});
		const boolf7SFuaZ = await GAZ_ERC20Fs595F4.transferFrom.call(addressnV93xsD, addresspndlYck, uintkVYmWTr, {from: accounts[3]});
		const boolvQT67yl = await GAZ_ERC20Fs595F4.approve.call(addressdyU4VsC, uintr9IPIPr, {from: accounts[3]});

		assert.equal(boolL9R9yMZ, true)
		await expect(GAZ_ERC20Fs595F4.approve.call(addressD668rfZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20VIswjvj = await GAZ_ERC20.new({from: accounts[4]});
		const addressfBGqlUq = accounts[0]
		const addressvpQnad8 = accounts[0]
		const boolsUcyovU = await GAZ_ERC20VIswjvj.approve.call(addressfBGqlUq, {from: "0x0000000000000000000000000000000000000001"});
		const boolVxkaVkA = await GAZ_ERC20VIswjvj.approve.call(addressvpQnad8, {from: accounts[1]});

		await expect(GAZ_ERC20VIswjvj.approve.call(addressfBGqlUq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zpI5mGT = await GAZ_ERC20.new({from: accounts[4]});
		const addressJjEz9Ip = accounts[4]
		const uintUvNiTcu = BigInt("897")
		const address9UiLLn = accounts[3]
		const uintBe35sAw = BigInt("712")
		const addressUpiTIzu = accounts[0]
		const boolpbwqPP = await GAZ_ERC20zpI5mGT.approve.call(addressJjEz9Ip, {from: accounts[4]});
		const boolKoaAVci = await GAZ_ERC20zpI5mGT.transfer.call(address9UiLLn, uintUvNiTcu, {from: accounts[0]});
		const boolwVz9qeX = await GAZ_ERC20zpI5mGT.approve.call(addressUpiTIzu, uintBe35sAw, {from: accounts[4]});

		await expect(GAZ_ERC20zpI5mGT.approve.call(addressJjEz9Ip, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20SnIBOCW = await GAZ_ERC20.new({from: accounts[5]});
		const uintbWhTvb = BigInt("1827")
		const address88A5Ha = accounts[1]
		const uintIp1Ce6h = BigInt("973")
		const addressRpKDoqW = accounts[3]
		const uintXecFnns = BigInt("1770")
		const addressiiQv9AK = accounts[0]
		const boolmG7UbS3 = await GAZ_ERC20SnIBOCW.transfer.call(address88A5Ha, uintbWhTvb, {from: accounts[0]});
		const boolFoRgqoF = await GAZ_ERC20SnIBOCW.approve.call(addressRpKDoqW, uintIp1Ce6h, {from: accounts[4]});
		const boolhsRcXtQ = await GAZ_ERC20SnIBOCW.transfer.call(addressiiQv9AK, uintXecFnns, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20SnIBOCW.transfer.call(address88A5Ha, uintbWhTvb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20sxrSZnh = await GAZ_ERC20.new({from: accounts[4]});
		const addresski91D0z = accounts[1]
		const uintRXXuTp = BigInt("1173")
		const addressrSxsdXu = accounts[4]
		const uintQW26h65 = BigInt("190")
		const addresslFOHmU = "0x0000000000000000000000000000000000000001"
		const addressJXw45zE = accounts[4]
		const boolBGVr8A = await GAZ_ERC20sxrSZnh.approve.call(addresski91D0z, {from: accounts[3]});
		const boolbqmRDR = await GAZ_ERC20sxrSZnh.approve.call(addressrSxsdXu, uintRXXuTp, {from: accounts[2]});
		const boolVLMZqrA = await GAZ_ERC20sxrSZnh.transferFrom.call(addressJXw45zE, addresslFOHmU, uintQW26h65, {from: accounts[4]});

		await expect(GAZ_ERC20sxrSZnh.approve.call(addresski91D0z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20OmWCFi = await GAZ_ERC20.new({from: accounts[3]});
		const uintWNzN62d = BigInt("1153")
		const addressVycLChG = "0x0000000000000000000000000000000000000001"
		const uintWNXETOO = BigInt("1944")
		const addressnoG6tCM = accounts[4]
		const booljOZHdQb = await GAZ_ERC20OmWCFi.transfer.call(addressVycLChG, uintWNzN62d, {from: accounts[3]});
		const boolN6TUgko = await GAZ_ERC20OmWCFi.transfer.call(addressnoG6tCM, uintWNXETOO, {from: accounts[5]});

		assert.equal(booljOZHdQb, true)
		await expect(GAZ_ERC20OmWCFi.transfer.call(addressnoG6tCM, uintWNXETOO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20U3VMUHs = await GAZ_ERC20.new({from: accounts[2]});
		const uintKfobaGI = BigInt("1529")
		const addresssJbqxZo = accounts[1]
		const addresslREfU6d = accounts[1]
		const uintLJoJjOt = BigInt("318")
		const addressIptndpu = accounts[6]
		const addressr8Mtk6k = accounts[3]
		const addressIm684aF = accounts[1]
		const uintcHvocx6 = BigInt("183")
		const addressT22BHQt = accounts[2]
		const boolMNsi0tj = await GAZ_ERC20U3VMUHs.approve.call(addresssJbqxZo, uintKfobaGI, {from: accounts[3]});
		const boolhUADhk0 = await GAZ_ERC20U3VMUHs.approve.call(addresslREfU6d, {from: accounts[0]});
		const boolv0J72Ck = await GAZ_ERC20U3VMUHs.transferFrom.call(addressr8Mtk6k, addressIptndpu, uintLJoJjOt, {from: accounts[2]});
		const boolGEh1qIn = await GAZ_ERC20U3VMUHs.approve.call(addressIm684aF, {from: "0x0000000000000000000000000000000000000001"});
		const boolK1Q6ZdC = await GAZ_ERC20U3VMUHs.approve.call(addressT22BHQt, uintcHvocx6, {from: accounts[1]});

		assert.equal(boolMNsi0tj, true)
		await expect(GAZ_ERC20U3VMUHs.approve.call(addresslREfU6d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20U3VMUHs = await GAZ_ERC20.new({from: accounts[2]});
		const addressEEPNZpJ = accounts[2]
		const uinteSKVV5J = BigInt("1529")
		const addresscPwPW03 = accounts[1]
		const uintPsM2Czt = BigInt("318")
		const addressDAT65Cu = accounts[5]
		const addressLy1vveK = accounts[3]
		const addressUPYw5GV = accounts[1]
		const uintP5MJ5lk = BigInt("548")
		const addressRiBLBMD = "0x0000000000000000000000000000000000000001"
		const boolVQZ6Le1 = await GAZ_ERC20U3VMUHs.approve.call(addressEEPNZpJ, {from: accounts[2]});
		const boolMNsi0tj = await GAZ_ERC20U3VMUHs.approve.call(addresscPwPW03, uinteSKVV5J, {from: accounts[3]});
		const boolv0J72Ck = await GAZ_ERC20U3VMUHs.transferFrom.call(addressLy1vveK, addressDAT65Cu, uintPsM2Czt, {from: accounts[2]});
		const boolGEh1qIn = await GAZ_ERC20U3VMUHs.approve.call(addressUPYw5GV, {from: "0x0000000000000000000000000000000000000001"});
		const boolLSO05TT = await GAZ_ERC20U3VMUHs.approve.call(addressRiBLBMD, uintP5MJ5lk, {from: accounts[2]});

		await expect(GAZ_ERC20U3VMUHs.approve.call(addressEEPNZpJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20U3VMUHs = await GAZ_ERC20.new({from: accounts[2]});
		const addressokJxp7z = accounts[1]
		const uintXU68M8q = BigInt("318")
		const addresseWuOt6B = accounts[5]
		const addressAGgKo2c = accounts[4]
		const boolyyKAMOj = await GAZ_ERC20U3VMUHs.approve.call(addressokJxp7z, {from: accounts[5]});
		const boolv0J72Ck = await GAZ_ERC20U3VMUHs.transferFrom.call(addressAGgKo2c, addresseWuOt6B, uintXU68M8q, {from: accounts[2]});

		await expect(GAZ_ERC20U3VMUHs.approve.call(addressokJxp7z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})