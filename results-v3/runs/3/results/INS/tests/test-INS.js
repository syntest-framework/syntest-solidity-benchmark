const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintFc9zubw = BigInt("304")
		const stringLUDcnYu = "4Mn6BEpco6FM3Mtl47TwoicLdUKqLLaXQ"
		const stringQfQ2n7 = "qYE3mxuSdhhwxOxG5gKs5Ug9J6mOewApdTFlGtXq4yrxEPvKODF0"
		const INSw8SLKiu = await INS.new(uintFc9zubw, stringLUDcnYu, stringQfQ2n7, {from: accounts[3]});
		const uintwsPk35I = BigInt("1825")
		const uintSviKSJR = BigInt("772")
		const addresseAIgQpp = accounts[3]
		const uintUnBXrFb = BigInt("1226")
		const uintr3nRQvD = BigInt("950")
		const addressygxUDlB = accounts[0]
		const addressEna8Mb9 = accounts[0]
		const boolxgrcD7Q = await INSw8SLKiu.burn.call(uintwsPk35I, {from: accounts[0]});
		const boolWEIdyOB = await INSw8SLKiu.approve.call(addresseAIgQpp, uintSviKSJR, {from: accounts[5]});
		const boolHk0Ba5B = await INSw8SLKiu.burn.call(uintUnBXrFb, {from: accounts[3]});
		const boolujzSkp = await INSw8SLKiu.transferFrom.call(addressEna8Mb9, addressygxUDlB, uintr3nRQvD, {from: accounts[3]});

		await expect(INSw8SLKiu.burn.call(uintwsPk35I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintS2CxlpP = BigInt("1418")
		const stringK82SPn6 = "bJjlS3IMdOo"
		const stringTVkt8QA = "wxilVqRBRRUJwC6bBb7LThoHEmp44fozk3USGNIsLm8ByCy8zYnoXbvs"
		const INSMnv5Du = await INS.new(uintS2CxlpP, stringK82SPn6, stringTVkt8QA, {from: accounts[2]});
		const uintScCzjnX = BigInt("1561")
		const addressHpTkt0j = accounts[0]
		const uintc0BLl8q = BigInt("558")
		const addresszwe8B3i = "0x0000000000000000000000000000000000000001"
		const byteEx7AyEq = "0x0218101c1009050b0e05131516080705121a08131f140c0b03131105100e10"
		const uintT6NjNDF = BigInt("1499")
		const addressA0pz2IN = accounts[4]
		const uintZvCoa6U = BigInt("1084")
		const addressrqV6SR5 = accounts[4]
		const addresshXEz5b2 = accounts[0]
		const uintHcn4HMD = BigInt("1978")
		const addressFRtmOAW = accounts[4]
		const boolLrZ5KkB = await INSMnv5Du.approve.call(addressHpTkt0j, uintScCzjnX, {from: accounts[3]});
		const boolYh62DGN = await INSMnv5Du.burnFrom.call(addresszwe8B3i, uintc0BLl8q, {from: accounts[3]});
		const boolhqAVKkI = await INSMnv5Du.approveAndCall.call(addressA0pz2IN, uintT6NjNDF, byteEx7AyEq, {from: accounts[3]});
		const boolgLg1tJ7 = await INSMnv5Du.transferFrom.call(addresshXEz5b2, addressrqV6SR5, uintZvCoa6U, {from: accounts[0]});
		const boolBQwKIPz = await INSMnv5Du.approve.call(addressFRtmOAW, uintHcn4HMD, {from: accounts[2]});

		assert.equal(boolLrZ5KkB, true)
		await expect(INSMnv5Du.burnFrom.call(addresszwe8B3i, uintc0BLl8q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintXtywGVG = BigInt("125")
		const stringC70N9kK = "cOaW5OULpPbPZ1yrl3hQQiXRrsJmH3ZmDv"
		const stringY8CL0eB = "zvqKA64Hfvq67wMN2HR3SHrcx4tb1hvvuvCgYxTMv9znX3ENwFELY0hOijb"
		const INSiP3CfAB = await INS.new(uintXtywGVG, stringC70N9kK, stringY8CL0eB, {from: accounts[0]});
		const bytefyCvnqV = "0x20011c0e150d0911031b041b13030d110e160b1a1f06121a08"
		const uintqTP3yN6 = BigInt("1498")
		const addressRboLr4i = accounts[3]
		const byteaT7UMOE = "0x050f1017061d03090b1e1517040c0f171b1e170c20050a1b200e"
		const uintzdxNh9C = BigInt("735")
		const address9RhhgS = accounts[2]
		const bytenEgjRj4 = "0x191d0d19130916101e1b0b1e0c141c0c10151a00101616200b081a"
		const uintoVmwVPc = BigInt("1038")
		const addressqD0BEY4 = accounts[0]
		const uintK5KOlFK = BigInt("1847")
		const uintAjWeK4N = BigInt("730")
		const address4BSO8S = accounts[2]
		const boolhgWRw6 = await INSiP3CfAB.approveAndCall.call(addressRboLr4i, uintqTP3yN6, bytefyCvnqV, {from: accounts[1]});
		const boolbVMYx6U = await INSiP3CfAB.approveAndCall.call(address9RhhgS, uintzdxNh9C, byteaT7UMOE, {from: accounts[2]});
		const boolDjiOCwI = await INSiP3CfAB.approveAndCall.call(addressqD0BEY4, uintoVmwVPc, bytenEgjRj4, {from: accounts[4]});
		const boolYGIBTlm = await INSiP3CfAB.burn.call(uintK5KOlFK, {from: accounts[3]});
		const boolhY3g4w = await INSiP3CfAB.burnFrom.call(address4BSO8S, uintAjWeK4N, {from: accounts[5]});

		await expect(INSiP3CfAB.approveAndCall.call(addressRboLr4i, uintqTP3yN6, bytefyCvnqV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintq8JJEUg = BigInt("1702")
		const stringLMAGFmj = "a7uGLyirETHk8YfkQDljW"
		const stringMWpgUfH = "8beSe8o8VsWOyqMXwRE"
		const INSKFzyy9K = await INS.new(uintq8JJEUg, stringLMAGFmj, stringMWpgUfH, {from: accounts[1]});
		const uintdJTO88 = BigInt("1470")
		const addresspHEpVFp = accounts[3]
		const uintRlkbx9e = BigInt("832")
		const addressCMiAiwF = accounts[4]
		const uintISglYBN = BigInt("421")
		const addresslQfgfXA = "0x0000000000000000000000000000000000000001"
		const uintlcQ29q = BigInt("1523")
		const boolEVDebui = await INSKFzyy9K.transfer.call(addresspHEpVFp, uintdJTO88, {from: accounts[2]});
		const boolFjO5xaP = await INSKFzyy9K.burnFrom.call(addressCMiAiwF, uintRlkbx9e, {from: accounts[4]});
		const boolvjL1ADg = await INSKFzyy9K.approve.call(addresslQfgfXA, uintISglYBN, {from: accounts[5]});
		const boolpx5TPSv = await INSKFzyy9K.burn.call(uintlcQ29q, {from: accounts[4]});

		await expect(INSKFzyy9K.transfer.call(addresspHEpVFp, uintdJTO88, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintjglbil4 = BigInt("1017")
		const stringg63uXMB = "NJEC0ufcPc9RvxrWTfOyKQEMmToxydMG4xAXaRoI98WeBmy3xQ"
		const stringxZgIGYy = "Pse9JTwHEXrboofooAHvgu9X5pD51FYVMM0u1YVqhTtRjjjc9GSCp1X"
		const INSkxhLgo3 = await INS.new(uintjglbil4, stringg63uXMB, stringxZgIGYy, {from: accounts[4]});
		const uintbYjfAk = BigInt("471")
		const addressrmrNzBb = accounts[3]
		const addressbjhQY86 = accounts[4]
		const byteEVz2Lqx = "0x0a090c0f181d1d011e0612150305"
		const uintTPHXWQ = BigInt("821")
		const addressrJLxrne = accounts[1]
		const uintXbNO7D9 = BigInt("379")
		const addresslqBwdWQ = accounts[2]
		const addressK7TBVeT = "0x0000000000000000000000000000000000000001"
		const uintC8z7JQP = BigInt("991")
		const addresst2uyjnQ = accounts[3]
		const uintS2I9kLg = BigInt("1043")
		const boolpdY8L63 = await INSkxhLgo3.transferFrom.call(addressbjhQY86, addressrmrNzBb, uintbYjfAk, {from: accounts[3]});
		const boolrhxkVDr = await INSkxhLgo3.approveAndCall.call(addressrJLxrne, uintTPHXWQ, byteEVz2Lqx, {from: accounts[0]});
		const boolHg6PMfH = await INSkxhLgo3.transferFrom.call(addressK7TBVeT, addresslqBwdWQ, uintXbNO7D9, {from: accounts[5]});
		const boolOql08HA = await INSkxhLgo3.approve.call(addresst2uyjnQ, uintC8z7JQP, {from: accounts[1]});
		const boolRYWGeXC = await INSkxhLgo3.burn.call(uintS2I9kLg, {from: accounts[2]});

		await expect(INSkxhLgo3.transferFrom.call(addressbjhQY86, addressrmrNzBb, uintbYjfAk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintNjLRei = BigInt("1879")
		const stringkigdhJ = "vsKLwAGrGYSOC6ViRKUalU4zROjfaCCkz"
		const stringTESB5MF = "ivzTUv8l2baVh"
		const INSfiCBo9q = await INS.new(uintNjLRei, stringkigdhJ, stringTESB5MF, {from: "0x0000000000000000000000000000000000000001"});
		const uintoa7oZhm = BigInt("1023")
		const uintKmlmQ1U = BigInt("1074")
		const uintnWSctMp = BigInt("1437")
		const uint5xhWKY = BigInt("615")
		const addressfj5YZNB = accounts[2]
		const uintHoD5w4r = BigInt("1926")
		const addressxmhjYRH = accounts[2]
		const addresssXj7XV5 = accounts[1]
		const uintfkbfDt4 = BigInt("1624")
		const addressbOr5uUv = accounts[3]
		const booltHR1HKu = await INSfiCBo9q.burn.call(uintoa7oZhm, {from: accounts[4]});
		const booleMTADB1 = await INSfiCBo9q.burn.call(uintKmlmQ1U, {from: accounts[3]});
		const boolcujZHI = await INSfiCBo9q.burn.call(uintnWSctMp, {from: accounts[1]});
		const boolrddEEAP = await INSfiCBo9q.approve.call(addressfj5YZNB, uint5xhWKY, {from: accounts[3]});
		const boolPgb2qu = await INSfiCBo9q.transferFrom.call(addresssXj7XV5, addressxmhjYRH, uintHoD5w4r, {from: accounts[2]});
		const boolBO98Vc = await INSfiCBo9q.approve.call(addressbOr5uUv, uintfkbfDt4, {from: accounts[0]});
	});
})