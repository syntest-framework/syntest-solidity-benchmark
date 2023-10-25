const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addresstvEyjm = accounts[1]
		const LayerxKhMymtP = await Layerx.new(addresstvEyjm, {from: accounts[4]});
		const uintF0ZC48h = BigInt("17")
		const addressHJcEdsc = accounts[2]
		const uintwjmzcqj = BigInt("766")
//		const uintO6JhCqF = await LayerxKhMymtP.exist.call(uintF0ZC48h, {from: accounts[4]});
//		const uintJnG7NEP = await LayerxKhMymtP.getStakesNum.call({from: accounts[0]});
//		const addressqI6XS8B = await LayerxKhMymtP.setNewStakeCreator.call(addressHJcEdsc, {from: accounts[3]});
//		const uintsT741mM = await LayerxKhMymtP.withdraw.call(uintwjmzcqj, {from: accounts[1]});

		await expect(LayerxKhMymtP.exist.call(uintF0ZC48h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqD89GKp = accounts[1]
		const LayerxAzCik3 = await Layerx.new(addressqD89GKp, {from: accounts[4]});
		const addressAQt6HGb = accounts[1]
		const addressI3qShFK = accounts[1]
		const uintm87UQ8s = BigInt("1961")
		const uintAG03EhG = await LayerxAzCik3.allowance.call(addressI3qShFK, addressAQt6HGb, {from: accounts[2]});
//		await LayerxAzCik3.unlock.call({from: accounts[1]});
//		const uintTBgnIH4 = await LayerxAzCik3.exist.call(uintm87UQ8s, {from: accounts[4]});

		assert.equal(uintAG03EhG, BigInt("0"))
		await expect(LayerxAzCik3.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEyxMaYw = accounts[3]
		const Layerxqk8ZEUl = await Layerx.new(addressEyxMaYw, {from: accounts[3]});
		const uintsWv6jof = BigInt("132")
		const bytevsm08gW = "0x110a1f1e1f1a052014"
		const uintnNboRBp = BigInt("668")
		const addressQjHoVz = "0x0000000000000000000000000000000000000001"
		const uintevUZx4c = BigInt("316")
		const addressRMjVRF = accounts[2]
		const bytefFuUXdX = "0x100102191d071e03200c06040a120e041616011a0914181d171d110a0e171e11"
		const uintNFs9Bol = BigInt("1218")
		const addressr6wxkc = accounts[3]
		const uintGJM7z25 = await Layerxqk8ZEUl.getStakesNum.call({from: accounts[2]});
//		const uintx1CsfXQ = await Layerxqk8ZEUl.lock.call(uintsWv6jof, {from: accounts[0]});
//		const boolU6CP4tI = await Layerxqk8ZEUl.approveAndCall.call(addressQjHoVz, uintnNboRBp, bytevsm08gW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJYl6lpB = await Layerxqk8ZEUl.approve.call(addressRMjVRF, uintevUZx4c, {from: accounts[0]});
//		const boolCXkNth4 = await Layerxqk8ZEUl.approveAndCall.call(addressr6wxkc, uintNFs9Bol, bytefFuUXdX, {from: accounts[3]});

		assert.equal(uintGJM7z25, BigInt("1"))
		await expect(Layerxqk8ZEUl.lock.call(uintsWv6jof, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressO5uKwvB = accounts[4]
		const LayerxpkxGUU = await Layerx.new(addressO5uKwvB, {from: accounts[4]});
		const uintB2DGgUM = BigInt("298")
		const addressMHpYfN7 = accounts[0]
		const addressxl5lMlp = accounts[0]
		const boolnxEQqpe = await LayerxpkxGUU.approve.call(addressMHpYfN7, uintB2DGgUM, {from: accounts[2]});
		const uintEcPUkQM = await LayerxpkxGUU.balanceOf.call(addressxl5lMlp, {from: accounts[2]});

		assert.equal(boolnxEQqpe, true)
		assert.equal(uintEcPUkQM, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addressksXdMYv = accounts[1]
		const LayerxoEmAdWO = await Layerx.new(addressksXdMYv, {from: "0x0000000000000000000000000000000000000001"});
		const addressxlnXCC8 = accounts[1]
		const addresse5sZG00 = accounts[3]
		const addresshWchZb6 = accounts[2]
		const addressMNwOXW8 = accounts[0]
		const addresseYA9cbp = await LayerxoEmAdWO.transferOwnership.call(addressxlnXCC8, {from: accounts[0]});
		const uintXckSEC1 = await LayerxoEmAdWO.allowance.call(addresshWchZb6, addresse5sZG00, {from: "0x0000000000000000000000000000000000000001"});
		const uintWGGDGLU = await LayerxoEmAdWO.balanceOf.call(addressMNwOXW8, {from: accounts[2]});
		const uintvPYRY35 = await LayerxoEmAdWO.getStakesNum.call({from: accounts[5]});
		await LayerxoEmAdWO.f.call({from: accounts[2]});
	});

	it('test for Layerx', async () => {
		const addressLtgtk9T = accounts[1]
		const LayerxiIyVbNG = await Layerx.new(addressLtgtk9T, {from: accounts[0]});
		const addresshCeS7RE = accounts[2]
		const address9eYiFE = accounts[4]
//		await LayerxiIyVbNG.f.call({from: accounts[1]});
//		const addressbaNjNl6 = await LayerxiIyVbNG.transferOwnership.call(addresshCeS7RE, {from: accounts[4]});
//		const addressfLsxN6q = await LayerxiIyVbNG.transferOwnership.call(address9eYiFE, {from: accounts[1]});

		await expect(LayerxiIyVbNG.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdhXrXHG = accounts[3]
		const Layerxqk8ZEUl = await Layerx.new(addressdhXrXHG, {from: accounts[3]});
		const uintEh3HqX3 = BigInt("132")
		const byteKwZHiLl = "0x110a1f1e1f1a052014"
		const uintNp6Vc7U = BigInt("668")
		const addressAEXiGij = "0x0000000000000000000000000000000000000001"
		const uintgvLa3OI = BigInt("316")
		const addressCmRFG9 = accounts[2]
		const uintMptEGhe = BigInt("205")
		const addressNwlrwTj = accounts[2]
		const addressNHf6MSs = accounts[0]
		const byteNXtgueQ = "0x100102191d071e03200c06040a120e041616011a0914181d171d110a0e171e11"
		const uintVO27zX = BigInt("1218")
		const addressPTBuokL = accounts[3]
//		await Layerxqk8ZEUl.addStakePayment.call({from: accounts[3]});
//		const uintGJM7z25 = await Layerxqk8ZEUl.getStakesNum.call({from: accounts[2]});
//		const uintx1CsfXQ = await Layerxqk8ZEUl.lock.call(uintEh3HqX3, {from: accounts[0]});
//		const boolU6CP4tI = await Layerxqk8ZEUl.approveAndCall.call(addressAEXiGij, uintNp6Vc7U, byteKwZHiLl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJYl6lpB = await Layerxqk8ZEUl.approve.call(addressCmRFG9, uintgvLa3OI, {from: accounts[0]});
//		const boolW8XNSeL = await Layerxqk8ZEUl.transferFrom.call(addressNHf6MSs, addressNwlrwTj, uintMptEGhe, {from: accounts[4]});
//		const boolCXkNth4 = await Layerxqk8ZEUl.approveAndCall.call(addressPTBuokL, uintVO27zX, byteNXtgueQ, {from: accounts[3]});

		await expect(Layerxqk8ZEUl.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQn4MT77 = accounts[3]
		const Layerxqk8ZEUl = await Layerx.new(addressQn4MT77, {from: accounts[3]});
		const byteY6I0U8n = "0x110a1f1e1f1a052014"
		const uintLrmFiq1 = BigInt("668")
		const addressa0D6MTj = "0x0000000000000000000000000000000000000001"
		const uintMiGmQ5A = BigInt("316")
		const addressC0SAKn2 = accounts[2]
		const bytedrG5jTO = "0x100102191d071e03200c06040a120e041616011a0914181d171d110a0e171e11"
		const uintTd8BV4y = BigInt("1218")
		const addressVthS9fw = accounts[3]
		const uintGJM7z25 = await Layerxqk8ZEUl.getStakesNum.call({from: accounts[2]});
//		const boolU6CP4tI = await Layerxqk8ZEUl.approveAndCall.call(addressa0D6MTj, uintLrmFiq1, byteY6I0U8n, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJYl6lpB = await Layerxqk8ZEUl.approve.call(addressC0SAKn2, uintMiGmQ5A, {from: accounts[0]});
//		const boolCXkNth4 = await Layerxqk8ZEUl.approveAndCall.call(addressVthS9fw, uintTd8BV4y, bytedrG5jTO, {from: accounts[3]});

		assert.equal(uintGJM7z25, BigInt("1"))
		await expect(Layerxqk8ZEUl.approveAndCall.call(addressa0D6MTj, uintLrmFiq1, byteY6I0U8n, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswDyGo2 = accounts[1]
		const LayerxAzCik3 = await Layerx.new(addresswDyGo2, {from: accounts[4]});
		const addresscbt1uEU = accounts[3]
		const uintBOob3H0 = BigInt("461")
		const addressXEkQYUB = accounts[1]
		const addressHLfMHbf = accounts[1]
		const addressZT4D2fu = accounts[2]
		const addressPb1mMUO = accounts[4]
		const uintguP58jj = BigInt("1961")
		const uintyMcsoxM = await LayerxAzCik3.balanceOf.call(addresscbt1uEU, {from: accounts[3]});
//		const uintCqmTej4 = await LayerxAzCik3.withdraw.call(uintBOob3H0, {from: accounts[0]});
//		const uintAG03EhG = await LayerxAzCik3.allowance.call(addressHLfMHbf, addressXEkQYUB, {from: accounts[2]});
//		const uintePAt9yr = await LayerxAzCik3.allowance.call(addressPb1mMUO, addressZT4D2fu, {from: accounts[4]});
//		await LayerxAzCik3.unlock.call({from: accounts[1]});
//		const uintTBgnIH4 = await LayerxAzCik3.exist.call(uintguP58jj, {from: accounts[4]});

		assert.equal(uintyMcsoxM, BigInt("0"))
		await expect(LayerxAzCik3.withdraw.call(uintBOob3H0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSF9F2I = accounts[4]
		const LayerxnH0lrlO = await Layerx.new(addressSF9F2I, {from: accounts[0]});
		const uintjG93d5e = BigInt("1082")
		const uintcjK1Xqo = await LayerxnH0lrlO.totalSupply.call({from: accounts[1]});
//		const uintL9Il394 = await LayerxnH0lrlO.withdraw.call(uintjG93d5e, {from: accounts[4]});
//		await LayerxnH0lrlO.paused.call({from: accounts[2]});

		assert.equal(uintcjK1Xqo, BigInt("40000000000000000000000"))
		await expect(LayerxnH0lrlO.withdraw.call(uintjG93d5e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressmc8OUy4 = accounts[4]
		const LayerxpkxGUU = await Layerx.new(addressmc8OUy4, {from: accounts[4]});
		const uint4Wb2z4 = BigInt("586")
		const addressHmCYyUf = accounts[0]
		const uintN45pv1o = BigInt("1552")
		const addressbwQKKp = accounts[3]
		const addressfqPXpBl = accounts[1]
		const uintKgNYZWp = BigInt("1640")
		const boolnxEQqpe = await LayerxpkxGUU.approve.call(addressHmCYyUf, uint4Wb2z4, {from: accounts[2]});
//		const boolMShDh1a = await LayerxpkxGUU.transferFrom.call(addressfqPXpBl, addressbwQKKp, uintN45pv1o, {from: accounts[4]});
//		const uintxEVGEZh = await LayerxpkxGUU.withdraw.call(uintKgNYZWp, {from: accounts[2]});

		assert.equal(boolnxEQqpe, true)
		await expect(LayerxpkxGUU.transferFrom.call(addressfqPXpBl, addressbwQKKp, uintN45pv1o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJOsN4BN = accounts[1]
		const LayerxAzCik3 = await Layerx.new(addressJOsN4BN, {from: accounts[4]});
		const addressIBqX7kH = accounts[1]
		const addressMZzCZeY = accounts[1]
		const uintuKznNVf = BigInt("1000")
		const addressDt9cFkB = accounts[4]
		const uintAG03EhG = await LayerxAzCik3.allowance.call(addressMZzCZeY, addressIBqX7kH, {from: accounts[2]});
//		const booln1rCKfh = await LayerxAzCik3.transfer.call(addressDt9cFkB, uintuKznNVf, {from: accounts[4]});
//		await LayerxAzCik3.unlock.call({from: accounts[1]});

		assert.equal(uintAG03EhG, BigInt("0"))
		await expect(LayerxAzCik3.transfer.call(addressDt9cFkB, uintuKznNVf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMTYqr3A = accounts[5]
		const LayerxzoBAsU = await Layerx.new(addressMTYqr3A, {from: accounts[4]});
		const addressGMD3WtJ = accounts[3]
		const byteWyodJIZ = "0x1c051114200e00110219121d06060e0701060e040f0516"
		const uintW7RauUT = BigInt("1785")
		const addressdZcst5B = accounts[4]
		const addressdGsPoDX = accounts[4]
		const addressCKWdRml = accounts[1]
		const addressyTcG0hK = accounts[1]
		const uinthFRcEY = BigInt("303")
		const addressvDtGRG = accounts[2]
		const addressN7Y8Z5G = accounts[5]
		const addressFHVjdDA = await LayerxzoBAsU.transferOwnership.call(addressGMD3WtJ, {from: accounts[5]});
//		const boolEC2SyZr = await LayerxzoBAsU.approveAndCall.call(addressdZcst5B, uintW7RauUT, byteWyodJIZ, {from: accounts[3]});
//		const uintxy6Y4Ey = await LayerxzoBAsU.allowance.call(addressCKWdRml, addressdGsPoDX, {from: accounts[2]});
//		const uintyjvLIBn = await LayerxzoBAsU.balanceOf.call(addressyTcG0hK, {from: accounts[2]});
//		const boolKVFqoW = await LayerxzoBAsU.transferFrom.call(addressN7Y8Z5G, addressvDtGRG, uinthFRcEY, {from: accounts[2]});

		await expect(LayerxzoBAsU.approveAndCall.call(addressdZcst5B, uintW7RauUT, byteWyodJIZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshi79FT3 = accounts[1]
		const LayerxAzCik3 = await Layerx.new(addresshi79FT3, {from: accounts[4]});
		const addressLvZgRd = accounts[3]
		const addressUDxZ8Rl = accounts[1]
		const uintAG03EhG = await LayerxAzCik3.allowance.call(addressUDxZ8Rl, addressLvZgRd, {from: accounts[2]});
//		await LayerxAzCik3.addStakePayment.call({from: accounts[3]});
//		await LayerxAzCik3.unlock.call({from: accounts[1]});

		assert.equal(uintAG03EhG, BigInt("0"))
		await expect(LayerxAzCik3.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressnmt6Fe = accounts[1]
		const LayerxAzCik3 = await Layerx.new(addressnmt6Fe, {from: accounts[4]});
		const addressvWEQR3Q = accounts[3]
		const addressbFcgnAm = accounts[1]
		const uintJBgjYCS = BigInt("0")
		const uintr1JR68b = BigInt("1464")
		const addressmAIxrMC = accounts[1]
		const addresse089hCm = accounts[1]
		const uintWRFxmyo = BigInt("794")
		const uintAG03EhG = await LayerxAzCik3.allowance.call(addressbFcgnAm, addressvWEQR3Q, {from: accounts[2]});
//		const uintRoIQnGs = await LayerxAzCik3.lock.call(uintJBgjYCS, {from: accounts[2]});
//		await LayerxAzCik3.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256FSNeCqH = await LayerxAzCik3.burn.call(uintr1JR68b, {from: accounts[2]});
//		await LayerxAzCik3.unlock.call({from: accounts[0]});
//		const addressqSz3dE6 = await LayerxAzCik3.setNewStakeCreator.call(addressmAIxrMC, {from: accounts[2]});
//		const addressMB7hV9K = await LayerxAzCik3.transferOwnership.call(addresse089hCm, {from: accounts[1]});
//		const uintt7Jq3Eg = await LayerxAzCik3.withdraw.call(uintWRFxmyo, {from: accounts[3]});
//		await LayerxAzCik3.unlock.call({from: accounts[1]});

		assert.equal(uintAG03EhG, BigInt("0"))
		await expect(LayerxAzCik3.lock.call(uintJBgjYCS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresscm2lCC = accounts[1]
		const LayerxAzCik3 = await Layerx.new(addresscm2lCC, {from: accounts[4]});
		const addressT2kCSRO = accounts[3]
		const addressu5hRqW6 = await LayerxAzCik3.setNewStakeCreator.call(addressT2kCSRO, {from: accounts[1]});
//		await LayerxAzCik3.unlock.call({from: accounts[1]});

		await expect(LayerxAzCik3.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUGiH5UQ = accounts[1]
		const LayerxoY6Vjw3 = await Layerx.new(addressUGiH5UQ, {from: accounts[4]});
		const boolXO1kzRA = false
		const uintoLWqRA = BigInt("511")
		const uintRxaYhqA = BigInt("287")
		const addressN5G43Dz = accounts[3]
		const booliz6eDDt = await LayerxoY6Vjw3.setIsPaused.call(boolXO1kzRA, {from: accounts[1]});
//		const uintJTOd30t = await LayerxoY6Vjw3.exist.call(uintoLWqRA, {from: accounts[4]});
//		await LayerxoY6Vjw3.addStakePayment.call({from: accounts[2]});
//		const boolpyyUeGY = await LayerxoY6Vjw3.approve.call(addressN5G43Dz, uintRxaYhqA, {from: accounts[2]});

		await expect(LayerxoY6Vjw3.exist.call(uintoLWqRA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNu4Bg7S = accounts[4]
		const LayerxpkxGUU = await Layerx.new(addressNu4Bg7S, {from: accounts[4]});
		const uintqnsmwr6 = BigInt("304")
		const uintBAXTGQ1 = await LayerxpkxGUU.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hPCsdV = await LayerxpkxGUU.burn.call(uintqnsmwr6, {from: accounts[4]});
//		await LayerxpkxGUU.addStakePayment.call({from: accounts[4]});

		assert.equal(uintBAXTGQ1, BigInt("1"))
		await expect(LayerxpkxGUU.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})